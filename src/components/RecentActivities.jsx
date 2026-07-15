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

export default function RecentActivities({ tasks, onEdit }) {
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
            <th className="p-4 font-label-md text-label-md text-on-surface-variant">Task</th>
            <th className="p-4 font-label-md text-label-md text-on-surface-variant">Duration</th>
            <th className="p-4 font-label-md text-label-md text-on-surface-variant">Status</th>
            <th className="p-4 font-label-md text-label-md text-on-surface-variant">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant">
          {tasks.length === 0 && (
            <tr>
              <td colSpan={4} className="p-8 text-center text-secondary text-body-md">
                No tasks logged yet. Add your first entry above.
              </td>
            </tr>
          )}
          {tasks.map((task) => {
            const badge = badgeFor(task.status);
            return (
              <tr key={task.id} className="hover:bg-surface-container transition-colors">
                <td className="p-4">
                  <p className="font-body-md text-body-md font-bold">{task.title}</p>
                  <p className="text-[12px] text-secondary">{task.subtitle}</p>
                </td>
                <td className="p-4 font-body-md text-body-md text-on-surface-variant">
                  {task.duration}
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-[11px] font-bold rounded-full border ${badge.cls}`}
                  >
                    {badge.label}
                  </span>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => onEdit?.(task)}
                    className="material-symbols-outlined text-outline hover:text-primary transition-colors"
                    aria-label={`Edit ${task.title}`}
                  >
                    edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
