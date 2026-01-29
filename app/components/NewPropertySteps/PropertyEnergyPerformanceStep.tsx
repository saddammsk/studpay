"use client";
import { useState } from 'react'
import Link from "next/link";
import { Radio, RadioGroup } from '@headlessui/react'

const data = [
      { label: "A", value: 100, color: "#16a34a" },
      { label: "B", value: 94, color: "#22c55e" },
      { label: "C", value: 88, color: "#84cc16" },
      { label: "D", value: 82, color: "#facc15" },
      { label: "E", value: 76, color: "#f97316" },
      { label: "F", value: 70, color: "#fb923c" },
      { label: "G", value: 64, color: "#dc2626" },
];
const data1 = [
      { label: "A", value: 100, color: "#BFA6D9" },
      { label: "B", value: 94, color: "#AD89D2" },
      { label: "C", value: 88, color: "#9966CC" },
      { label: "D", value: 82, color: "#8541C8" },
      { label: "E", value: 76, color: "#732EB8" },
      { label: "F", value: 70, color: "#6122A0" },
      { label: "G", value: 64, color: "#4D1782" },
];

const plans = [
      {
            img: '../images/solar-icon.svg',
            name: 'Panneaux solaires',
            dis: "Production d'énergie renouvelable"
      },
      {
            img: '../images/Rainwater-icon.svg',
            name: 'Récupération des eaux de pluie',
            dis: 'Système de collecte et stockage'
      },
      {
            img: '../images/index-icon.svg',
            name: 'Isolation récente (moins de 5 ans)',
            dis: 'Isolation thermique performante'
      },
      {
            img: '../images/Ventilation-icon.svg',
            name: 'Ventilation double flux',
            dis: 'Système VMC avec récupération de chaleur'
      }
];


