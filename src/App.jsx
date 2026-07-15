import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import ReminderAlert from "./components/ReminderAlert.jsx";
import DailyLogForm from "./components/DailyLogForm.jsx";
import RecentActivities from "./components/RecentActivities.jsx";
import TodayProgress from "./components/TodayProgress.jsx";
import RecurringTasks from "./components/RecurringTasks.jsx";
import StatsCard from "./components/StatsCard.jsx";

export default function App() {
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
            <DailyLogForm />
            <RecentActivities />
          </section>

          <aside className="col-span-12 lg:col-span-4 space-y-gutter">
            <TodayProgress />
            <RecurringTasks />
            <StatsCard />
          </aside>
        </div>
      </main>
    </div>
  );
}
