import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

export default function TodayProgress() {
  const target = 65;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(target), 300);
    return () => clearTimeout(t);
  }, [target]);

  return (
    <div className="work-card p-6 bg-primary text-on-primary border-none relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="font-label-md text-label-md opacity-80 mb-1">
              Today's Progress
            </p>
            <h2 className="text-4xl font-bold tracking-tight">
              5.25 <span className="text-lg font-normal opacity-70">/ 8h</span>
            </h2>
          </div>
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <Icon name="schedule" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-[12px] font-bold">
            <span>65% Target Reached</span>
            <span>2.75h left</span>
          </div>
          <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${width}%` }}
            ></div>
          </div>
        </div>
        <p className="mt-6 text-body-sm opacity-80">
          You're doing great! Log 3 more small tasks to hit your daily goal.
        </p>
      </div>
    </div>
  );
}
