import { ViewPDFModel } from "@/app/components/Applications/ViewPDFModel";
import InputField from "@/app/ui/InputField";
import PrimaryLink from "@/app/ui/PrimaryLink";
import Link from "next/link";
import { useState } from "react";


const documentsData = [
     {
          title: "Identification",
          verifiedCount: "2/2 verified",
          files: [
               { name: "Passport.pdf", status: "verified" },
               { name: "Driver_License.jpg", status: "verified" },
          ],
     },
     {
          title: "School Certificate",
          verifiedCount: "2/3 verified",
          files: [
               { name: "Passport.pdf", status: "verified" },
               { name: "Driver_License.jpg", status: "pending" },
               { name: "Passport.pdf", status: "verified" },
          ],
     },
     {
          title: "Guarantor Documents",
          verifiedCount: "1/3 verified",
          files: [
               { name: "Passport.pdf", status: "verified" },
               { name: "Driver_License.jpg", status: "pending" },
               { name: "Passport.pdf", status: "verified" },
          ],
     },
];


export function DocumentsPane() {

     const [name, setName] = useState("");
     const [isOpenModel, setNameModel] = useState(false);


  return (
    <div>
      <div className="flex flex-wrap gap-2 items-center justify-between">
        <ul className="flex gap-6 items-center">
          <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black">
            <span className="w-2 h-2 rounded-full block bg-green-1800"></span> 5{" "}
            <span className="text-gray-1000">Verified</span>
          </li>
          <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black">
            <span className="w-2 h-2 rounded-full block bg-yellow-1200"></span>{" "}
            2 <span className="text-gray-1000">Pending</span>
          </li>
          <li className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-black">
            <span className="w-2 h-2 rounded-full block bg-red12"></span> 1{" "}
            <span className="text-gray-1000">Rejected</span>
          </li>
        </ul>
        <h6 className="text-sm font-inter font-normal leading-5 text-black">
          {" "}
          <span className="text-gray-1000">Total:</span> 8 documents
        </h6>
      </div>
      <div className="my-6">
          <div className="flex items-end flex-wrap gap-3 mb-6">
            <div className="w-full max-w-[448px]">
              <InputField
                label=""
                placeholder="Search documents..."
                value={name}
                className="pl-10! !h-10"
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
                ) => setName(e.target.value)}
                leftIconSrc="/images/search-icon.svg"
                id="email"
                name="email"
                variant="default"
              />
            </div>
            <button
              className="px-4 cursor-pointer transition duration-300 hover:shadow-lg !py-2 h-10 w-fit! gap-2.5 border bg-white rounded-lg flex items-center border-gray-1100!"
            >
              <img src="/images/filter-icon.svg" alt="" className=" group-hover:invert" /> Filter
            </button>
            <PrimaryLink
              className="px-4  w-fit! gap-2.5 rounded-lg"
              variant="primary"
            >
              <img
                src="/images/upload-icon.svg"
                className="brightness-[36]"
                alt=""
              />{" "}
              Upload Document
            </PrimaryLink>
          </div>
          <div className="space-y-6">
            {documentsData.map((section, i) => (
              <div key={i} className="border bg-white border-gray-1100 rounded-lg md:p-6 p-3">
                <div className="flex max-w-[1183px] mb-4 items-center justify-between">
                  <h6 className="text-lg font-inter font-semibold leading-7 text-black">
                    {section.title}
                  </h6>
                  <div className="flex items-center gap-2 text-sm font-inter font-normal leading-5 text-gray-1000">
                    <img src="/images/checkgreen.svg" alt="" />
                    {section.verifiedCount}
                  </div>
                </div>

                <div className="space-y-3">
                  {section.files.map((file, index) => (
                    <div
                      key={index}
                      className="border border-gray-1100 rounded-lg flex items-center justify-between md:p-4 p-2.5"
                    >
                      <div className="flex items-center flex-1 gap-4">
                        <div className="bg-lightgray rounded-lg w-10 h-10 flex items-center justify-center">
                          <img src="/images/file-icon3.svg" alt="" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-inter leading-6 text-black">
                            {file.name}
                          </h4>
                          <p className="text-sm font-inter font-normal leading-5 text-gray-1000">
                            PDF • 2.4 MB • Dec 15, 2024
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div
                          className={`text-xs font-inter font-medium leading-4 py-0.5 px-2.5 rounded-full border bg-lightgray ${
                            file.status === "verified"
                              ? "text-green-1900 border-green-2000"
                              : "text-orange-1000 border-orange-1100"
                          }`}
                        >
                          {file.status}
                        </div>
                        <button className="cursor-pointer" onClick={()=>setNameModel(true)}>
                          <img src="/images/eye-icon.svg" alt="" />
                        </button>
                        <Link href="">
                          <img src="/images/export-icon3.svg" alt="" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        <ViewPDFModel isOpen={isOpenModel} setIsOpen={setNameModel} />
      </div>
    </div>
  );
}
