export default function StudioCardSkeleton({ view }: { view: "grid" | "list" }) {
      return (
            <div className="group bg-white shadow-14xl border-gray17 rounded-xl animate-pulse">
                  <div className={view === "grid" ? "" : "flex flex-row gap-6"}>
                        <div className={`relative flex flex-col overflow-hidden ${view === "grid" ? "rounded-t-xl" : "rounded-xl md:w-2/5 w-full"}`}>
                              <div className="w-full h-[320px] bg-gray-200"></div>
                              <ul className="flex items-center justify-between absolute top-0 left-0 w-full px-3 py-3.25">
                                    <li>
                                          <span className="inline-flex items-center justify-center rounded-full h-6 w-16 bg-gray-300"></span>
                                    </li>
                                    <li>
                                          <span className="flex items-center justify-center bg-gray-300 rounded-[10px] w-8 h-8"></span>
                                    </li>
                              </ul>
                        </div>

                        <div className="p-4 flex-1 flex flex-col justify-between">
                              <div className="h-7 bg-gray-200 rounded w-3/4 mb-2"></div>

                              <div className="w-full">
                                    <div className="flex items-center gap-1.5 mt-1.75">
                                          <div className="w-4 h-4 bg-gray-200 rounded"></div>
                                          <div className="h-5 bg-gray-200 rounded w-full"></div>
                                    </div>

                                    <div className="pt-3 mt-3 border-t border-solid border-gray17 flex items-center justify-between">
                                          <ul className="flex items-center gap-3">
                                                <li className="flex items-center gap-1.5">
                                                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                                                      <div className="h-5 bg-gray-200 rounded w-20"></div>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                                                      <div className="h-4 bg-gray-200 rounded w-10"></div>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                                                      <div className="h-4 bg-gray-200 rounded w-10"></div>
                                                </li>
                                          </ul>
                                          <div className="h-7 bg-gray-200 rounded w-24"></div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export function StudioCardSkeletonGrid({ view, count = 6 }: { view: "grid" | "list"; count?: number }) {
      return (
            <div className={view === "grid" ? "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6" : "flex flex-col gap-6"}>
                  {Array.from({ length: count }).map((_, index) => (
                        <StudioCardSkeleton key={index} view={view} />
                  ))}
            </div>
      );
}