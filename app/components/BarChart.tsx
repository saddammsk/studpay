"use client";

import {
     BarChart,
     Bar,
     XAxis,
     YAxis,
     ResponsiveContainer,
} from "recharts";

const data = [
     { quarter: "Q1", green: 80, red: 25 },
     { quarter: "Q2", green: 90, red: 30 },
     { quarter: "Q3", green: 85, red: 28 },
     { quarter: "Q4", green: 95, red: 32 },
];

export default function SummaryChart() {
     return (
          <div style={{ width: "100%", height: 160 }}>
               <ResponsiveContainer>
                    <BarChart data={data} barGap={8}>
                         <XAxis
                              dataKey="quarter"
                              axisLine={false}
                              tickLine={false}
                         />
                         <YAxis hide />

                         {/* Green bar */}
                         <Bar
                              dataKey="green"
                              fill="#22c55e"
                              radius={[6, 6, 0, 0]}
                              barSize={35}
                         />

                         {/* Red bar */}
                         <Bar
                              dataKey="red"
                              fill="#ef4444"
                              radius={[6, 6, 0, 0]}
                              barSize={35}
                         />
                    </BarChart>
               </ResponsiveContainer>
          </div>
     );
}
