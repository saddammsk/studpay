import { useState } from "react";
import { Radio, RadioGroup } from '@headlessui/react'
import InputField from "@/app/ui/InputField";
import Link from "next/link";

const plans = [
  { img: '../images/home-icon.svg', name: 'Entire place', dis: 'Guests have the whole place' },
  { img: '../images/document-icon.svg', name: 'Private room', dis: 'Guests have a private room' },
  { img: '../images/tenants.svg', name: 'Coliving', dis: 'Shared living spaces' },
]
const categoryOptions = [
  { label: "Category1", value: "Category1" },
  { label: "Category2", value: "Category2" },
  { label: "Category3", value: "Category3" },
];
export const GeneralStep = () => {
  const [selected, setSelected] = useState(plans[0])
  const [category, setcategory] = useState("");
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");


  return (
    <div className='bg-white rounded-4xl shadow-18xl md:py-10 md:px-8 sm:p-6 py-6 px-4 mt-6'>
      <div className='mb-8'>
        <label className='text-black text-sm leading-5 font-outfit font-medium'>Property type<span className='text-red12'>*</span></label>
        <div className="w-full max-w-207.75 mt-3.25">
          <RadioGroup by="name" value={selected} onChange={setSelected} aria-label="Server size" className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {plans.map((plan) => (
              <Radio
                key={plan.name}
                value={plan}
                className="group group-radio relative flex cursor-pointer p-5.5 rounded-2xl bg-white border-2 border-solid border-gray36 transition focus:not-data-focus:outline-none data-checked:bg-blue-1000/5 data-checked:border-blue-1000 data-focus:outline data-focus:outline-white">
                <div className="w-full">
                  <span className="mb-3 group-data-checked:bg-blue-1000/10 bg-gray35 rounded-2xl w-12 h-12 flex items-center justify-center">
                    <img src={plan.img} alt='' />
                  </span>
                  <h4 className="font-outfit font-semibold text-base leading-6 mb-1 text-black">{plan.name}</h4>
                  <p className="font-outfit font-normal text-sm leading-5 text-gray24">{plan.dis}</p>
                </div>
              </Radio>
            ))}
          </RadioGroup>
        </div>
      </div>
      <div className="pb-3">
        <InputField
          label={"Property category"}
          required
          fieldType="select"
          name="category"
          id="category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          placeholder="Select a category"
          rightarrowSrc="/images/down-arrow.svg"
          variant="filled4"
          options={categoryOptions}
        />
      </div>
      <div className="mb-8">
        <InputField
          label="Property address"
          required
          placeholder="Start typing to search address..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          leftIconSrc="/images/location.svg"
          variant="filled4"
          id="name"
          name="name"
        />
        <div className="bg-gray35 border border-solid border-gray36 rounded-2xl flex items-center justify-center flex-col py-8">
          <img src="/images/location2.svg" alt="" className="h-8" />
          <p className="text-gray24 text-sm leading-5 mt-2 font-normal font-outfit">Map preview will appear here</p>
        </div>
      </div>
      <div className="relative mb-8">
        <InputField
          label="Property title"
          required
          placeholder="e.g., Cozy studio near university campus"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          variant="filled4"
          id="name2"
          name="name2"
        />
        <span className="absolute top-0.75 right-0 flex items-center text-gray24 font-outfit font-normal text-xs leading-4">0/80</span>
      </div>
      <div className="mb-8">
        <label className="text-black font-outfit font-medium text-sm leading-5 flex items-center">Description <span className="text-red12">*</span></label>
        <div className="border border-solid border-gray36 rounded-2xl flex flex-col mt-3.25">
          <div className="bg-white rounded-t-2xl p-2">
            <ul className="flex items-center gap-1">
              <li>
                <Link href={"#"} className="flex items-center justify-center w-8 h-8"><img src="../images/bold-icon.svg" alt="" /> </Link>
              </li>
              <li>
                <Link href={"#"} className="flex items-center justify-center w-8 h-8"><img src="../images/italic-icon.svg" alt="" /> </Link>
              </li>
              <li>
                <Link href={"#"} className="flex items-center justify-center w-8 h-8"><img src="../images/list-icon1.svg" alt="" /> </Link>
              </li>
              <li>
                <Link href={"#"} className="flex items-center justify-center w-8 h-8"><img src="../images/link-icon.svg" alt="" /> </Link>
              </li>
            </ul>
          </div>
          <textarea className="text-gray24 placeholder:text-gray24 resize-none text-sm leading-5 font-outfit font-normal py-2 px-3 bg-gray35 h-[150] rounded-b-2xl w-full outline-0" placeholder="Describe your property in detail. Highlight unique features, nearby amenities, and what makes it perfect for students..."></textarea>
        </div>
      </div>
      <div className="">
        <label className="text-black font-outfit font-medium text-sm leading-5 flex items-center gap-1">Highlight tags <span className="text-gray24 font-normal">(optional)</span></label>
        <ul className="flex items-center gap-2 mt-3.25">
          <li>
            <div className="bg-blue-1000/10 rounded-full text-blue-1000 font-outfit font-medium text-sm leading-5 px-3 h-8 gap-1 inline-flex items-center justify-center">
              <span className="flex items-center mb-0.5">Near campus</span>
              <Link href={"#"} className="flex items-center justify-center w-4 h-4"><img src="../images/cross-blue.svg" alt="" /> </Link>
            </div>
          </li>
          <li>
            <div className="bg-blue-1000/10 rounded-full text-blue-1000 font-outfit font-medium text-sm leading-5 px-3 h-8 gap-1 inline-flex items-center justify-center">
              <span className="flex items-center mb-0.5">Furnished</span>
              <Link href={"#"} className="flex items-center justify-center w-4 h-4"><img src="../images/cross-blue.svg" alt="" /> </Link>
            </div>
          </li>
        </ul>
        <InputField
          label="" 
          placeholder="Type and press Enter to add"
          value={name3}
          onChange={(e) => setName3(e.target.value)}
          variant="filled4"
          id="name3"
          name="name3"
        />
        <span className="text-gray24 text-xs leading-4 font-normal font-outfit block mt-2">2/5 tags</span>
      </div>
    </div>
  )
}
