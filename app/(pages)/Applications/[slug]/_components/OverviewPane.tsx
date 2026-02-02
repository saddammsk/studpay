import CircularProgress from "@/app/components/CircularProgress";
import PrimaryLink from "@/app/ui/PrimaryLink";
import ProgressBar from "@/app/ui/ProgressBar";


const cardData = [
     {
          title: "Payment History",
          icon: "/images/trend-down.svg",
          score: 15,
          scoreColor: "text-green-1300",
          progress: "25%",
          description: "No late payments in rental or credit history",
          weight: "30%",
     },
     {
          title: "Income Verification",
          icon: "/images/trend-down.svg",
          score: 22,
          scoreColor: "text-green-1300",
          progress: "34%",
          description: "Income meets 2.8x rent requirement with co-signer",
          weight: "25%",
     },
     {
          title: "Credit Score",
          icon: "/images/minus-icon.svg",
          score: 35,
          scoreColor: "text-yellow-1100",
          progress: "40%",
          description: "Limited credit history typical for students",
          weight: "20%",
     },
     {
          title: "Identity Verification",
          icon: "/images/trend-down.svg",
          score: 8,
          scoreColor: "text-green-1300",
          progress: "34%",
          description: "All documents verified and valid",
          weight: "15%",
     },
     {
          title: "Enrollment Status",
          icon: "/images/trend-down.svg",
          score: 12,
          scoreColor: "text-green-1300",
          progress: "34%",
          description: "Full-time enrollment confirmed through 2025",
          weight: "12%",
     },
];


