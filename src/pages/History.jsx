import Sidebar from "../components/sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import Icon from "../components/Icon.jsx";
import { useState } from "react";

const STATUS_BADGE = {
  Approved: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Pending: "bg-amber-100 text-amber-800 border-amber-200",
  Rejected: "bg-rose-100 text-rose-800 border-rose-200",
};

const STATUS_DOT = {
  Approved: "bg-emerald-500",
  Pending: "bg-amber-500",
  Rejected: "bg-rose-500",
};

const explicitDays = {
  1: { bg: "bg-surface-container-lowest", dot: null },
  2: { bg: "bg-surface-container-low", dot: "bg-emerald-500" },
  3: { bg: "bg-surface-container-low", dot: "bg-emerald-500" },
  4: { bg: "bg-surface-container-low", dot: "bg-amber-500" },
  5: { bg: "bg-surface-container-low", dot: "bg-emerald-500" },
  6: { bg: "bg-surface-container-low", dot: "bg-rose-500" },
  7: { bg: "bg-surface-container-lowest", dot: null },
  8: { bg: "bg-surface-container-lowest missing", dot: null, missing: true },
};

const leadingBlanks = 2;
const days = [];
for (let i = 1; i <= 30; i++) {
  if (i <= 8) {
    days.push({ day: i, ...explicitDays[i] });
  } else {
    const dot = i % 5 === 0 ? "bg-amber-500" : "bg-emerald-500";
    const weekend = (i + 2) % 7 === 0 || (i + 2) % 7 === 6;
    const bg = weekend ? "bg-surface-container-lowest" : "bg-surface-container-low";
    days.push({ day: i, bg, dot: weekend ? null : dot });
  }
}

const reports = [
  {
    date: "Oct 14, 2023",
    summary: "Database migration and schema optimization for Q4 launch...",
    status: "Approved",
    feedback: "—",
    action: "visibility",
  },
  {
    date: "Oct 13, 2023",
    summary: "Client presentation prep and weekly alignment meeting.",
    status: "Pending",
    feedback: "Awaiting manager review",
    italic: true,
    action: "edit",
  },
  {
    date: "Oct 12, 2023",
    summary: "Frontend bug fixes and unit testing for UI components.",
    status: "Approved",
    feedback: '"Clear documentation provided."',
    action: "visibility",
  },
  {
    date: "Oct 06, 2023",
    summary: "Research into new cloud infrastructure alternatives.",
    status: "Rejected",
    feedback: '"Missing billing codes for hours."',
    reject: true,
    action: "edit",
  },
];