export const PropertyEnergyPerformanceStep = () => {
      const [selected, setSelected] = useState(plans[0])
      return (
            <div className="pt-6">
                  <ul className="flex items-center gap-2 mt-0.5">
                        <li className="text-gray26 font-inter text-sm font-normal leading-5"><Link href={"#"}>Add Property</Link> </li>
                        <li><img src="../images/Breadcrumb-arrow.svg" alt="" /> </li>
                        <li className="text-blue-1100 font-inter text-sm font-normal leading-5">Energy Performance</li>
                  </ul>
                  <div className="flex items-center gap-3 my-8">
                        <span className='bg-blue18/10 rounded-xl w-12 h-12 flex items-center justify-center'>
                              <img src="../images/home-icon.svg" alt='' className="filter-img" />
                        </span>
                        <div className="relative">
                              <h4 className="font-bold font-inter text-blue-black17 text-xl leading-7 mb-1 tracking-[-0.5px] text-black17">Property Characteristics</h4>
                              <p className='text-gray-1400 font-inter font-normal text-sm leading-5'>Performance énergétique</p>
                        </div>
                  </div>
                  <div className="flex items-start p-4 gap-3 rounded-lg bg-blue119/50 border border-solid border-blue120/10">
                        <span className="flex items-center justify-center w-5.5 h-5.5"><img src="../images/info-gray.svg" alt="" /> </span>
                        <div className="flex-1 w-full">
                              <h4 className="text-black23 font-inter font-medium text-[12.8px] leading-5 mb-1">Informations obligatoires</h4>
                              <p className="text-gray37 font-inter font-normal text-[13.2px]">
                                    Conformément à la loi Climat et Résilience, le diagnostic de performance énergétique (DPE) et les émissions de gaz à effet
                                    de serre (GES) doivent être renseignés pour toute annonce locative.
                              </p>
                        </div>
                  </div>
                  <div className="rounded-lg bg-white border border-solid border-gray38 mt-6 shadow-19xl">
                        <div className="bg-gray37 py-3 px-5 rounded-t-lg">
                              <h4 className="text-white font-inter sm:text-sm text-xs font-medium leading-5 tracking-[0.35px] uppercase flex items-center gap-2"><img src="../images/light-icon.svg" alt="" /> Diagnostic de Performance Énergétique (DPE)</h4>
                        </div>
                        <div className="lg:px-13 px-5 py-5">
                              <p className="text-gray37 mb-5 font-normal font-inter text-[13.2px] leading-5">Sélectionnez la classe énergétique indiquée sur votre diagnostic DPE.</p>
                              <div className="w-full space-y-1.5">
                                    {data.map((item) => (
                                          <div
                                                key={item.label}
                                                className="flex items-center gap-3"
                                          >
                                                <div
                                                      className="h-9 rounded-r-md flex items-center px-3 text-white font-inter text-lg font-bold leading-7 transition-all duration-700"
                                                      style={{
                                                            width: `${item.value}%`,
                                                            backgroundColor: item.color,
                                                      }}
                                                >
                                                      {item.label}
                                                </div>
                                          </div>
                                    ))}
                              </div>
                              <div className="mt-5 border-t border-solid border-gray38 pt-4">
                                    <label className="text-black23 font-medium font-inter text-[12.9px] leading-5 block mb-2.5">Année du diagnostic <span className="text-gray37 font-normal">(facultatif)</span></label>
                                    <input type="" className="text-gray37 font-normal font-inter text-[13.3px] leading-normal px-3.25 h-10 w-full max-w-[320px] bg-gray-1600 border border-solid border-gray38 rounded-md focus:outline-0" placeholder="Ex: 2023" />
                              </div>
                        </div>
                  </div>
                  <div className="rounded-lg bg-white border border-solid border-gray38 mt-6 shadow-19xl">
                        <div className="bg-gray37 py-3 px-5 rounded-t-lg">
                              <h4 className="text-white font-inter sm:text-sm text-xs font-medium leading-5 tracking-[0.35px] uppercase flex items-center gap-2"><img src="../images/leaf-icon.svg" alt="" /> Émissions de Gaz à Effet de Serre (GES)</h4>
                        </div>
                        <div className="lg:px-13 px-5 py-5">
                              <p className="text-gray37 mb-5 font-normal font-inter text-[13.2px] leading-5">Sélectionnez la classe d'émission de CO₂ indiquée sur votre diagnostic.</p>
                              <div className="w-full space-y-1.5">
                                    {data1.map((item) => (
                                          <div
                                                key={item.label}
                                                className="flex items-center gap-3"
                                          >
                                                <div
                                                      className="h-9 rounded-r-md flex items-center px-3 text-white font-inter text-lg font-bold leading-7 transition-all duration-700"
                                                      style={{
                                                            width: `${item.value}%`,
                                                            backgroundColor: item.color,
                                                      }}
                                                >
                                                      {item.label}
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
                  <div className="rounded-lg bg-white border border-solid border-gray38 mt-6 shadow-19xl">
                        <div className="bg-gray37 py-3 px-5 rounded-t-lg flex items-center justify-between">
                              <h4 className="text-white font-inter sm:text-sm text-xs font-medium leading-5 tracking-[0.35px] uppercase flex items-center gap-2"><img src="../images/star-white.svg" alt="" /> Équipements éco-responsables</h4>
                              <span className="text-white font-normal font-inter text-[10.9px] leading-4 block">Facultatif</span>
                        </div>
                        <div className="lg:px-13 px-5 py-5">
                              <p className="text-gray37 mb-5 font-normal font-inter text-[13.2px] leading-5">Indiquez les équipements écologiques présents dans votre logement.</p>
                              <div className="w-full">
                                    <RadioGroup by="name" value={selected} onChange={setSelected} aria-label="Server size" className="grid xl:grid-cols-2 grid-cols-1 gap-3">
                                          {plans.map((plan) => (
                                                <Radio
                                                      key={plan.name}
                                                      value={plan}
                                                      className="group relative flex items-center gap-3 cursor-pointer rounded-lg bg-white border border-solid border-gray38 p-4 transition focus:not-data-focus:outline-none data-checked:bg-blue119/30 data-checked:border-blue130/50 data-focus:outline data-focus:outline-white"
                                                >
                                                      <div className="opacity-100 flex items-center justify-center border border-solid border-gray37 rounded-sm w-4 h-4 transition group-data-checked:opacity-100 group-data-checked:bg-blue18 group-data-checked:border-blue18">
                                                            <img src="../images/check-white.svg" alt='' className='opacity-0 h-1.5 group-data-checked:opacity-100' />
                                                      </div>
                                                      <div className="flex flex-1 gap-3 w-full items-center">
                                                            <span className="bg-gray38 rounded-lg w-10 h-10 flex items-center justify-center">
                                                                  <img src={plan.img} alt={plan.name}/>
                                                            </span>
                                                            <div className="text-sm/6">
                                                                  <h4 className="font-semibold ">{plan.name}</h4>
                                                                  <p>{plan.dis}</p>
                                                            </div>
                                                      </div>
                                                </Radio>
                                          ))}
                                    </RadioGroup>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
