type RiskLevel = "low" | "medium" | "high";
type StatusType = "Approved" | "In Review" | "Pending" | "Rejected";

interface StudentRow {
     id: number;
     student: { name: string; email: string };
     property: { name: string; address: string };
     risk: { score: number; level: RiskLevel };
     status: StatusType;
}
const riskStyles: Record<"low" | "medium" | "high", string> = {
     low: "bg-green-1300 text-white",
     medium: "bg-yellow-1100 text-black",
     high: "bg-red-1100 text-white",
};

const statusStyles: Record<
     "Approved" | "In Review" | "Pending" | "Rejected",
     string
> = {
     Approved: "bg-green-1300/[10%] text-green-1300",
     "In Review": "bg-blue-1600/[10%] text-blue-1600",
     Pending: "bg-lightgray text-gray-1000",
     Rejected: "bg-red-1100/[10%] text-red-1100",
};

const students: StudentRow[] = [
     {
          id: 1,
          student: { name: "Emma Thompson", email: "emma.t@university.edu" },
          property: { name: "Maple Heights", address: "123 University Ave" },
          risk: { score: 18, level: "low" },
          status: "Approved",
     },
     {
          id: 2,
          student: { name: "James Wilson", email: "j.wilson@college.edu" },
          property: { name: "Oak Gardens", address: "456 College St" },
          risk: { score: 45, level: "medium" },
          status: "In Review",
     },
     {
          id: 3,
          student: { name: "Sofia Rodriguez", email: "sofia.r@uni.edu" },
          property: { name: "Pine View", address: "789 Campus Dr" },
          risk: { score: 72, level: "high" },
          status: "Pending",
     },
     {
          id: 4,
          student: { name: "Sofia Rodriguez", email: "sofia.r@uni.edu" },
          property: { name: "Pine View", address: "789 Campus Dr" },
          risk: { score: 72, level: "high" },
          status: "Rejected",
     },
     {
          id: 5,
          student: { name: "Emma Thompson", email: "emma.t@university.edu" },
          property: { name: "Maple Heights", address: "123 University Ave" },
          risk: { score: 18, level: "low" },
          status: "Approved",
     },
     {
          id: 6,
          student: { name: "James Wilson", email: "j.wilson@college.edu" },
          property: { name: "Oak Gardens", address: "456 College St" },
          risk: { score: 45, level: "medium" },
          status: "In Review",
     },
     {
          id: 7,
          student: { name: "Sofia Rodriguez", email: "sofia.r@uni.edu" },
          property: { name: "Pine View", address: "789 Campus Dr" },
          risk: { score: 72, level: "high" },
          status: "Pending",
     },
     {
          id: 8,
          student: { name: "Sofia Rodriguez", email: "sofia.r@uni.edu" },
          property: { name: "Pine View", address: "789 Campus Dr" },
          risk: { score: 72, level: "high" },
          status: "Rejected",
     },
];

function ApplicationTable() {
     return (
          <div className="overflow-x-auto mt-5 font-inter rounded-lg border border-gray-1100">
               <table className="2xl:w-full w-[1365px] text-sm">
                    <thead className="bg-lightgray text-gray-500">
                         <tr>
                              <th className="px-4 py-3 text-left font-medium">
                                   <div className="flex items-center gap-2">
                                        Student Name <img src="/images/sorting-icon.svg" alt="" />
                                   </div>
                              </th>
                              <th className="px-4 py-3 text-left font-medium">
                                   <div className="flex items-center gap-2">
                                        Property<img src="/images/sorting-icon.svg" alt="" />
                                   </div>
                              </th>
                              <th className="px-4 py-3 text-left font-medium">
                                   <div className="flex items-center gap-2">
                                        AI Risk Score<img src="/images/sorting-icon.svg" alt="" />
                                   </div>
                              </th>
                              <th className="px-4 py-3 text-left font-medium">
                                   <div className="flex items-center gap-2">
                                        Status<img src="/images/sorting-icon.svg" alt="" />
                                   </div>
                              </th>
                              <th className="px-4 py-3"></th>
                         </tr>
                    </thead>

                    <tbody>
                         {students.map((item) => (
                              <tr key={item.id} className="border-t border-gray-1100">
                                   <td className="px-4 py-3">
                                        <div className="font-medium text-black">{item.student.name}</div>
                                        <div className=" text-gray-1000">{item.student.email}</div>
                                   </td>

                                   <td className="px-4 py-3">
                                        <div className="font-medium text-black">{item.property.name}</div>
                                        <div className=" text-gray-1000">{item.property.address}</div>
                                   </td>

                                   <td className="px-4 py-3">
                                        <span
                                             className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium 
                                                  }`}
                                        >
                                             <div className={`min-w-[34px] h-6 flex rounded-md  items-center justify-center ${riskStyles[item.risk.level as "low" | "medium" | "high"]
                                                  }`}>  {item.risk.score}</div>
                                             <span className="capitalize text-gray-1000">{item.risk.level} Risk</span>
                                        </span>

                                   </td>

                                   <td className="px-4 py-3">
                                        <span
                                             className={`inline-flex px-2.5 py-1 rounded-md text-xs font-medium ${statusStyles[item.status as "Approved" | "In Review" | "Pending" | "Rejected"]
                                                  }`}
                                        >
                                             {item.status}
                                        </span>

                                   </td>

                                   <td className="px-4 py-3 text-right">
                                        <button className="text-gray-400 hover:text-gray-600">
                                             •••
                                        </button>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     )
}

export default ApplicationTable
