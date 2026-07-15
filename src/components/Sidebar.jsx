import Icon from "./Icon.jsx";

const navItems = [
  { icon: "dashboard", label: "Dashboard", active: true },
  { icon: "history", label: "History" },
  { icon: "fact_check", label: "Approval" },
  { icon: "analytics", label: "Analytics" },
  { icon: "manage_accounts", label: "Management" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-surface-container-lowest border-r border-outline-variant flex flex-col p-6 z-50">
      <div className="mb-8">
        <h1 className="font-headline-md text-headline-md font-bold text-primary">
          Corporate Modern
        </h1>
        <p className="font-label-md text-label-md text-secondary opacity-70">
          Enterprise Portal
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) =>
          item.active ? (
            <a
              key={item.label}
              className="flex items-center gap-3 px-4 py-3 text-primary bg-secondary-container rounded-lg font-bold transition-transform active:scale-[0.98]"
              href="#"
            >
              <Icon name={item.icon} />
              <span className="font-label-md text-label-md">{item.label}</span>
            </a>
          ) : (
            <a
              key={item.label}
              className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg"
              href="#"
            >
              <Icon name={item.icon} />
              <span className="font-label-md text-label-md">{item.label}</span>
            </a>
          )
        )}
      </nav>

      <div className="mt-auto pt-6 border-t border-outline-variant">
        <div className="flex items-center gap-3 p-2">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary font-bold">
            JD
          </div>
          <div>
            <p className="font-label-md text-label-md font-bold">John Doe</p>
            <p className="text-[10px] text-secondary">Project Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
