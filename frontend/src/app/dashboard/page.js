"use client";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome to Blue Gobi Tours Admin</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Total Users: 120</div>
        <div className="p-4 bg-white rounded shadow">New Bookings: 34</div>
        <div className="p-4 bg-white rounded shadow">Revenue: $12,340</div>
      </div>
      {/* Add charts or recent activity here */}
    </div>
  );
}
