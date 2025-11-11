export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Waste Management</h1>
      <div className="pill">
        <p className="text-slate-600 text-sm">Placeholder content. Export buttons will be added per page.</p>
        <div className="mt-3 flex gap-3">
          <button className="btn btn-primary">Export CSV</button>
          <button className="btn btn-secondary">Export Excel</button>
        </div>
      </div>
    </div>
  );
}
