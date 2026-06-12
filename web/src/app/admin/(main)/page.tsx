export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-base font-medium text-gray-900">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Monthly Revenue", value: "84.2M", delta: "+12%", up: true },
          { label: "Orders", value: "1,248", delta: "+5%", up: true },
          { label: "Returns", value: "23", delta: "+2", up: false },
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
            <p className="text-xl font-medium text-gray-900">{stat.value}</p>
            <p className={`text-xs mt-1 ${stat.up ? "text-green-600" : "text-red-500"}`}>
              {stat.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="text-sm font-medium text-gray-900">Recent Orders</span>
          <button className="text-xs text-gray-400 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50">
            Export
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium text-gray-400 px-4 py-2.5">Order ID</th>
              <th className="text-left text-xs font-medium text-gray-400 px-4 py-2.5">Customer</th>
              <th className="text-left text-xs font-medium text-gray-400 px-4 py-2.5">Status</th>
              <th className="text-left text-xs font-medium text-gray-400 px-4 py-2.5">Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "#0041", name: "Nguyễn Văn A", status: "Finished", statusClass: "bg-green-50 text-green-600", amount: "2.400.000đ" },
              { id: "#0040", name: "Trần Thị B", status: "In Progress", statusClass: "bg-amber-50 text-amber-600", amount: "1.150.000đ" },
              { id: "#0039", name: "Lê Văn C", status: "Cancelled", statusClass: "bg-red-50 text-red-500", amount: "890.000đ" },
            ].map((row) => (
              <tr key={row.id} className="border-b border-gray-50 last:border-0">
                <td className="px-4 py-3 text-xs text-gray-500">{row.id}</td>
                <td className="px-4 py-3 text-xs text-gray-700">{row.name}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${row.statusClass}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-gray-700">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