export function OverviewPane() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <div className="p-5 mb-6 border border-gray-1100 bg-white rounded-lg">
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src="/images/user-img2.png" alt="" />
                <div>
                  <h6 className="text-base font-inter font-bold leading-6 text-black">
                    Emma Thompson
                  </h6>
                  <span className="text-sm font-inter leading-5 font-normal text-gray-1000">
                    Stanford University
                  </span>
                </div>
              </div>
              <div className="text-xs font-inter font-medium rounded-md leading-4 h-fit text-blue-1600 bg-blue-1600/[10%] py-1 px-2.5 inline-block">
                In Review
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black">
                <img src="/images/mail-icon2.svg" alt="" />
                emma.t@university.edu
              </li>
              <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black">
                <img src="/images/call-icon.svg" alt="" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black">
                <img src="/images/cap-icon.svg" alt="" />
                Computer Science • Class of 2025
              </li>
              <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black">
                <img src="/images/location3.svg" alt="" />
                456 College Ave, Palo Alto, CA
              </li>
            </ul>
          </div>
          <div className="p-5 mb-6 border border-gray-1100 bg-white rounded-lg">
            <div className="flex items-center gap-2 font-inter text-base font-medium leading-6 text-black mb-3">
              <img src="/images/file-icon3.svg" alt="" /> Property Details
            </div>
            <ul className="space-y-2">
              <li className="text-sm font-inter font-normal leading-5 text-gray-1000 flex items-center justify-between">
                Property <span className="text-black">Maple Heights</span>
              </li>
              <li className="text-sm font-inter font-normal leading-5 text-gray-1000 flex items-center justify-between">
                Address{" "}
                <span className="text-black">123 University Ave, Unit 4B</span>
              </li>
              <li className="text-sm font-inter font-normal leading-5 text-gray-1000 flex items-center justify-between">
                Monthly Rent <span className="text-black">$1,850</span>
              </li>
              <li className="text-sm font-inter font-normal leading-5 text-gray-1000 flex items-center justify-between">
                Move-in Date <span className="text-black">Feb 1, 2024</span>
              </li>
            </ul>
          </div>
          <div className="p-5 mb-6 border border-gray-1100 bg-white rounded-lg">
            <div className="flex items-center gap-2 font-inter text-base font-medium leading-6 text-black mb-3">
              <img src="/images/calendar2.svg" alt="" /> Application Timeline
            </div>
            <ul className="space-y-8 ">
              <li className="flex gap-4 relative after:content-[''] after:bg-gray-1100 after:h-full after:w-[1px] after:absolute after:left-4 after:-z-10 z-10 after:-bottom-8">
                <div className="bg-green-1300/[10%] w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="/images/tick-icon2.svg" alt="" />
                </div>
                <div>
                  <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">
                    Application Submitted
                  </h6>
                  <span className="block text-xs font-normal leading-4 text-gray-3000">
                    Initial application received with all required documents
                  </span>
                  <span className="block text-xs font-normal leading-4 text-gray-3000">
                    Jan 15, 2024
                  </span>
                </div>
              </li>
              <li className="flex gap-4  relative after:content-[''] after:bg-gray-1100 after:h-full after:w-[1px] after:absolute after:left-4 after:-z-10 z-10 after:-bottom-8">
                <div className="bg-green-1300/[10%]  w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="/images/tick-icon2.svg" alt="" />
                </div>
                <div>
                  <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">
                    Documents Verified
                  </h6>
                  <span className="block text-xs font-normal leading-4 text-gray-3000">
                    ID, enrollment verification, and income proof validated
                  </span>
                  <span className="block text-xs font-normal leading-4 text-gray-3000">
                    Jan 16, 2024
                  </span>
                </div>
              </li>
              <li className="flex gap-4  relative after:content-[''] after:bg-gray-1100 after:h-full after:w-[1px] after:absolute after:left-4 after:-z-10 z-10 after:-bottom-8">
                <div className="bg-green-1300/[10%]  w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="/images/tick-icon2.svg" alt="" />
                </div>
                <div>
                  <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">
                    AI Risk Assessment
                  </h6>
                  <span className="block text-xs font-normal leading-4 text-gray-3000">
                    Automated risk analysis completed
                  </span>
                  <span className="block text-xs font-normal leading-4 text-gray-3000">
                    Jan 16, 2024
                  </span>
                </div>
              </li>
              <li className="flex gap-4  relative after:content-[''] after:bg-gray-1100 after:h-full after:w-[1px] after:absolute after:left-4 after:-z-10 z-10 after:-bottom-8">
                <div className=" bg-blue-1600/[10%]  w-8 h-8 rounded-full flex items-center justify-center">
                  <img
                    src="/images/timer-blue.svg"
                    className="w-4 h-4"
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">
                    Manual Review{" "}
                    <span className="text-xs font-inter font-medium leading-4 text-blue-1600 inline-block py-0.5 px-2 rounded-full bg-blue-1600/[10%]">
                      Current
                    </span>
                  </h6>
                  <span className="block text-xs font-normal leading-4 text-gray-3000">
                    Application pending property manager review
                  </span>
                  <span className="block text-xs font-normal leading-4 text-gray-3000">
                    In Progress
                  </span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className=" bg-lightgray  w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="/images/info-icon3.svg" alt="" />
                </div>
                <div>
                  <h6 className="text-sm font-dm-sans font-normal leading-5 text-black15">
                    Final Decision{" "}
                  </h6>
                  <span className="block text-xs font-normal leading-4 text-gray-1000">
                    Approval or rejection pending
                  </span>
                  <span className="block text-xs font-normal leading-4 text-gray-3000">
                    Pending
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="p-5 mb-6 border border-gray-1100 bg-white rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-1600/[10%] rounded-lg w-8 h-8 flex items-center justify-center">
                <img src="/images/star.svg" alt="" />
              </div>
              <div className="">
                <h6 className="text-base font-inter font-bold leading-6 text-black">
                  AI Risk Assessment
                </h6>
                <span className="block  text-xs font-inter font-normal leading-4 text-gray-1000">
                  Powered by RentFlow AI
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <CircularProgress value={28} max={100} />
              <div className="">
                <div className="py-2 px-3 w-fit flex items-center gap-1.5 text-sm mb-2 font-inter font-medium text-green-1300 bg-green-1300/[10%] rounded-full">
                  <img src="/images/shield-tick.svg" alt="" /> Low Risk
                </div>
                <p className="text-sm font-inter font-normal leading-5 text-gray-1000">
                  This applicant shows low risk indicators based on payment
                  history, verified income, and enrollment status.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-1600/[5%] mb-6 border border-blue-1600/[20%] rounded-lg p-4 flex items-start gap-3">
            <img src="/images/info-blue.svg" alt="" />
            <div>
              <h6 className="text-sm font-black font-medium text-black mb-1">
                AI Confidence: 94%
              </h6>
              <p className="text-xs font-inter font-normal leading-4 text-gray-1000">
                High confidence based on complete documentation and verified
                data sources
              </p>
            </div>
          </div>
          <h4 className="text-base font-medium leading-6 text-black mb-3">
            Risk Factor Breakdown
          </h4>
          <div className="space-y-3">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="border border-gray-1100 rounded-lg p-4"
              >
                <div className="w-full">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm font-inter font-medium leading-5 text-black">
                      {card.title} <img src={card.icon} alt="" />
                    </div>
                    <h6 className="text-xs flex items-center gap-1.5 font-inter font-normal leading-4 text-gray-1000">
                      <span className={`font-bold ${card.scoreColor}`}>
                        {card.score}
                      </span>
                      / 100
                    </h6>
                  </div>
                  <ProgressBar
                    width={card.progress}
                    bgColor={card.scoreColor.replace("text", "bg")}
                  />
                  <h6 className="text-xs mt-2 font-inter mb-2 font-normal leading-4 text-gray-1000">
                    {card.description}
                  </h6>
                  <h6 className="text-xs font-inter font-normal leading-4 text-gray-1000">
                    Weight: {card.weight}
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <ul className="flex items-center my-8 justify-center gap-3 max-w-[604px] mx-auto">
            <li className="w-1/2">
              <PrimaryLink
                type="submit"
                className="px-4 !py-2.5 gap-2.5 bg-green-1300!"
                variant="primary"
              >
                Approve Application
              </PrimaryLink>
            </li>
            <li className="w-1/2">
              <PrimaryLink
                type="submit"
                className="px-4 !py-2.5 gap-2.5 bg-transparent! hover:shadow-red-100! border border-red-1100 text-red-1100!"
                variant="primary"
              >
                Reject Application
              </PrimaryLink>
            </li>
          </ul>
          <p className="text-sm font-inter text-center font-medium leading-5 text-gray-1000">
            Request Additional Information
          </p>
        </div>
      </div>
    </div>
  );
}
