"use client";

import { useMemo } from "react";
import data from "@/data/schedule.json";

type Row = {
  ID: number;
  "Patient Name": string;
  "Appointment Date": string;
  "Scan Time": string;
  Isotope: string;
  Insurance: string;
  Status: "Confirmed" | "Pending Auth" | "Scheduled" | "Canceled";
};

function toCSV(rows: Row[]): string {
  const headers = ["ID","Patient Name","Appointment Date","Scan Time","Isotope","Insurance","Status"];
  const escape = (v: string | number) => {
    const s = String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const lines = [headers.join(",")];
  for (const r of rows) {
    lines.push(headers.map(h => escape((r as any)[h])).join(","));
  }
  return lines.join("\n");
}

export default function SchedulePage() {
  const rows = data as Row[];
  const csv = useMemo(() => toCSV(rows), [rows]);

  const download = () => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "schedule_sample.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Schedule</h1>
        <p className="text-slate-600">30 sample rows. Dates in <code>mm/dd/yy</code>. Ready to export.</p>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={download} className="btn btn-primary">Export CSV</button>
        <span className="badge">{rows.length} rows</span>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-slate-500">
            <tr>
              <th className="text-left py-2">ID</th>
              <th className="text-left">Patient Name</th>
              <th className="text-left">Appointment Date</th>
              <th className="text-left">Scan Time</th>
              <th className="text-left">Isotope</th>
              <th className="text-left">Insurance</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.ID} className="border-t border-slate-200">
                <td className="py-2">{r.ID}</td>
                <td>{r["Patient Name"]}</td>
                <td>{r["Appointment Date"]}</td>
                <td>{r["Scan Time"]}</td>
                <td>{r.Isotope}</td>
                <td>{r.Insurance}</td>
                <td>{r.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
