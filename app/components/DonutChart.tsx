"use client";

import React from "react";
import {
     Chart as ChartJS,
     ArcElement,
     Tooltip,
     Legend,
     ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartDataItem {
     label: string;
     value: number;
     color: string;
     percentage: number;
}

interface DonutChartProps {
     data: ChartDataItem[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
     const chartData = {
          labels: data.map((d) => d.label),
          datasets: [
               {
                    data: data.map((d) => d.value),
                    backgroundColor: data.map((d) => d.color),
                    borderWidth: 0,
               },
          ],
     };

     const options: ChartOptions<"doughnut"> = {
          plugins: {
               legend: {
                    display: false, // we will render a custom legend
               },
               tooltip: {
                    callbacks: {
                         label: (context) => {
                              const value = context.raw as number;
                              const percentage = data[context.dataIndex].percentage;
                              return `${value}€ (${percentage}%)`;
                         },
                    },
               },
          },
          cutout: "60%",
          responsive: true,
          maintainAspectRatio: false,
     };

     const total = data.reduce((sum, d) => sum + d.value, 0);

     return (
          <div className="grid 2xl:grid-cols-2 2xl:pt-0 pt-5 gap-6 items-center">
               <div className="mx-auto" style={{ width: 200, height: 200 }}>
                    <Doughnut data={chartData} options={options} />
               </div>

               <div className="flex flex-col gap-2  4xl:text-sm text-xs font-normal font-inter">
                    {data.map((item) => (
                         <div key={item.label} className="flex justify-between py-2.5 px-3">
                              <div className="flex items-center gap-2">
                                   <span
                                        className="4xl:w-3 w-2 4xl:h-3 h-2 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                   ></span>
                                   <span>{item.label}</span>
                              </div>
                              <div className="">
                                   <span className="font-bold"> {item.value.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "EUR",
                                   })}{" "}</span>
                                   <span className="4xl:text-xs text-[10px] text-gray-1400">  ({item.percentage}%)</span>
                              </div>
                         </div>
                    ))}

                    <div className="mt-2 border-t border-gray-1300 font-bold flex font-inter 4xl:text-sm text-sm justify-between py-4 px-3">
                         <span className="text-black-1000">Total</span>
                         <span className="text-lg text-blue-1100">
                              {total.toLocaleString("en-US", {
                                   style: "currency",
                                   currency: "EUR",
                              })}
                         </span>
                    </div>
               </div>
          </div>
     );
};

export default DonutChart;
