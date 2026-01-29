import LineChart2 from "@/app/components/LineChart";
import SummaryChart from "@/app/components/BarChart";
import DonutChart2 from "@/app/components/DonutChart2";
import Link from "next/link";

const reportCardsData = [
     {
          title: "Monthly Revenue",
          value: "$16,200",
          subText: "+8.7% vs last month",
          subTextColor: "text-green-1100",
          Chart: LineChart2,
     },
     {
          title: "Annual Summary",
          value: "$187,000",
          subText: "Net: $133,000",
          subTextColor: "text-green-1100",
          Chart: SummaryChart,
     },
     {
          title: "Property-wise Earnings",
          value: "4 Properties",
          subText: "Total: $34,500",
          subTextColor: "text-gray-1400",
          Chart: DonutChart2,
          valueFlex: true,
     },
];

function ReportCards() {
     return (
          <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 4xl:gap-16 gap-5">
               {reportCardsData.map((item, index) => {
                    const ChartComponent = item.Chart;

                    return (
                         <div
                              key={index}
                              className="bg-white border border-gray-1300 rounded-[10px] shadow-11xl pt-8 px-6 pb-6"
                         >
                              <div className="flex items-center justify-between">
                                   <h6 className="text-sm font-inter font-normal leading-5 text-gray-1400">
                                        {item.title}
                                   </h6>
                                   <ul className="flex items-center justify-between mb-2">
                                        <li>
                                             <Link href="/" className="w-8 h-8 flex items-center justify-center">
                                                  <img src="/images/file-icon3.svg" alt="" />
                                             </Link>
                                        </li>
                                        <li>
                                             <Link href="/" className="w-8 h-8 flex items-center justify-center">
                                                  <img src="/images/export-arrow.svg" alt="" />
                                             </Link>
                                        </li>
                                   </ul>
                              </div>

                              <h4
                                   className={`4xl:text-[30px] text-[22px] font-inter font-bold leading-9 text-black-1000 ${item.valueFlex ? "flex items-end gap-2" : ""
                                        }`}
                              >
                                   {item.value}
                                   <span className={`text-sm leading-5 font-normal ${item.subTextColor}`}>
                                        {item.subText}
                                   </span>
                              </h4>

                              <ChartComponent />
                         </div>
                    );
               })}
          </div>
     );
}

export default ReportCards;
