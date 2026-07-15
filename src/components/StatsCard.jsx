import Icon from "./Icon.jsx";

const STATS_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBCTtN7XrzHyEpLoSEXzR08rLfr0EgTUU6O944cjpuhdAaBWomYafO68TH3cogbDUTGt2Bw90fhIiRo813b_2_Lh_G_Gv-4XSjFlhHg5yi1wF1D1YfcuXVT49Ls_F4maOPWJzzEXaaPoJhHbavNxandkxWSl9RqmlH7DxIQx2ZCYmxyCCoDr9tcB5XFN1FQr2AiRouILVR_EeknpqRInkHyYcX5InAGSH7QInubVpfpWtox76Dn1D5K-Q";

export default function StatsCard() {
  return (
    <div className="work-card h-[240px] relative overflow-hidden group">
      <img
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        alt="Minimalist workspace during golden hour"
        src={STATS_IMG}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
        <p className="text-white/70 font-label-md text-label-md mb-1">
          Efficiency Score
        </p>
        <div className="flex items-end gap-2">
          <h4 className="text-white text-3xl font-bold">94%</h4>
          <span className="text-emerald-400 text-sm font-bold flex items-center mb-1">
            <Icon name="arrow_upward" className="text-sm" /> 2.4%
          </span>
        </div>
        <p className="text-white/60 text-[11px] mt-2 italic">
          "Focus on being productive instead of busy."
        </p>
      </div>
    </div>
  );
}
