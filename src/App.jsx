import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import ReminderAlert from "./components/ReminderAlert.jsx";
import DailyLogForm from "./components/DailyLogForm.jsx";
import RecentActivities from "./components/RecentActivities.jsx";
import TodayProgress from "./components/TodayProgress.jsx";
import RecurringTasks from "./components/RecurringTasks.jsx";
import StatsCard from "./components/StatsCard.jsx";
import { fetchTasks, createTask } from "./lib/tasks.js";

const seedTasks = [
  {
    title: "Project Sync Call",
    subtitle: "Internal coordination for Q4 roadmap",
    duration: "1h 30m",
    status: "Approved",
  },
  {
    title: "Email Communications",
    subtitle: "Follow-up with vendor support",
    duration: "0h 45m",
    status: "Pending",
  },
];

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let rows = await fetchTasks();
        if (rows.length === 0) {
          for (const t of seedTasks) await createTask(t);
          rows = await fetchTasks();
        }
        setTasks(rows);
      } catch (err) {
        console.error("Failed to load tasks:", err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const addTask = async (task) => {
    try {
      const created = await createTask(task);
      setTasks((prev) => [created, ...prev]);
    } catch (err) {
      console.error("Failed to save task:", err.message);
    }
  };

  const copyRecurring = (task) => {
    const [h, m] = task.meta.split(" • ")[0].split("h ");
    addTask({
      title: task.title,
      subtitle: task.meta.split(" • ")[1] || "",
      duration: `${h}h ${m.replace("m", "")}m`,
      status: "In Progress",
    });
  };

  return (
    <div className="text-on-surface">
      <Sidebar />
      <Topbar />

      <main className="ml-[260px] pt-16 min-h-screen p-8 max-w-container-max mx-auto">
        <section className="mb-8 flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface">
              Good Morning, John
            </h1>
            <p className="font-body-lg text-body-lg text-secondary">
              It's Wednesday, Oct 25. Ready to log your daily progress?
            </p>
          </div>
          <ReminderAlert />
        </section>

        <div className="grid grid-cols-12 gap-gutter">
          <section className="col-span-12 lg:col-span-8 space-y-gutter">
            <DailyLogForm onAdd={addTask} />
            {loading ? (
              <div className="work-card p-6 text-secondary text-body-md">
                Loading tasks…
              </div>
            ) : (
              <RecentActivities tasks={tasks} />
            )}
          </section>

          <aside className="col-span-12 lg:col-span-4 space-y-gutter">
            <TodayProgress />
            <RecurringTasks onCopy={copyRecurring} />
            <StatsCard />
          </aside>
        </div>
      </main>
    </div>
  );
}
