import { useState } from "react";
import Icon from "./Icon.jsx";

const inputClass =
  "w-full px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant text-body-md text-on-surface placeholder:text-outline outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30";
const labelClass =
  "font-label-md text-label-md text-on-surface-variant block mb-1.5";

const parseDuration = (d = "") => {
  const h = (d.match(/(\d+)h/) || [])[1] || "";
  const m = (d.match(/(\d+)m/) || [])[1] || "";
  return { h, m };
};

export default function DailyLogForm({
  editing = null,
  onAdd,
  onUpdate,
  onCancelEdit,
}) {
  const [status, setStatus] = useState("idle"); // idle | loading | success

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

    const task = {
      title: title || "Untitled Task",
      subtitle: description || "No description provided",
      duration,
      status: taskStatus,
    };

    setStatus("loading");
    setTimeout(async () => {
      try {
        if (editing) {
          await onUpdate(editing.id, task);
        } else {
          await onAdd(task);
        }
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          e.target.reset();
          if (editing) onCancelEdit?.();
        }, 2000);
      } catch (err) {
        console.error("Failed to save task:", err.message);
        setStatus("idle");
      }
    }, 1000);
  };

  const dur = parseDuration(editing?.duration);
  const formKey = editing ? `edit-${editing.id}` : "new";

  return (
    <div className="work-card p-6">
      <div className="flex items-center justify-between mb-6 pb-5 border-b border-outline-variant">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center">
            <Icon name={editing ? "edit_note" : "add_task"} className="text-primary" />
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm leading-none">
              {editing ? "Edit Log Entry" : "Daily Log Entry"}
            </h3>
            <p className="font-label-md text-label-md text-secondary mt-1">
              {editing ? `Editing • ${editing.title}` : "New Entry • Today"}
            </p>
          </div>
        </div>
        {editing && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-secondary hover:bg-surface-container-high transition-colors"
          >
            <Icon name="close" className="text-sm" />
            <span className="font-label-md text-label-md">Cancel</span>
          </button>
        )}
      </div>

      <form key={formKey} className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="title" className={labelClass}>
              Task Title
            </label>
            <input
              id="title"
              name="title"
              defaultValue={editing?.title || ""}
              className={inputClass}
              placeholder="e.g. Client Presentation Prep"
              type="text"
              required
            />
          </div>
          <div>
            <label htmlFor="status" className={labelClass}>
              Status
            </label>
            <select
              id="status"
              name="status"
              defaultValue={editing?.status || "In Progress"}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option>Completed</option>
              <option>In Progress</option>
              <option>Pending</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className={labelClass}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={editing?.subtitle || ""}
            className={inputClass}
            placeholder="Detailed notes on what was accomplished..."
            rows="3"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Duration</label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  name="hr"
                  defaultValue={dur.h}
                  className={`${inputClass} pr-8`}
                  placeholder="0"
                  type="number"
                  min="0"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary text-body-sm">
                  h
                </span>
              </div>
              <div className="relative flex-1">
                <input
                  name="min"
                  defaultValue={dur.m}
                  className={`${inputClass} pr-8`}
                  placeholder="0"
                  type="number"
                  min="0"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary text-body-sm">
                  m
                </span>
              </div>
            </div>
          </div>
          <div>
            <label className={labelClass}>Attachments</label>
            <label className="flex items-center justify-center gap-2 h-[42px] border-2 border-dashed border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low hover:border-primary transition-colors">
              <Icon name="upload_file" className="text-outline" />
              <span className="text-body-sm text-secondary">
                Drop files here or click to upload
              </span>
              <input type="file" className="hidden" multiple />
            </label>
          </div>
        </div>

        <div className="pt-2 flex justify-end gap-3">
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
            {status === "idle" && (editing ? "Update Task" : "Submit Task")}
            {status === "loading" && (
              <span className="inline-flex items-center gap-2">
                <Icon name="refresh" className="animate-spin" /> Saving
              </span>
            )}
            {status === "success" && (
              <span className="inline-flex items-center gap-2">
                <Icon name="check_circle" /> Saved
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
