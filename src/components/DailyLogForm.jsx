import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

const badgeFor = (status) => {
  switch (status) {
    case "Completed":
    case "Approved":
      return { label: "Approved", cls: "bg-emerald-100 text-emerald-700 border-emerald-200" };
    case "In Progress":
      return { label: "In Progress", cls: "bg-blue-100 text-blue-700 border-blue-200" };
    default:
      return { label: "Pending", cls: "bg-amber-100 text-amber-700 border-amber-200" };
  }
};

export default function DailyLogForm({ onAdd }) {
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [formKey, setFormKey] = useState(0);
  const ref = useState({ current: null })[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const title = (data.get("title") || "").toString().trim();
    const description = (data.get("description") || "").toString().trim();
    const hr = (data.get("hr") || "").toString().trim();
    const min = (data.get("min") || "").toString().trim();
    const taskStatus = (data.get("status") || "In Progress").toString();

    const duration =
      [hr && `${hr}h`, min && `${min}m`].filter(Boolean).join(" ") || "0h 0m";

    setStatus("loading");
    setTimeout(() => {
      onAdd({
        title: title || "Untitled Task",
        subtitle: description || "No description provided",
        duration,
        status: taskStatus,
      });
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setFormKey((k) => k + 1);
      }, 2000);
    }, 1000);
  };

  return (
    <div className="work-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline-sm text-headline-sm flex items-center gap-2">
          <Icon name="add_task" className="text-primary" />
          Daily Log Entry
        </h3>
        <span className="font-label-md text-label-md text-secondary">
          New Entry • Today
        </span>
      </div>

      <form key={formKey} className="space-y-6" onSubmit={handleSubmit} ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="font-label-md text-label-md text-on-surface-variant block">
              Task Title
            </label>
            <input
              name="title"
              className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary text-body-md"
              placeholder="e.g. Client Presentation Prep"
              type="text"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="font-label-md text-label-md text-on-surface-variant block">
              Status
            </label>
            <select
              name="status"
              className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary text-body-md"
              defaultValue="In Progress"
            >
              <option>Completed</option>
              <option>In Progress</option>
              <option>Pending</option>
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label className="font-label-md text-label-md text-on-surface-variant block">
            Description
          </label>
          <textarea
            name="description"
            className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary text-body-md"
            placeholder="Detailed notes on what was accomplished..."
            rows="3"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="font-label-md text-label-md text-on-surface-variant block">
              Duration
            </label>
            <div className="flex gap-2">
              <input
                name="hr"
                className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary text-body-md"
                placeholder="Hr"
                type="number"
                min="0"
              />
              <input
                name="min"
                className="w-full rounded-lg border-outline-variant focus:border-primary focus:ring-primary text-body-md"
                placeholder="Min"
                type="number"
                min="0"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="font-label-md text-label-md text-on-surface-variant block">
              Attachments
            </label>
            <div className="border-2 border-dashed border-outline-variant rounded-lg p-3 text-center cursor-pointer hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
              <Icon name="upload_file" className="text-outline" />
              <span className="text-body-sm text-secondary">
                Drop files here or click to upload
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <button
            className="px-6 py-2 rounded-lg text-secondary border border-outline-variant font-button-text hover:bg-surface-container transition-colors"
            type="reset"
          >
            Clear
          </button>
          <button
            className={`px-6 py-2 rounded-lg font-button-text shadow-sm transition-all active:scale-95 ${
              status === "success"
                ? "bg-emerald-600 text-white"
                : "bg-primary text-on-primary hover:opacity-90"
            }`}
            type="submit"
            disabled={status !== "idle"}
          >
            {status === "idle" && "Submit Task"}
            {status === "loading" && (
              <span className="inline-flex items-center gap-2">
                <Icon name="refresh" className="animate-spin" /> Submitting
              </span>
            )}
            {status === "success" && (
              <span className="inline-flex items-center gap-2">
                <Icon name="check_circle" /> Success
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
