import Icon from "./Icon.jsx";

const recurring = [
  { title: "Daily Standup", meta: "0.5h • Meetings" },
  { title: "Code Review", meta: "1.0h • Quality" },
  { title: "Admin/Emails", meta: "0.5h • Operations" },
];

export default function RecurringTasks() {
  return (
    <div className="work-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-headline-sm text-headline-sm flex items-center gap-2">
          <Icon name="auto_mode" className="text-secondary" />
          Recurring
        </h3>
        <button className="p-1 hover:bg-surface-container rounded transition-colors">
          <Icon name="more_vert" className="text-sm" />
        </button>
      </div>
      <p className="text-body-sm text-on-surface-variant mb-4">
        Copy common tasks from yesterday's log to save time.
      </p>
      <div className="space-y-2">
        {recurring.map((task) => (
          <div
            key={task.title}
            className="group flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-primary-container/5 transition-all cursor-pointer"
          >
            <div>
              <p className="font-body-md text-body-md font-bold">{task.title}</p>
              <p className="text-[10px] text-secondary">{task.meta}</p>
            </div>
            <button
              className="material-symbols-outlined text-outline group-hover:text-primary"
              aria-label={`Copy ${task.title}`}
            >
              content_copy
            </button>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 border-2 border-dashed border-outline-variant rounded-lg text-label-md text-secondary hover:text-primary hover:border-primary transition-all flex items-center justify-center gap-2">
        <Icon name="add" className="text-sm" />
        Manage Templates
      </button>
    </div>
  );
}
