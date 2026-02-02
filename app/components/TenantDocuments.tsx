"use client";
import Image from 'next/image'
import Link from 'next/link';


interface DocumentItem {
      name: string;
      type: string;
      date: string;
      status: "Verified" | "Pending";
      icon: string;
}

interface DocumentSection {
      title: string;
      count: number;
      img: string;
      items: DocumentItem[];
}

const documentSections = [
      {
            title: "Identity Documents",
            count: 3,
            img: "/images/user-blue.svg", 
            items: [
                  {
                        name: "ID Card",
                        icon: "/images/id-file.svg",
                        type: "PDF",
                        date: "Dec 15, 2024",
                        status: "Verified"
                  },
                  {
                        name: "Passport",
                        icon: "/images/pic.svg",
                        type: "JPG",
                        date: "Dec 15, 2024",
                        status: "Verified"
                  },
                  {
                        name: "Residency Permit",
                        icon: "/images/id-file.svg",
                        type: "PDF",
                        date: "Dec 18, 2024",
                        status: "Pending"
                  },
            ],
      },
      {
            title: "Academic Documents",
            count: 3,
            img: "/images/cap.svg", 
            items: [
                  {
                        name: "University Certificate",
                        icon: "/images/id-file.svg",
                        type: "PDF",
                        date: "Dec 10, 2024",
                        status: "Verified"
                  },
                  {
                        name: "Enrollment Proof",
                        icon: "/images/id-file.svg",
                        type: "PDF",
                        date: "Dec 12, 2024",
                        status: "Verified"
                  }, 
            ],
      },
      {
            title: "Financial & Guarantor Documents",
            count: 2,
            img: "/images/wallet.svg", 
            items: [
                  {
                        name: "Guarantor ID",
                        icon: "/images/pic.svg",
                        type: "JPG",
                        date: "Dec 14, 2024",
                        status: "Verified"
                  },
                  {
                        name: "Guarantor Financial Proof",
                        icon: "/images/id-file.svg",
                        type: "PDF",
                        date: "Dec 14, 2024",
                        status: "Pending"
                  }, 
            ],
      },
      {
            title: "FLease Documents",
            count: 3,
            img: "/images/LeaseDocuments.svg", 
            items: [ 
                  {
                        name: "Signed Lease Agreement",
                        icon: "/images/id-file.svg",
                        type: "PDF",
                        date: "Dec 20, 2024",
                        status: "Verified"
                  }, 
                  {
                        name: "Check-in Inspection Report",
                        icon: "/images/id-file.svg",
                        type: "PDF",
                        date: "Dec 22, 2024",
                        status: "Verified"
                  }, 
                  {
                        name: "Check-out Inspection Report",
                        icon: "/images/id-file.svg",
                        type: "PDF",
                        date: "Dec 28, 2024",
                        status: "Pending"
                  }, 
            ],
      },
];

const statusStyles: any = {
      Verified: "border-green239 bg-yellow41 text-green238",
      Pending: "border-yellow42 bg-yellow41 text-yellow22",
};

export const TenantDocuments = () => {
      return (
            <div className="">
                  {documentSections.map((section, i) => (
                        <div key={i} className="bg-white border border-solid border-gray55/50 rounded-xl shadow-31xl mb-4 last:mb-0">
                              <div className="flex justify-between items-center sm:p-6 p-4 rounded-t-xl hover:bg-gray53/30 transition-all duration-500">
                                    <div className="flex items-start gap-3">
                                          <span className="rounded-xl bg-blue12/10 flex items-center justify-center w-9 h-9">
                                                <Image
                                                      src={section.img}
                                                      alt=""
                                                      width={20}
                                                      height={20}
                                                />
                                          </span>
                                          <div>
                                                <h2 className="text-black-1200 font-bold text-base leading-6">{section.title}</h2>
                                                <p className="text-gray-2200 font-normal text-sm leading-5">
                                                      {section.count} documents
                                                </p>
                                          </div>
                                    </div>
                                    <span className='flex items-center justify-center w-5 h-5'>
                                          <Image
                                                src="../images/down-arrow.svg"
                                                alt=""
                                                width={16}
                                                height={16}
                                          />
                                    </span>
                              </div>


                              <div className='pb-6 lg:px-6 px-4'>
                                    {section.items.map((doc, index) => (
                                          <div key={index}
                                                className="group flex sm:flex-row flex-col sm:gap-0 gap-4 justify-between sm:items-center items-start sm:px-4 px-2 py-3 rounded-xl border-t border-solid border-gray55 cursor-pointer hover:bg-gray53/30 transition-all duration-500 ease-in-out first:border-t-0"
                                          >
                                                <div className='flex items-center gap-4'>
                                                      <span className="rounded-xl bg-gray53/50 flex items-center justify-center w-9 h-9">
                                                            <Image
                                                                  src={doc.icon}
                                                                  alt=""
                                                                  width={16}
                                                                  height={16}
                                                            />
                                                      </span>
                                                      <div className='flex-1 w-full'>
                                                            <p className="text-black-1200 font-inter font-normal text-base leading-5 mb-0.5">{doc.name}</p>
                                                            <p className="text-gray-500 font-inter font-normal text-xs leading-4">
                                                                  {doc.type}  •  {doc.date}
                                                            </p>
                                                      </div>
                                                </div>
                                                <div className='flex items-center justify-end sm:w-auto w-full gap-3'>
                                                      <span
                                                            className={`px-2.5 h-5.5 border border-solid rounded-full inline-flex items-center justify-center text-xs leading-4 font-normal ${statusStyles[doc.status]}`}
                                                      >
                                                            {doc.status}
                                                      </span>
                                                      <ul className='flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                                                            <li>
                                                                  <Link href={"#"} className='w-8 h-8 flex items-center justify-center'>
                                                                        <Image
                                                                              src="../images/eye-icon.svg"
                                                                              alt=""
                                                                              width={16}
                                                                              height={16}
                                                                        />
                                                                  </Link>
                                                            </li>
                                                            <li>
                                                                  <Link href={"#"} className='w-8 h-8 flex items-center justify-center'>
                                                                        <Image
                                                                              src="../images/download-icon.svg"
                                                                              alt=""
                                                                              width={16}
                                                                              height={16}
                                                                        />
                                                                  </Link>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  ))}
            </div>
      )
}
