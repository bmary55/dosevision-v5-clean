export default function Home() {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="DoseVision" className="h-8 w-8"/>
        <span className="text-xl font-semibold text-[var(--primary)]">DoseVision</span>
      </div>

      <section className="hero">
        <img src="/logo.svg" alt="DoseVision" className="h-24 w-24 mx-auto mb-6"/>
        <h1>DoseVision</h1>
        <p className="mt-2 text-[var(--primary)]">Turning Data into Dose Assurance</p>
        <p className="mt-4">Comprehensive software for dose ordering optimization and regulatory compliance management.</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="pill">
          <h2 className="text-2xl font-semibold mb-2">Dose Ordering Optimization</h2>
          <p className="text-slate-600 mb-4">
            Simplify and optimize your dose workflow with profit-driven, margin-focused ordering, centralized vendor coordination, and
            automatic dose credit reconciliation; all managed through one cohesive platform.
          </p>
          <ul className="text-slate-700 space-y-2 text-sm">
            <li>✓ Dose optimization that integrates financial parameters directly into the dose ordering workflow.</li>
            <li>✓ Automated logic recommends the most cost-effective radiopharmaceutical and vendor using contracts, payer data, and unit pricing.</li>
            <li>✓ Technologists can select primary and secondary options aligned with financial goals—without needing financial expertise.</li>
          </ul>
        </div>
        <div className="pill">
          <h2 className="text-2xl font-semibold mb-2">Regulatory Compliance</h2>
          <p className="text-slate-600 mb-4">
            Maintain compliance with comprehensive tracking, automated calculations, and exportable reports for all regulatory requirements.
          </p>
          <ul className="text-slate-700 space-y-2 text-sm">
            <li>✓ Daily &amp; weekly area surveys</li>
            <li>✓ Sealed source inventory tracking</li>
            <li>✓ Tracer check-in/check-out management</li>
            <li>✓ Hot lab instruments QC</li>
            <li>✓ Dosimeter tracking &amp; reporting</li>
            <li>✓ Waste management</li>
            <li>✓ Action items calendar</li>
          </ul>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="pill">
            <h3 className="text-xl font-semibold mb-2">Smart Financial Dose Ordering</h3>
            <p className="text-slate-600">Optimizes for cost-effectiveness and profit margins while maintaining clinical excellence.</p>
          </div>
          <div className="pill">
            <h3 className="text-xl font-semibold mb-2">Real-Time Data</h3>
            <p className="text-slate-600">Dashboards with instant updates for orders, compliance tracking, and inventory.</p>
          </div>
          <div className="pill">
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-slate-600">Minimal training required for complex dose optimization workflows.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
