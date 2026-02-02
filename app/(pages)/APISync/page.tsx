'use client'
import APITable from "@/app/components/APITable";
import Image from 'next/image'
import Link from "next/link";
import { useState } from "react";


export default function APISyncPage() {


  const [apiKey, setApiKey] = useState('sk_live_studpay_••••••••••••••••');
  const [showApiKey, setShowApiKey] = useState(false);
  const [copied, setCopied] = useState(false);
  const [syncData, setSyncData] = useState({
    propertiesSynced: 1247,
    lastSync: '2 min ago',
    pendingIssues: 3,
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleCopyApiKey = () => {
    const fullKey = 'sk_live_studpay_1234567890abcdef';
    navigator.clipboard.writeText(fullKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerateKey = () => {
    if (window.confirm('Are you sure you want to regenerate the API key? This will invalidate the current key.')) {
      setApiKey('sk_live_studpay_fedcba0987654321');
      alert('API key regenerated successfully!');
    }
  };

  const handleToggleApiKey = () => {
    setShowApiKey(!showApiKey);
  };

  const handleDownloadTemplate = () => {
    const template = 'Property Name,Address,Type,Units,Status\nSample Property,123 Main St,Apartment,10,Active\n';
    const blob = new Blob([template], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'property-import-template.csv';
    a.click();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    let progress = 0;

    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      

        setTimeout(() => {
          setIsUploading(false);
          setUploadProgress(0);
          alert(`File "${file.name}" uploaded successfully!`);
        }, 500);
      } else {
        setUploadProgress(Math.floor(progress));
      }
    }, 300);
  };


      

      return (
            <div className="pl-3 xl:pr-9 pr-3 py-6">
                  <div className="bg-white rounded-[15px]">
                        <div className="border-b border-solid border-gray-1100 md:p-6 p-4 flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-3 justify-between">
                              <div className="">
                                    <h4 className="text-black245 font-inter font-bold text-2xl leading-8 tracking-[-0.6px] mb-1">API & Integrations</h4>
                                    <p className="text-gray-1000 font-inter font-normal text-sm leading-5">Manage API access and bulk import your property data</p>
                              </div>
                              <div className="inline-flex items-center justify-center text-green238 font-normal font-inter text-xs leading-4 border border-solid border-green239 rounded-full bg-yellow41 h-7.5 px-3 gap-2"><span className="bg-green240 rounded-full w-2 h-2"></span> API Connected</div>
                        </div>
                        <div className="lg:px-6 px-4 lg:py-8 py-6">
                              <div className="">
                                    <h4 className="text-black245 font-inter font-bold text-lg leading-7 tracking-[-0.45px] mb-4">API Configuration</h4>
                                    <div className="flex sm:flex-row flex-col items-start lg:gap-4 sm:gap-2 gap-4 border border-solid border-gray-1100 rounded-lg shadow-14xl lg:p-6 p-3">
                                          <span className="bg-gray-1200 rounded-lg w-11 h-11 flex items-center justify-center"><Image src="/images/key-blue.svg" alt="Image" width={16} height={16} /></span>
                                          <div className="flex-1 w-full">
                                                <h4 className="text-black245 font-normal font-inter text-base leading-6 mb-0.5 tracking-[-0.4px]">API Key</h4>
                                                <p className="text-gray-1000  font-normal font-inter text-sm leading-5">Use this key to authenticate API requests from your systems</p>
                                                <div className="flex sm:flex-row flex-col items-center gap-2 mt-4">
                                                      <div className="bg-yellow41 flex-1 w-full rounded-lg p-4 flex items-center justify-between">
                                                            <p className="text-black245 font-normal font-inter lg:text-sm sm:text-xs text-[10px] leading-5"> {showApiKey ? 'sk_live_studpay_1234567890abcdef' : apiKey}</p>
                                                            <ul className="flex items-center gap-2">
                                                                  <li><button onClick={handleToggleApiKey} className="flex cursor-pointer items-center justify-center sm:w-7 w-6 sm:h-7 h-6"><Image src="../images/eye-icon.svg" alt="Image" width={16} height={16} /></button></li>
                                                                  <li><button onClick={handleCopyApiKey} className="flex cursor-pointer items-center justify-center sm:w-7 w-6 sm:h-7 h-6"><Image src="../images/copy2.svg" alt="Image" width={16} height={16} /></button></li>
                                                            </ul>
                                                      </div>
                                                      {copied && <span className="text-green-600 text-xs">Copied!</span>}
                                                      <button onClick={handleRegenerateKey} className="flex items-center justify-center border border-solid border-gray-1100 rounded-md bg-white text-black245 font-normal font-inter text-sm leading- h-10 gap-2 px-4"><Image src="../images/refresh2.svg" alt="Image" width={16} height={16} />Regenerate</button>
                                                </div>
                                                <div className="border-t border-solid border-gray-1100 pt-4 mt-4">
                                                      <h4 className="text-gray-1000 font-normal font-inter text-sm leading-5 mb-2">Base URLy</h4>
                                                      <Link href={'#'} className="bg-yellow41 inline-flex items-center px-3 h-8 text-black245">https://api.studpay.io/v1</Link>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="mt-8">
                                    <h4 className="text-black245 font-inter font-bold text-lg leading-7 tracking-[-0.45px] mb-4">Sync Status</h4>
                                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                                          <div className="flex items-center gap-3 border border-solid border-gray-1100 rounded-lg shadow-14xl p-5">
                                                <span className="bg-yellow41 w-10 h-10 flex items-center justify-center rounded-lg"><Image src="/images/checkgreen2.svg" alt="Image" width={20} height={20} /></span>
                                                <div className="flex-1 w-full">
                                                      <h4 className="text-black245 font-bold font-inter text-2xl leading-8">{syncData.propertiesSynced}</h4>
                                                      <p className="text-gray-1000  font-normal font-inter text-sm leading-5">Properties Synced</p>
                                                </div>
                                          </div>
                                          <div className="flex items-center gap-3 border border-solid border-gray-1100 rounded-lg shadow-14xl p-5">
                                                <span className="bg-gray-1200 w-10 h-10 flex items-center justify-center rounded-lg"><Image src="/images/clock-blue.svg" alt="Image" width={20} height={20} /></span>
                                                <div className="flex-1 w-full">
                                                      <h4 className="text-black245 font-bold font-inter text-2xl leading-8">{syncData.lastSync}</h4>
                                                      <p className="text-gray-1000  font-normal font-inter text-sm leading-5">Last Sync</p>
                                                </div>
                                          </div>
                                          <div className="flex items-center gap-3 border border-solid border-gray-1100 rounded-lg shadow-14xl p-5">
                                                <span className="bg-yellow41 w-10 h-10 flex items-center justify-center rounded-lg">
                                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.99935 18.3327C14.6017 18.3327 18.332 14.6017 18.3327 9.99935C18.3327 5.39698 14.6017 1.66602 9.99935 1.66602C5.39698 1.66602 1.66602 5.39698 1.66602 9.99935C1.66602 14.6017 5.39698 18.3327 9.99935 18.3327Z" stroke="#D97706" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10 6.66602V9.99935" stroke="#D97706" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M10 13.334H10.0083" stroke="#D97706" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                      </svg>
                                                </span>
                                                <div className="flex-1 w-full">
                                                      <h4 className="text-black245 font-bold font-inter text-2xl leading-8">{syncData.pendingIssues}</h4>
                                                      <p className="text-gray-1000  font-normal font-inter text-sm leading-5">Pending Issues</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="mt-8">
                                    <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between mb-4">
                                          <h4 className="text-black245 font-inter font-bold text-lg leading-7 tracking-[-0.45px]">Bulk Import</h4>
                                          <ul className="flex items-center gap-3 sm:mt-0 mt-4">
                                                <li>
                                                      <button onClick={handleDownloadTemplate} className="text-black245 cursor-pointer px-4 font-inter font-normal sm:text-sm text-xs leading-5 flex items-center justify-center gap-2 border border-solid border-gray-1100 rounded-md h-10 hover:bg-gray-1200 transition-all duration-500 ease-in-out"><Image src="/images/download-icon.svg" alt="Image" width={16} height={16} /> Download Template</button>
                                                </li>
                                                      <li>
                                                      <label className="text-white cursor-pointer px-4 font-inter font-normal sm:text-sm text-xs leading-5 flex items-center justify-center gap-2 border border-solid border-blue-1000 bg-blue-1000 hover:bg-blue-1000/90 rounded-md h-10 transition-all duration-500 ease-in-out"><Image src="/images/upload-icon.svg" alt="Image" width={16} height={16} className="brightness-[3000]" />
                                                       <input
                                                      type="file"
                                                      accept=".csv,.xlsx"
                                                      onChange={handleFileUpload}
                                                      disabled={isUploading}
                                                      className="hidden"
                                                      />
                                                       Upload File
                                                       </label>
                                                </li>
                                          </ul>
                                    </div>
                                    <APITable></APITable>
                              </div>
                              <div className="mt-8 bg-gray-1200 rounded-xl lg:p-6 p-4 flex sm:flex-row flex-col items-center justify-between">
                                    <div className="sm:mb-0 mb-4">
                                          <h4 className="text-black245 font-normal font-inter text-base leading-6 mb-1 tracking-[-0.4px]">Need help with the API?</h4>
                                          <p className="text-gray-1000 lg:max-w-full sm:max-w-75 max-w-full font-normal font-inter text-sm leading-5">Check out our developer documentation for detailed integration guides</p>
                                    </div>
                                    <Link href={"#"} className="text-black245 px-4 font-inter font-normal text-sm leading-5 flex items-center justify-center  border border-solid border-gray-1100 bg-white rounded-md h-10 hover:bg-gray-1200 transition-all duration-500 ease-in-out">View Documentation</Link>
                              </div>
                        </div>
                  </div>
            </div>

      );
}
