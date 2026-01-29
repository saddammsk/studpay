import { Radio, RadioGroup } from '@headlessui/react'

const plans = [
      { name: 'Property tax document', img: '../images/document-icon.svg', dis: 'Recommended – fast approval', value: 'property-tax' },
      { name: 'Ownership title', img: '../images/Ownership-icon.svg', dis: 'Definitive validation', value: 'ownership-title' },
      { name: 'Notary deed', img: '../images/notary-icon.svg', dis: 'For recent acquisitions', value: 'notary-deed' },
]

interface PropertyRadioProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PropertyRadio({ value, onChange }: PropertyRadioProps) {
      const selectedPlan = plans.find(plan => plan.value === value) || plans[0];

      const handleChange = (plan: typeof plans[0]) => {
            onChange(plan.value);
      };

      return (
            <div className="w-full mt-4">
                  <RadioGroup 
                        by="value" 
                        value={selectedPlan} 
                        onChange={handleChange} 
                        aria-label="Document type"
                  >
                        {plans.map((plan, index) => (
                              <Radio
                                    key={plan.value}
                                    value={plan}
                                    className="mb-4 group group-radio relative flex cursor-pointer rounded-2xl bg-white border-2 border-solid border-gray32 p-5 transition focus:not-data-focus:outline-none data-checked:bg-blue19 data-checked:border-blue18 data-checked:shadow-17xl data-focus:outline data-focus:outline-white"
                              >
                                    {index === 0 && (
                                          <span className="absolute -top-3 left-7.5 bg-orange12 text-white text-xs leading-4 rounded-full font-outfit font-semibold px-2.5 py-0 h-5 flex items-center justify-center">
                                                Recommended
                                          </span>
                                    )}
                                    <div className="flex w-full items-start justify-between">
                                          <div className="text-sm/6 flex items-center gap-4">
                                                <span className='bg-blue18/10 rounded-xl w-12 h-12 flex items-center justify-center'>
                                                      <img src={plan.img} alt='' />
                                                </span>
                                                <div className="relative">
                                                      <h4 className="font-semibold font-outfit text-base leading-6 text-black16">{plan.name}</h4>
                                                      <p className='text-gray30 font-outfit font-normal text-sm leading-5'>{plan.dis}</p>
                                                </div>
                                          </div>
                                          <div className='flex items-center justify-center border-2 border-solid border-gray32 bg-transparent rounded-full w-6 h-6 relative group-data-checked:bg-blue18 group-data-checked:border-blue18'>
                                                <img src="../images/check-white.svg" alt='' className='opacity-0 group-data-checked:opacity-100' />
                                          </div>
                                    </div>
                              </Radio>
                        ))}
                  </RadioGroup>
            </div>
      )
}