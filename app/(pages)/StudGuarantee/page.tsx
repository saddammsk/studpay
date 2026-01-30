'use client';

import { useEffect, useState } from 'react';
import PrimaryLink from '@/app/ui/PrimaryLink';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { 
  fetchGuarantees, 
  declareClaim, 
} from '@/store/slices/guaranteeSlice';
import type { GuaranteeStatus } from '@/types/guarantees';
import LoadingSpinner from '@/app/components/common/LoadingSpinner';
import { RequestGuaranteeModel } from '@/app/components/StudGuarantee/RequestGuaranteeModel';
import { ClaimModel } from '@/app/components/StudGuarantee/ClaimModel';

export default function StudGuaranteePage() {
  const dispatch = useAppDispatch();
  const [isOpenRequestGuarantee, setIsOpenRequestGuarantee] = useState(false);
  const [isOpenClaim, setIsOpenClaim] = useState(false);
  
  const { guarantees, stats, loading, error } = useAppSelector(
    (state) => state.guarantees
  );


  useEffect(() => {
    dispatch(fetchGuarantees());
  }, [dispatch]);

  const handleDeclareClaim = () => {
     setIsOpenClaim(true);
  };

  const statusClasses: Record<GuaranteeStatus, string> = {
    Active: 'text-green-1200 bg-green-1200/[10%]',
    Expired: 'text-gray-2200 bg-gray-2300',
    Pending: 'text-yellow-1100 bg-yellow-1100/[10%]',
  };



  return (
    <div className="xl:py-6 xl:pl-8 4xl:pr-10 xl:px-4 p-4">
     

      <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-4  mb-4">
        <div>
          <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">
            Guarantees
          </h4>
          <p className="text-base font-inter font-normal leading-6 text-gray-2200">
            Manage your rental guarantees
          </p>
        </div>
        <div className="w-fit">
          <PrimaryLink onClick={()=> setIsOpenRequestGuarantee(true)} className="!py-2.5 px-4 gap-2" variant="primary">
            <img src="/images/plus-icon.svg" alt="" />
            Request a guarantee
          </PrimaryLink>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 mb-4 gap-4">
        <div className="bg-white rounded-xl shadow-5xl flex items-center gap-4 py-[22px] px-5">
          <div className="rounded-xl w-12 h-12 bg-blue-1300 flex items-center justify-center">
            <img src="/images/shield-icon.svg" alt="" />
          </div>
          <div>
            <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">
              {stats.active}
            </h4>
            <p className="text-sm font-inter font-normal leading-5 text-gray-2200">
              Active Guarantees
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-5xl flex items-center gap-4 py-[22px] px-5">
          <div className="rounded-xl w-12 h-12 bg-blue-1300 flex items-center justify-center">
            <img src="/images/timer-blue.svg" alt="" />
          </div>
          <div>
            <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">
              {stats.pending}
            </h4>
            <p className="text-sm font-inter font-normal leading-5 text-gray-2200">
              Pending
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-5xl flex items-center gap-4 py-[22px] px-5">
          <div className="rounded-xl w-12 h-12 bg-blue-1300 flex items-center justify-center">
            <img src="/icons/expired-icon-1.svg" alt="" />
          </div>
          <div>
            <h4 className="text-2xl font-bold leding-8 text-black-1200 mb-1">
              {stats.expired}
            </h4>
            <p className="text-sm font-inter font-normal leading-5 text-gray-2200">
              Expired
            </p>
          </div>
        </div>
      </div>
     
     {loading ? 
     <LoadingSpinner/>
     :
      <div className="grid xl:grid-cols-3 md:grid-cols-2 mb-4 4xl:gap-x-9 gap-x-5 gap-y-4">
        {guarantees.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-2200">No guarantees found</p>
          </div>
        ) : (
          guarantees.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-5xl p-5">
              <div className="flex items-center mb-4 gap-3 justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-1300 flex items-center justify-center">
                    <img src="/images/register-icon2.svg" alt="" />
                  </div>
                  <div>
                    <h4 className="text-base font-inter font-bold leading-6 text-black-1200">
                      {item.title}
                    </h4>
                    <p className="text-sm font-inter text-gray-2200">
                      {item.price}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-xs font-inter px-2.5 py-0.5 rounded-full ${
                    statusClasses[item.status]
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <ul className="space-y-[14px] mb-4">
                <li className="flex items-center gap-2 text-sm text-gray-2200">
                  <img src="/images/user-icon3.svg" alt="" />
                  <span>Tenant:</span>
                  <span className="text-black-1200">{item.tenant}</span>
                </li>

                <li className="flex items-center gap-2 text-sm text-gray-2200">
                  <img src="/images/shield-icon2.svg" className="w-4" alt="" />
                  <span>Type:</span>
                  <span className="text-black-1200">{item.type}</span>
                </li>

                <li className="flex items-center gap-2 text-sm text-gray-2200">
                  <img src="/images/calendar2.svg" alt="" />
                  <span>Period:</span>
                  <span className="text-black-1200">{item.period}</span>
                </li>
              </ul>

              <button
                onClick={handleDeclareClaim}
                disabled={item.disabled || loading}
                className={`
                  w-full py-1.5 px-4 gap-2 
                  rounded-lg bg-blue16 border border-blue-1000/20
                  text-blue-1000 text-sm font-medium
                  transition-all duration-200
                  ${
                    item.disabled || loading
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-blue-1000 cursor-pointer hover:text-white'
                  }
                `}
              >
                Declare a claim
              </button>
            </div>
          ))
        )}
      </div>
     }


     <RequestGuaranteeModel isOpen={isOpenRequestGuarantee} setIsOpen={setIsOpenRequestGuarantee} />
     <ClaimModel isOpen={isOpenClaim} setIsOpen={setIsOpenClaim} />

     
    </div>
  );
}