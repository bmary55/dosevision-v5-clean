import Link from "next/link";

const tabs = [
  { href: "/optimize/dose-ordering", label: "Dose Ordering" },
  { href: "/optimize/schedule", label: "Schedule" },
  { href: "/optimize/vendors", label: "Vendors" },
  { href: "/optimize/insurance", label: "Health Insurance" },
  { href: "/optimize/credits", label: "Dose Credits" },
];

export default function OptimizeIndex() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-4xl font-bold tracking-tight">Dose Optimization</h1>
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
