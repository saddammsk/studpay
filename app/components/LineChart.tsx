"use client";

import {
     LineChart,
     Line,
     XAxis,
     YAxis,
     Area,
     ResponsiveContainer,
} from "recharts";

const data = [
     { month: "Aug", value: 42 },
     { month: "Sep", value: 45 },
     { month: "Oct", value: 38 },
     { month: "Nov", value: 42 },
     { month: "Dec", value: 39 },
];

export default function LineChart2() {
     return (
          <div style={{ width: "100%", height: 160 }}>
               <ResponsiveContainer>
                    <LineChart data={data}>
                         {/* Gradient definition */}
                         <defs>
                              <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                                   <stop offset="0%" stopColor="#1f2a44" stopOpacity={0.25} />
                                   <stop offset="100%" stopColor="#1f2a44" stopOpacity={0} />
                              </linearGradient>
                         </defs>

                         <XAxis
                              dataKey="month"
                              axisLine={false}
                              tickLine={false}
                         />
                         <YAxis hide />

                         {/* Gradient area */}
                         <Area
                              type="monotone"
                              dataKey="value"
                              stroke="none"
                              fill="url(#lineGradient)"
                         />

                         {/* Top line */}
                         <Line
                              type="monotone"
                              dataKey="value"
                              stroke="#1f2a44"
                              strokeWidth={2}
                              dot={false}
                         />
                    </LineChart>
               </ResponsiveContainer>
          </div>
     );
}
