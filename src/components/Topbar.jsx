import Icon from "./Icon.jsx";

const AVATAR_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_T-_s_xsGzyOKF-5wC62ittlw4f1wVgusclG7ApQz4fee-ixQXX8enipHw908AWihzJcM3cnUluLA-Ko5-1FwcQXsi3S7XXrFnxj81u1eKWeMEQtCNyqZ1b877Y3qBvqkuNezkP7PAa550t2eRJHgWieaLYzDkPxupdxLXP4uMB3rcsvVXBe5py39Yv6AvGQGciM6440RMJ9pMFk_5ODhjq3oFTCqXjtR6IzEm7vCB3dEXQvWO_2Cw";

export default function Topbar() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-surface-container-lowest border-b border-outline-variant z-40 flex items-center px-8 justify-between">
      <div className="flex items-center gap-4 flex-1">
        <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
          Activity Report System
        </h2>
        <div className="relative w-full max-w-md ml-8">
          <Icon
            name="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-outline"
          />
          <input
            className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-body-md"
            placeholder="Search tasks, reports..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative text-on-surface hover:text-primary transition-all">
          <Icon name="notifications" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <button className="text-on-surface hover:text-primary transition-all">
          <Icon name="settings" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-outline-variant">
          <img
            className="w-full h-full object-cover"
            alt="John Doe profile"
            src={AVATAR_SRC}
          />
        </div>
      </div>
    </header>
  );
}
