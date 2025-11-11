import Link from "next/link";

const tabs = [
  { href: "/regulatory/daily-area-survey", label: "Daily Area Survey" },
  { href: "/regulatory/weekly-area-survey", label: "Weekly Area Survey" },
  { href: "/regulatory/sealed-source", label: "Seal Source Inventory" },
  { href: "/regulatory/tracer-check", label: "Tracer Check In/Out" },
  { href: "/regulatory/patient-dose-log", label: "Patient Dose Log" },
  { href: "/regulatory/hot-lab-instruments", label: "Hot Lab Instruments" },
  { href: "/regulatory/dosimeter-tracker", label: "Dosimeter Tracker" },
  { href: "/regulatory/waste-management", label: "Waste Management" },
  { href: "/regulatory/todo", label: "To Do List" },
];

export default function RegulatoryIndex() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-4xl font-bold tracking-tight">Regulatory</h1>
        <p className="text-slate-600">Tabs below mirror the design you provided.</p>
      </header>
      <nav className="tabbar">
        {tabs.map((t, i) => (
          <Link key={i} href={t.href as any} className="tab">{t.label}</Link>
        ))}
      </nav>
      <div className="pill">
        <p className="text-slate-600 text-sm">Select a tab to view content.</p>
      </div>
    </div>
  );
}
