import Icon from "./Icon.jsx";

const tasks = [
  {
    title: "Project Sync Call",
    subtitle: "Internal coordination for Q4 roadmap",
    duration: "1h 30m",
    status: "Approved",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  {
    title: "Email Communications",
    subtitle: "Follow-up with vendor support",
    duration: "0h 45m",
    status: "Pending",
    badge: "bg-amber-100 text-amber-700 border-amber-200",
  },
];

export default function RecentActivities() {
  return (
    <div className="work-card overflow-hidden">
      <div className="p-6 border-b border-outline-variant flex justify-between items-center">
        <h3 className="font-headline-sm text-headline-sm">Today's Logged Tasks</h3>
        <button className="text-primary font-label-md text-label-md hover:underline">
          View All History
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead className="bg-surface-container-low">
          <tr>
            <th className="p-4 font-label-md text-label-md text-on-surface-variant">
              Task
            </th>
            <th className="p-4 font-label-md text-label-md text-on-surface-variant">
              Duration
            </th>
            <th className="p-4 font-label-md text-label-md text-on-surface-variant">
              Status
            </th>
            <th className="p-4 font-label-md text-label-md text-on-surface-variant">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant">
          {tasks.map((task) => (
            <tr key={task.title} className="hover:bg-surface-container transition-colors">
              <td className="p-4">
                <p className="font-body-md text-body-md font-bold">{task.title}</p>
                <p className="text-[12px] text-secondary">{task.subtitle}</p>
              </td>
              <td className="p-4 font-body-md text-body-md text-on-surface-variant">
                {task.duration}
              </td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 text-[11px] font-bold rounded-full border ${task.badge}`}
                >
                  {task.status}
                </span>
              </td>
              <td className="p-4">
                <button
                  className="material-symbols-outlined text-outline hover:text-primary transition-colors"
                  aria-label={`Edit ${task.title}`}
                >
                  edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
