import ApplicationTable from "@/app/components/ApplicationTable";


export default function ApplicationsPage() {


     return (
               <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
                    <div className="mb-6">
                         <h4 className="text-2xl font-bold leading-8 text-black-1200 mb-1">Applications</h4>
                         <p className="text-base font-inter font-normal leading-6 text-gray-2200">Review and manage student rental applications with AI-powered risk assessment</p>
                    </div>
                    <ApplicationTable></ApplicationTable>
               
               </div>
     );
}
