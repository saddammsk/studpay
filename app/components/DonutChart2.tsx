"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
     { name: "Green", value: 35 },
     { name: "Navy", value: 30 },
     { name: "Gray", value: 15 },
     { name: "Orange", value: 20 },
];

const COLORS = ["#22c55e", "#1f2a44", "#94a3b8", "#f59e0b"];

export default function DonutChart2() {
     return (
          <div className="mx-auto" style={{ width: 240, height: 180 }}>
               <ResponsiveContainer>
                    <PieChart>
                         <Pie
                              data={data}
                              innerRadius={50}
                              outerRadius={75}
                              paddingAngle={4}
                              dataKey="value"
                              startAngle={90}
                              endAngle={-270}
                         >
                              {data.map((_, index) => (
                                   <Cell key={index} fill={COLORS[index]} />
                              ))}
                         </Pie>
                    </PieChart>
               </ResponsiveContainer>
          </div>
     );
}