export default function History() {
  const [filter, setFilter] = useState("All Statuses");

  const filtered =
    filter === "All Statuses"
      ? reports
      : reports.filter((r) => r.status === filter);

  return (
    <div className="text-on-surface">
      <Sidebar
        user={{ initials: "JD", name: "Jane Doe", role: "Staff Member" }}
      />
      <Topbar variant="history" />

      <main className="ml-[260px] pt-16 min-h-screen p-8">
        <div className="max-w-container-max mx-auto">
          {/* Breadcrumbs & Export */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <nav className="flex items-center gap-2 text-on-surface-variant mb-1">
                <span className="font-label-md">Dashboard</span>
                <Icon name="chevron_right" className="text-[16px]" />
                <span className="font-label-md text-primary">My History</span>
              </nav>
              <h3 className="font-headline-md text-headline-md font-bold">
                My Report History
              </h3>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:bg-surface-container-high rounded-lg font-button-text transition-colors">
              <Icon name="download" />
              <span>Export History</span>
            </button>
          </div>

          <div className="grid grid-cols-12 gap-gutter">
            {/* Left: Calendar View */}
            <div className="col-span-12 lg:col-span-8">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-headline-sm text-headline-sm font-semibold">
                    October 2023
                  </h4>
                  <div className="flex gap-2">
                    <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-high">
                      <Icon name="chevron_left" />
                    </button>
                    <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-high">
                      <Icon name="chevron_right" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 text-center font-label-md text-on-surface-variant mb-4">
                  <div>SUN</div>
                  <div>MON</div>
                  <div>TUE</div>
                  <div>WED</div>
                  <div>THU</div>
                  <div>FRI</div>
                  <div>SAT</div>
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: leadingBlanks }).map((_, i) => (
                    <div
                      key={`blank-${i}`}
                      className="h-24 bg-surface-container-low/30 rounded-lg"
                    />
                  ))}
                  {days.map((d) => (
                    <div
                      key={d.day}
                      className={`h-24 border border-outline-variant rounded-lg p-2 ${d.bg} relative group cursor-pointer hover:border-primary transition-colors`}
                    >
                      <span className="font-label-md">{d.day < 10 ? `0${d.day}` : d.day}</span>
                      {d.missing && (
                        <>
                          <div className="absolute top-2 right-2 flex items-center justify-center w-5 h-5 bg-primary text-on-primary rounded-full text-[10px]">
                            !
                          </div>
                          <p className="text-[10px] text-primary mt-1 font-bold leading-tight">
                            Missing Report
                          </p>
                        </>
                      )}
                      {d.dot && (
                        <div className="absolute bottom-2 left-2 flex gap-1">
                          <span className={`w-2 h-2 rounded-full ${d.dot}`}></span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-body-sm text-on-surface-variant border-t border-outline-variant pt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Approved
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span> Pending
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span> Rejected
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-primary bg-primary/5 rounded"></div> Missing
                    Report
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Stats Summary */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
              <div className="bg-primary text-on-primary p-6 rounded-xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <p className="font-label-md opacity-80 uppercase tracking-wider mb-1">
                    Monthly Compliance
                  </p>
                  <h4 className="text-4xl font-bold mb-4">92%</h4>
                  <div className="w-full bg-white/20 h-2 rounded-full mb-4">
                    <div className="bg-white h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                  <p className="text-body-sm">
                    You have submitted 23 of 25 reports this month. Great job!
                  </p>
                </div>
                <Icon
                  name="verified_user"
                  className="absolute -bottom-6 -right-6 text-9xl opacity-10"
                />
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-6">
                <h4 className="font-label-md text-on-surface-variant uppercase tracking-wider mb-4">
                  Recent Feedback
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-emerald-500">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-label-md text-primary">Oct 12, 2023</span>
                      <Icon name="thumb_up" className="text-emerald-500 text-[18px]" />
                    </div>
                    <p className="text-body-sm font-semibold">
                      "Excellent detail on the project migration task. Very clear
                      documentation."
                    </p>
                    <p className="text-[11px] text-on-surface-variant mt-1">
                      — Mark Spencer, Manager
                    </p>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-lg border-l-4 border-rose-500">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-label-md text-primary">Oct 06, 2023</span>
                      <Icon name="error_outline" className="text-rose-500 text-[18px]" />
                    </div>
                    <p className="text-body-sm font-semibold">
                      "Missing billing codes for hours worked. Please update and
                      resubmit."
                    </p>
                    <p className="text-[11px] text-on-surface-variant mt-1">
                      — Mark Spencer, Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Filterable Table */}
            <div className="col-span-12">
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-outline-variant flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <h4 className="font-headline-sm text-headline-sm font-semibold">
                    Detailed Report Log
                  </h4>
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <select
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className="bg-surface-container-low border-outline-variant rounded-lg text-body-md py-2 pl-3 pr-8 focus:ring-primary focus:border-primary"
                    >
                      <option>All Statuses</option>
                      <option>Approved</option>
                      <option>Pending</option>
                      <option>Rejected</option>
                    </select>
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-surface-container-high rounded-lg font-button-text border border-outline-variant">
                      <Icon name="filter_list" className="text-[20px]" />
                      <span>More Filters</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-surface-container-low border-b border-outline-variant">
                      <tr>
                        <th className="px-6 py-4 font-label-md text-on-surface-variant">DATE</th>
                        <th className="px-6 py-4 font-label-md text-on-surface-variant">
                          TASK SUMMARY
                        </th>
                        <th className="px-6 py-4 font-label-md text-on-surface-variant">STATUS</th>
                        <th className="px-6 py-4 font-label-md text-on-surface-variant">
                          FEEDBACK
                        </th>
                        <th className="px-6 py-4 font-label-md text-on-surface-variant text-right">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/30">
                      {filtered.length === 0 && (
                        <tr>
                          <td colSpan={5} className="px-6 py-8 text-center text-secondary text-body-md">
                            No reports match this filter.
                          </td>
                        </tr>
                      )}
                      {filtered.map((r) => (
                        <tr
                          key={r.date}
                          className="hover:bg-surface-container-low transition-colors group"
                        >
                          <td className="px-6 py-4 font-body-md font-semibold">{r.date}</td>
                          <td className="px-6 py-4 font-body-md max-w-xs truncate">
                            {r.summary}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${STATUS_BADGE[r.status]}`}
                            >
                              {r.status}
                            </span>
                          </td>
                          <td
                            className={`px-6 py-4 font-body-sm ${
                              r.reject
                                ? "text-rose-600"
                                : r.italic
                                ? "text-on-surface-variant italic"
                                : "text-on-surface-variant"
                            }`}
                          >
                            {r.feedback}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-primary hover:text-on-primary-fixed-variant opacity-0 group-hover:opacity-100 transition-opacity">
                              <Icon name={r.action} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="px-6 py-4 border-t border-outline-variant flex justify-between items-center bg-surface-container-low/50">
                  <span className="font-body-sm text-on-surface-variant">
                    Showing 1-{filtered.length} of 42 records
                  </span>
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-high font-body-sm disabled:opacity-50"
                      disabled
                    >
                      Previous
                    </button>
                    <button className="px-3 py-1 bg-primary text-on-primary rounded font-body-sm">
                      1
                    </button>
                    <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-high font-body-sm">
                      2
                    </button>
                    <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-high font-body-sm">
                      3
                    </button>
                    <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-high font-body-sm">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
