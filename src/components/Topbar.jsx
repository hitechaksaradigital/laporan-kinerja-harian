import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

const AVATAR_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_T-_s_xsGzyOKF-5wC62ittlw4f1wVgusclG7ApQz4fee-ixQXX8enipHw908AWihzJcM3cnUluLA-Ko5-1FwcQXsi3S7XXrFnxj81u1eKWeMEQtCNyqZ1b877Y3qBvqkuNezkP7PAa550t2eRJHgWieaLYzDkPxupdxLXP4uMB3rcsvVXBe5py39Yv6AvGQGciM6440RMJ9pMFk_5ODhjq3oFTCqXjtR6IzEm7vCB3dEXQvWO_2Cw";

export default function Topbar({ variant = "dashboard" }) {
  const isHistory = variant === "history";

  return (
    <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-surface-container-lowest border-b border-outline-variant flex items-center justify-between px-8 shadow-sm z-40">
      <div className="flex items-center gap-6">
        <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
          Activity Report System
        </h2>
        <div className="relative w-64">
          <Icon
            name="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
          />
          <input
            className="w-full pl-10 pr-4 py-1.5 bg-surface-container-low border border-outline-variant rounded-full text-body-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search reports..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-surface-container-high rounded-full transition-all">
          <Icon name="notifications" />
        </button>
        <button className="p-2 hover:bg-surface-container-high rounded-full transition-all">
          <Icon name="settings" />
        </button>
        {isHistory ? (
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-button-text transition-transform active:scale-95 shadow-sm"
          >
            <Icon name="add" />
            <span>New Report</span>
          </Link>
        ) : (
          <>
            <div className="h-8 w-px bg-outline-variant mx-2"></div>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-outline-variant">
              <img
                className="w-full h-full object-cover"
                alt="John Doe profile"
                src={AVATAR_SRC}
              />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
