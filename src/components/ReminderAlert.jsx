import { useState } from "react";
import Icon from "./Icon.jsx";

export default function ReminderAlert() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      className="flex items-center gap-4 bg-error-container text-on-error-container p-4 rounded-xl border border-error/20 animate-pulse"
      id="reminder-alert"
    >
      <Icon name="warning" className="text-error" />
      <p className="font-label-md text-label-md">
        Pending report for yesterday (Oct 24) needs your attention.
      </p>
      <button
        className="material-symbols-outlined text-error text-lg hover:opacity-70"
        onClick={() => setVisible(false)}
        aria-label="Dismiss reminder"
      >
        close
      </button>
    </div>
  );
}
