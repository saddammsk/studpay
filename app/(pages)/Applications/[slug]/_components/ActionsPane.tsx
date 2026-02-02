import PrimaryLink from "@/app/ui/PrimaryLink";
import { Checkbox } from "@headlessui/react";
import { useState } from "react";


interface Requirement  {
     id: number;
     label: string;
};


interface Reject {
     id: number;
     label: string;
};



    const requirements: Requirement[] = [
              { id: 1, label: "Proof of income (last 3 months)" },
              { id: 2, label: "Employment verification letter" },
              { id: 3, label: "Previous landlord reference" },
              { id: 4, label: "Guarantor documentation" },
         ];
         const rejects: Reject[] = [
              { id: 1, label: "Insufficient credit score" },
              { id: 2, label: "Income below requirement" },
              { id: 3, label: "Negative references" },
              { id: 4, label: "Failed document verification" },
              { id: 5, label: "Other (specify below)" },
         ];
    

export function ActionsPane() {

    
         const [requestChecked, setRequestChecked] = useState<number[]>([]);
         const [rejectChecked, setRejectChecked] = useState<number[]>([]);
    
    
         const toggleRequest = (id: number) => {
              setRequestChecked((prev) =>
                   prev.includes(id)
                        ? prev.filter((i) => i !== id)
                        : [...prev, id]
              );
         };
    
         const toggleReject = (id: number) => {
              setRejectChecked((prev) =>
                   prev.includes(id)
                        ? prev.filter((i) => i !== id)
                        : [...prev, id]
              );
         };
    

    



  return (
    <div className="w-full md:pb-24 pb-6">
      <div className="bg-white border border-gray-1100 rounded-lg shadow-6xl p-6">
        <h6 className="text-base font-black font-medium leading-6 text-black mb-4">
          Application Summary
        </h6>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-orange-1200 w-8 h-8 rounded-lg flex items-center justify-center ">
              <img src="/images/user-icon5.svg" className="w-4" alt="" />
            </div>
            <div>
              <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">
                Applicant
              </h4>
              <p className="text-sm font-medium leading-5 text-black">
                Sarah Johnson
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-1200 w-8 h-8 rounded-lg flex items-center justify-center ">
              <img src="/images/building-icon.svg" className="w-4" alt="" />
            </div>
            <div>
              <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">
                Property
              </h4>
              <p className="text-sm font-medium leading-5 text-black">
                123 Oak Street, Apt 4B
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-1200 w-8 h-8 rounded-lg flex items-center justify-center ">
              <img src="/images/calendar4.svg" className="w-4" alt="" />
            </div>
            <div>
              <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">
                Applied
              </h4>
              <p className="text-sm font-medium leading-5 text-black">
                Dec 15, 2024
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-1200 w-8 h-8 rounded-lg flex items-center justify-center ">
              <img src="/images/mail-icon3.svg" className="w-4" alt="" />
            </div>
            <div>
              <h4 className="text-xs font-normal font-inter leading-4 text-gray-1000">
                Contact
              </h4>
              <p className="text-sm font-medium leading-5 text-black">
                sarah.j@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-8 gap-6">
        <div className="bg-white border border-gray-1100 rounded-lg shadow-6xl pt-6 pb-[30px] px-5">
          <div className="flex gap-2 mb-6 items-center justify-center">
            <div className="w-8 h-8 rounded-lg bg-orange-1200 flex items-center justify-center">
              <img src="/images/file-icon4.svg" alt="" />
            </div>
            <div>
              <h6 className="text-base font-medium font-inter leading-6 text-black">
                Request Documents
              </h6>
              <span className="text-xs font-inter font-normal leading-4 text-gray-1000">
                Ask for missing information
              </span>
            </div>
          </div>
          <form action="" className="w-fit mx-auto ">
            <div className="space-y-3 border-b border-gray-1100 pb-4 mb-4">
              {requirements.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <Checkbox
                    checked={requestChecked.includes(item.id)}
                    onChange={() => toggleRequest(item.id)}
                    className="group rounded bgtransparent border border-blue-1600 overflow-hidden w-4 h-4"
                  >
                    <div className="hidden w-full h-full group-data-checked:flex items-center justify-center group-data-checked:bg-blue-1600">
                      <img
                        src="/images/check-icon.svg"
                        className="brightness-[40] w-3"
                      />
                    </div>
                  </Checkbox>

                  <h6 className="text-sm font-inter font-normal text-black">
                    {item.label}
                  </h6>
                </div>
              ))}
            </div>
            <label className="text-xs font-normal leading-4 block text-gray-1000 mb-2.5">
              Additional notes (optional)
            </label>
            <textarea
              name=""
              id=""
              placeholder="Add context for the applicant..."
              className="text-sm font-inter mb-1 font-normal leading-5 text-gray-1000 placeholder:text-gray-1000 w-full px-[13px] py-[9px] h-20 rounded-md border border-gray-1100"
            ></textarea>
            <PrimaryLink
            className="px-4 !py-2.5 font-medium gap-2.5 bg-transparent! hover:shadow-lg! text-black! opacity-50 border border-gray-1100!"
            >
              <img src="/images/msg-icon.svg" alt="" /> Send Request
            </PrimaryLink>
          </form>
        </div>
        <div className="bg-white border border-gray-1100 rounded-lg shadow-6xl pt-6 pb-[30px] px-5">
          <div className="flex gap-2 mb-6 items-center justify-center">
            <div className="w-8 h-8 rounded-lg bg-gray-3400 flex items-center justify-center">
              <img src="/images/cross-circle-icon.svg" alt="" />
            </div>
            <div>
              <h6 className="text-base font-medium font-inter leading-6 text-black">
                Reject Application
              </h6>
              <span className="text-xs font-inter font-normal leading-4 text-gray-1000">
                Decline this application
              </span>
            </div>
          </div>
          <form action="" className="max-w-[302px] mx-auto ">
            <div className="space-y-3 border-b border-gray-1100 pb-4 mb-4">
              {rejects.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <Checkbox
                    checked={rejectChecked.includes(item.id)}
                    onChange={() => toggleReject(item.id)}
                    className="group rounded bgtransparent border border-blue-1600 overflow-hidden w-4 h-4"
                  >
                    <div className="hidden w-full h-full group-data-checked:flex items-center justify-center group-data-checked:bg-blue-1600">
                      <img
                        src="/images/check-icon.svg"
                        className="brightness-[40] w-3"
                      />
                    </div>
                  </Checkbox>

                  <h6 className="text-sm font-inter font-normal text-black">
                    {item.label}
                  </h6>
                </div>
              ))}
            </div>

            <label className="text-xs font-normal leading-4 block text-gray-1000 mb-2.5">
              Internal notes (required)
            </label>
            <textarea
              name=""
              id=""
              placeholder="Add context for the applicant..."
              className="text-sm font-inter mb-1 font-normal leading-5 text-gray-1000 placeholder:text-gray-1000 w-full px-[13px] py-[9px] h-20 rounded-md border border-gray-1100"
            ></textarea>
            <PrimaryLink
              type="submit"
              className="px-4 !py-2.5 font-medium gap-2.5 !text-red-1200 bg-transparent! shadow-red-100 opacity-50 border border-red-1300!"
              variant="default"
            >
              <img src="/images/caution-icon.svg" alt="" /> Reject Application
            </PrimaryLink>
          </form>
        </div>
        <div className="bg-white shadow-13xl border border-gray-1100 rounded-lg shadow-6xl pt-6 pb-[30px] px-5">
          <div className="max-w-[360px] mx-auto">
            <div className="flex gap-2 mb-6 items-center justify-center">
              <div className="w-8 h-8 rounded-lg bg-blue-1600/[10%] flex items-center justify-center">
                <img src="/images/tick-icon-circle.svg" alt="" />
              </div>
              <div>
                <h6 className="text-base font-medium font-inter leading-6 text-black">
                  Accept Application
                </h6>
                <span className="text-xs font-inter font-normal leading-4 text-gray-1000">
                  Approve and propose lease
                </span>
              </div>
            </div>
            <div className="bg-lightgray/[50%] mb-4 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">
                  Monthly Rent
                </h6>
                <h6 className="text-sm font-medium leading-5 font-inter text-black">
                  $1,850
                </h6>
              </div>
              <div className="flex items-center justify-between">
                <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">
                  Security Deposit
                </h6>
                <h6 className="text-sm font-medium leading-5 font-inter text-black">
                  $1,850
                </h6>
              </div>
              <div className="flex items-center justify-between">
                <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">
                  Lease Term
                </h6>
                <h6 className="text-sm font-medium leading-5 font-inter text-black">
                  12 months
                </h6>
              </div>
              <div className="flex items-center justify-between">
                <h6 className="text-sm font-normal leading-5 font-inter text-gray-1000">
                  Move-in Date
                </h6>
                <h6 className="text-sm font-medium leading-5 font-inter text-black">
                  Jan 1, 2025
                </h6>
              </div>
            </div>
            <div className="border border-orange-1300 mb-4 bg-gray-3400 rounded-lg flex items-start gap-2 p-3">
              <img src="/images/tick-green.svg" alt=""></img>
              <div>
                <h6 className="font-inter font-medium text-sm leading-5 text-green-2100">
                  Ready for approval
                </h6>
                <p className="text-xs font-inter leading-4 text-green12">
                  {" "}
                  All verification checks passed
                </p>
              </div>
            </div>
            <PrimaryLink
              type="submit"
              className="px-4 !py-2.5 font-medium gap-2.5 !text-white "
              variant="primary"
            >
              <img src="/images/tick-icon3.svg" alt="" />
              Accept & Send Lease
            </PrimaryLink>
          </div>
        </div>
      </div>
    </div>
  );
}
