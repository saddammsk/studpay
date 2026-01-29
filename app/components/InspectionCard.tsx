import Image from "next/image";

type InspectionItem = {
     name: string;
     status: "OK" | "Issue";
     description?: string;
     hasImage?: boolean;
     layout?: "between" | "start";
};

type Section = {
     title: string;
     icon: string;
     ok: number;
     issues: number;
     layout?: "between" | "start";
     items: InspectionItem[];
};

export default function InspectionCard() {
     const sections: Section[] = [
          {
               title: "Living Room",
               icon: "/images/bed-icon2.svg",
               ok: 3,
               issues: 2,
               layout: "between",
               items: [
                    { name: "Walls & Paint", status: "OK" },
                    {
                         name: "Flooring",
                         status: "Issue",
                         hasImage: true,
                         description:
                              "Deep scratch near window, approximately 8 inches long. Requires professional repair.",
                    },
                    {
                         name: "Windows & Blinds",
                         status: "Issue",
                         hasImage: true,
                         description: "Blind cord frayed, needs replacement",
                    },
                    { name: "Light Fixtures", status: "OK" },
                    { name: "Electrical Outlets", status: "OK" },
               ],
          },
          {
               title: "Master Bedroom",
               icon: "/images/bed-icon.svg",
               ok: 5,
               issues: 0,
               items: [
                    { name: "Walls & Paint", status: "OK", layout: "between" },
                    { name: "Flooring / Carpet", status: "OK", layout: "between" },
                    { name: "Closet Doors & Shelving", status: "OK", layout: "between" },
                    { name: "Windows & Blinds", status: "OK", layout: "between" },
                    { name: "Light Fixtures", status: "OK", layout: "between" },
               ],
          },
          {
               title: "Kitchen",
               icon: "/images/kitchen-icon2.svg",
               ok: 6,
               issues: 0,
               items: [
                    { name: "Countertops", status: "OK", layout: "between" },
                    { name: "Cabinets & Drawers", status: "OK", layout: "between" },
                    { name: "Sink & Faucet", status: "OK", layout: "between" },
                    { name: "Stove / Oven", status: "OK", layout: "between" },
                    { name: "Refrigerator", status: "OK", layout: "between" },
                    { name: "Dishwasher", status: "OK", layout: "between" },
               ],
          },
          {
               title: "Bathroom",
               icon: "/images/bathroom.svg",
               ok: 4,
               issues: 1,
               layout: "between",
               items: [
                    { name: "Toilet", status: "OK", layout: "between" },
                    { name: "Sink & Vanity", status: "OK", layout: "between" },
                    { name: "Shower / Tub", status: "OK", layout: "between" },
                    {
                         name: "Tiles & Grout",
                         status: "Issue",
                         hasImage: true,
                         description:
                              "Cracked tile near shower drain, requires replacement",
                    },
                    { name: "Exhaust Fan", status: "OK", layout: "between" },
               ],
          },
          {
               title: "Entrance & Hallway",
               icon: "/images/hallway.svg",
               ok: 4,
               issues: 0,
               items: [
                    { name: "Front Door & Lock", status: "OK", layout: "between" },
                    { name: "Flooring", status: "OK", layout: "between" },
                    { name: "Walls & Paint", status: "OK", layout: "between" },
                    { name: "Light Fixtures", status: "OK", layout: "between" },
               ],
          },
          {
               title: "Exterior & Balcony",
               icon: "/images/balcony.svg",
               ok: 3,
               issues: 0,
               items: [
                    { name: "Balcony Surface", status: "OK", layout: "between" },
                    { name: "Railing", status: "OK", layout: "between" },
                    { name: "Exterior Lighting", status: "OK", layout: "between" },
               ],
          },
     ];

     return (
          <>
               {sections.map((section, i) => (
                    <div
                         key={i}
                         className="border border-gray-2700 my-4 bg-white rounded-[10px] overflow-hidden"
                    >
                         {/* HEADER */}
                         <div className="flex items-center justify-between bg-gray-4100/[30%] py-4 px-6">
                              <div className="flex items-center gap-3">
                                   <Image src={section.icon} alt="" width={20} height={20} />
                                   <h4 className="text-lg font-dm-sans font-bold text-black-1400">
                                        {section.title}
                                   </h4>
                              </div>

                              <div className="flex items-center gap-4">
                                   <div className="flex items-center gap-2">
                                        <Image
                                             src="/images/check-circle2.svg"
                                             width={16}
                                             height={16}
                                             alt=""
                                        />
                                        <span className="text-sm font-dm-sans text-green-1400">
                                             {section.ok} OK
                                        </span>
                                   </div>

                                   {section.issues > 0 && (
                                        <div className="flex items-center gap-2">
                                             <Image
                                                  src="/images/info-icon4.svg"
                                                  width={16}
                                                  height={16}
                                                  alt=""
                                             />
                                             <span className="text-sm font-dm-sans text-yellow-1100">
                                                  {section.issues} Issue
                                             </span>
                                        </div>
                                   )}
                              </div>
                         </div>

                         {/* BODY */}
                         <div className="bg-white">
                              {section.items.map((item, idx) => (
                                   <div
                                        key={idx}
                                        className="border-b border-gray-2700 pt-4 pb-6 px-6"
                                   >
                                        <div
                                             className={`flex items-start ${item.layout === "between" || section.layout === "between"
                                                  ? "justify-between"
                                                  : "gap-3"
                                                  }`}
                                        >
                                             {/* LEFT */}
                                             <div className="flex-1">
                                                  <div
                                                       className={`flex items-center ${item.layout === "between" ? "justify-between" : "gap-3"
                                                            }`}
                                                  >
                                                       <h6 className="font-dm-sans text-base font-medium text-black-1400">
                                                            {item.name}
                                                       </h6>

                                                       <div
                                                            className={`rounded flex items-center gap-1 py-1 px-2 ${item.status === "OK"
                                                                 ? "bg-green-1400/[10%]"
                                                                 : "bg-yellow-1100/[10%]"
                                                                 }`}
                                                       >
                                                            <Image
                                                                 src={
                                                                      item.status === "OK"
                                                                           ? "/images/check-circle2.svg"
                                                                           : "/images/info-icon4.svg"
                                                                 }
                                                                 width={12}
                                                                 height={12}
                                                                 alt=""
                                                            />
                                                            <span
                                                                 className={`text-xs font-dm-sans font-medium ${item.status === "OK"
                                                                      ? "text-green-1400"
                                                                      : "text-yellow-1100"
                                                                      }`}
                                                            >
                                                                 {item.status}
                                                            </span>
                                                       </div>
                                                  </div>


                                                  {item.description && (
                                                       <p className="mt-2 text-sm font-dm-sans text-gray-2200 max-w-[520px]">
                                                            {item.description}
                                                       </p>
                                                  )}
                                             </div>

                                             {/* RIGHT IMAGE ICON (ONLY IF ITEM HAS IMAGE) */}
                                             {item.hasImage && (
                                                  <button className="md:w-16 w-8 md:h-16 h-8 flex items-center justify-center rounded-lg bg-gray-4100">
                                                       <Image
                                                            src="/images/image-icon.png"
                                                            width={16}
                                                            height={16}
                                                            alt=""
                                                       />
                                                  </button>
                                             )}
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               ))}
          </>
     );
}
