import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2, X } from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
} from "recharts";

// --- Demo data (replace with API output later) ---
const trendData = [
  { day: "Mon", visits: 120 },
  { day: "Tue", visits: 200 },
  { day: "Wed", visits: 150 },
  { day: "Thu", visits: 250 },
  { day: "Fri", visits: 300 },
  { day: "Sat", visits: 180 },
  { day: "Sun", visits: 140 },
];

const sourcesData = [
  { name: "Direct", value: 40 },
  { name: "Search", value: 35 },
  { name: "Social", value: 15 },
  { name: "Referral", value: 10 },
];

const referrersData = [
  { name: "Google", visits: 420 },
  { name: "Twitter", visits: 210 },
  { name: "LinkedIn", visits: 160 },
  { name: "YouTube", visits: 140 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]; // Tailwind palette

export default function TrafficExtension() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg"
      >
        <BarChart2 size={20} />
        Insights
      </button>

      {/* Sliding Analytics Panel (RTL) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 h-full w-[420px] bg-white shadow-2xl border-l border-gray-200 flex flex-col"
            dir="rtl"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <h2 className="text-lg font-semibold">
                لوحة تحليلات الزيارات (Traffic Analytics)
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Analytics Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* KPI Cards */}
              <div className="grid grid-cols-2 gap-3">
                <section>
                  <section className="p-4">
                    <h3 className="font-medium text-gray-700 mb-1">
                      إجمالي الزيارات
                    </h3>
                    <p className="text-2xl font-bold">1.2M</p>
                  </section>
                </section>
                <section>
                  <section className="p-4">
                    <h3 className="font-medium text-gray-700 mb-1">
                      معدل الارتداد
                    </h3>
                    <p className="text-2xl font-bold text-red-500">52%</p>
                  </section>
                </section>
              </div>

              {/* Visits Trend */}
              <section>
                <section className="p-4">
                  <h3 className="font-medium text-gray-700 mb-3">
                    الزيارات خلال 7 أيام
                  </h3>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={trendData}
                        margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="visits"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </section>
              </section>

              {/* Traffic Sources Pie */}
              <section>
                <section className="p-4">
                  <h3 className="font-medium text-gray-700 mb-3">
                    مصادر الزيارات
                  </h3>
                  <div className="h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={sourcesData}
                          dataKey="value"
                          nameKey="name"
                          innerRadius={50}
                          outerRadius={80}
                          paddingAngle={2}
                        >
                          {sourcesData.map((_entry, index) => (
                            
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Legend verticalAlign="bottom" height={24} />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </section>
              </section>

              {/* Top Referrers Bar */}
              <section>
                <section className="p-4">
                  <h3 className="font-medium text-gray-700 mb-3">
                    أفضل المُحيلين
                  </h3>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={referrersData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar
                          dataKey="visits"
                          radius={[6, 6, 0, 0]}
                          fill="#10b981"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </section>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
