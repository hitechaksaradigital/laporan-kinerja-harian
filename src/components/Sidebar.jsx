import { NavLink } from "react-router-dom";
import Icon from "./Icon.jsx";

const navItems = [
  { to: "/", icon: "dashboard", label: "Dashboard", end: true },
  { to: "/history", icon: "history", label: "History" },
  { to: "/approval", icon: "fact_check", label: "Approval" },
  { to: "/analytics", icon: "analytics", label: "Analytics" },
  { to: "/management", icon: "manage_accounts", label: "Management" },
];

export default function Sidebar({
  user = { initials: "JD", name: "John Doe", role: "Project Manager" },
}) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] bg-surface-container-lowest border-r border-outline-variant flex flex-col p-6 shadow-sm z-50">
      <div className="mb-8">
        <h1 className="font-headline-md text-headline-md font-bold text-primary">
          Corporate Modern
        </h1>
        <p className="font-body-sm text-label-md text-on-surface-variant">
          Enterprise Portal
        </p>
      </div>

      <nav className="flex flex-col gap-2 flex-grow">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-4 py-3 text-primary bg-secondary-container rounded-lg font-bold transition-transform active:scale-[0.98]"
                : "flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 rounded-lg"
            }
          >
            <Icon name={item.icon} />
            <span className="font-label-md text-label-md">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-outline-variant">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold">
            {user.initials}
          </div>
          <div className="overflow-hidden">
            <p className="font-label-md text-label-md truncate">{user.name}</p>
            <p className="font-body-sm text-label-md text-on-surface-variant truncate">
              {user.role}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
