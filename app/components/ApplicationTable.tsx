/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState, useMemo } from "react";
import InputField from "../ui/InputField";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { useApplicationStore } from "@/store/zustand/useApplicationStore";

type RiskLevel = "low" | "medium" | "high";
type StatusType = "Approved" | "In Review" | "Pending" | "Rejected";

interface StudentRow {
  id: number;
  student: { name: string; email: string };
  property: { name: string; address: string };
  risk: { score: number; level: RiskLevel };
  status: StatusType;
}

const riskStyles: Record<"low" | "medium" | "high", string> = {
  low: "bg-green-1300 text-white",
  medium: "bg-yellow-1100 text-black",
  high: "bg-red-1100 text-white",
};

const statusStyles: Record<"Approved" | "In Review" | "Pending" | "Rejected", string> = {
  Approved: "bg-green-1300/[10%] text-green-1300",
  "In Review": "bg-blue-1600/[10%] text-blue-1600",
  Pending: "bg-lightgray text-gray-1000",
  Rejected: "bg-red-1100/[10%] text-red-1100",
};


const defaultStudents: StudentRow[] = [
  {
    id: 1,
    student: { name: "Emma Thompson", email: "emma.t@university.edu" },
    property: { name: "Maple Heights", address: "123 University Ave" },
    risk: { score: 18, level: "low" },
    status: "Approved",
  },
  {
    id: 2,
    student: { name: "James Wilson", email: "j.wilson@college.edu" },
    property: { name: "Oak Gardens", address: "456 College St" },
    risk: { score: 45, level: "medium" },
    status: "In Review",
  },
  {
    id: 3,
    student: { name: "Sofia Rodriguez", email: "sofia.r@uni.edu" },
    property: { name: "Pine View", address: "789 Campus Dr" },
    risk: { score: 72, level: "high" },
    status: "Pending",
  },
  {
    id: 4,
    student: { name: "Liam Chen", email: "l.chen@university.edu" },
    property: { name: "Riverside Apartments", address: "321 River Rd" },
    risk: { score: 65, level: "high" },
    status: "Rejected",
  },
  {
    id: 5,
    student: { name: "Aisha Patel", email: "aisha.p@college.edu" },
    property: { name: "Mountain View", address: "654 Peak Ave" },
    risk: { score: 22, level: "low" },
    status: "Approved",
  },
  {
    id: 6,
    student: { name: "Marcus Johnson", email: "m.johnson@uni.edu" },
    property: { name: "Sunset Heights", address: "987 Sunset Blvd" },
    risk: { score: 38, level: "medium" },
    status: "In Review",
  },
  {
    id: 7,
    student: { name: "Isabella Garcia", email: "i.garcia@university.edu" },
    property: { name: "Valley Springs", address: "147 Valley Ln" },
    risk: { score: 55, level: "medium" },
    status: "Pending",
  },
  {
    id: 8,
    student: { name: "David Kim", email: "d.kim@college.edu" },
    property: { name: "Urban Lofts", address: "258 Downtown St" },
    risk: { score: 80, level: "high" },
    status: "Rejected",
  },
];

function ApplicationTable() {
  const {
    search,
    setSearch,
    filters,
    toggleStatusFilter,
    toggleRiskFilter,
    sort,
    handleSort,
    actionModal,
    openActionModal,
    closeActionModal,
    rejectReason,
    openRejectModal,
    closeRejectModal,
    submitReject,
    students,
  } = useApplicationStore();

  const [initialized, setInitialized] = useState(false);
  if (!initialized && students.length === 0) {
    useApplicationStore.setState({ students: defaultStudents });
    setInitialized(true);
  }

  const filteredAndSearchedStudents = useMemo(() => {
    let result = [...students];

    if (search.trim()) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (student) =>
          student.student.name.toLowerCase().includes(searchLower) ||
          student.student.email.toLowerCase().includes(searchLower) ||
          student.property.name.toLowerCase().includes(searchLower) ||
          student.property.address.toLowerCase().includes(searchLower)
      );
    }

    if (filters.status.length > 0) {
      result = result.filter((student) => filters.status.includes(student.status));
    }

    if (filters.riskLevels.length > 0) {
      result = result.filter((student) =>
        filters.riskLevels.includes(student.risk.level)
      );
    }

    if (sort.field) {
      result.sort((a, b) => {
        let aValue: any;
        let bValue: any;

        switch (sort.field) {
          case "student":
            aValue = a.student.name.toLowerCase();
            bValue = b.student.name.toLowerCase();
            break;
          case "property":
            aValue = a.property.name.toLowerCase();
            bValue = b.property.name.toLowerCase();
            break;
          case "risk":
            aValue = a.risk.score;
            bValue = b.risk.score;
            break;
          case "status":
            aValue = a.status;
            bValue = b.status;
            break;
          default:
            return 0;
        }

        if (aValue < bValue) {
          return sort.order === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sort.order === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [students, search, filters, sort]);

  const statusFilterItems = [
    {
      label: "Approved",
      checked: filters.status.includes("Approved"),
      onClick: () => toggleStatusFilter("Approved"),
    },
    {
      label: "In Review",
      checked: filters.status.includes("In Review"),
      onClick: () => toggleStatusFilter("In Review"),
    },
    {
      label: "Pending",
      checked: filters.status.includes("Pending"),
      onClick: () => toggleStatusFilter("Pending"),
    },
    {
      label: "Rejected",
      checked: filters.status.includes("Rejected"),
      onClick: () => toggleStatusFilter("Rejected"),
    },
  ];

  const riskFilterItems = [
    {
      label: "Low Risk",
      checked: filters.riskLevels.includes("low"),
      onClick: () => toggleRiskFilter("low"),
    },
    {
      label: "Medium Risk",
      checked: filters.riskLevels.includes("medium"),
      onClick: () => toggleRiskFilter("medium"),
    },
    {
      label: "High Risk",
      checked: filters.riskLevels.includes("high"),
      onClick: () => toggleRiskFilter("high"),
    },
  ];

  const handleRejectClick = (studentId: number) => {
    openRejectModal(studentId);
  };

  const handleRejectSubmit = async () => {
    await submitReject();
    closeActionModal();
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="w-full max-w-[320px]">
          <InputField
            className="pl-10! h-10!"
            label=""
            placeholder="Search by student or property..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
              setSearch((e.target as HTMLInputElement).value)
            }
            leftIconSrc="/images/search-icon.svg"
            id="search"
            name="search"
          />
        </div>

        <div className="flex gap-2">
          <Menu>
            <MenuButton className="px-3 py-2 bg-gray-50 border border-gray-1300 rounded-lg text-sm font-medium text-black-1200 flex items-center gap-2 hover:bg-gray-100 transition">
              <img src="/images/filter-icon.svg" alt="Filter" className="w-4 h-4" />
              Status
              {filters.status.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                  {filters.status.length}
                </span>
              )}
              <img src="/images/droparrow.svg" alt="" className="w-3 h-3" />
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="w-50 origin-top-right rounded-xl p-1 bg-white border space-y-1 border-gray-2100 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 z-10"
            >
              {statusFilterItems.map((item) => (
                <label
                  key={item.label}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-1200 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={item.onClick}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-black-1000">{item.label}</span>
                </label>
              ))}
            </MenuItems>
          </Menu>

          <Menu>
            <MenuButton className="px-3 py-2 bg-gray-50 border border-gray-1300 rounded-lg text-sm font-medium text-black-1200 flex items-center gap-2 hover:bg-gray-100 transition">
              <img src="/images/star.svg" alt="Risk" className="w-4 h-4" />
              AI Risk
              {filters.riskLevels.length > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                  {filters.riskLevels.length}
                </span>
              )}
              <img src="/images/droparrow.svg" alt="" className="w-3 h-3" />
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="w-50 origin-top-right rounded-xl p-1 bg-white border space-y-1 border-gray-2100 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 z-10"
            >
              {riskFilterItems.map((item) => (
                <label
                  key={item.label}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-1200 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={item.onClick}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-black-1000">{item.label}</span>
                </label>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </div>

  

      <div className="overflow-x-auto mt-5 font-inter rounded-lg border border-gray-1100">
        <table className="2xl:w-full w-[1365px] text-sm">
          <thead className="bg-lightgray text-gray-500">
            <tr>
              <th
                className="px-4 py-3 text-left font-medium cursor-pointer hover:text-gray-700"
                onClick={() => handleSort("student")}
              >
                <div className="flex items-center gap-2">
                  Student Name
                  <img
                    src="/images/sorting-icon.svg"
                    alt="Sort"
                    className={`w-4 h-4 transition ${
                      sort.field === "student" && sort.order === "desc"
                        ? "transform rotate-180"
                        : ""
                    }`}
                  />
                </div>
              </th>

              <th
                className="px-4 py-3 text-left font-medium cursor-pointer hover:text-gray-700"
                onClick={() => handleSort("property")}
              >
                <div className="flex items-center gap-2">
                  Property
                  <img
                    src="/images/sorting-icon.svg"
                    alt="Sort"
                    className={`w-4 h-4 transition ${
                      sort.field === "property" && sort.order === "desc"
                        ? "transform rotate-180"
                        : ""
                    }`}
                  />
                </div>
              </th>

              <th
                className="px-4 py-3 text-left font-medium cursor-pointer hover:text-gray-700"
                onClick={() => handleSort("risk")}
              >
                <div className="flex items-center gap-2">
                  AI Risk Score
                  <img
                    src="/images/sorting-icon.svg"
                    alt="Sort"
                    className={`w-4 h-4 transition ${
                      sort.field === "risk" && sort.order === "desc"
                        ? "transform rotate-180"
                        : ""
                    }`}
                  />
                </div>
              </th>

              <th
                className="px-4 py-3 text-left font-medium cursor-pointer hover:text-gray-700"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center gap-2">
                  Status
                  <img
                    src="/images/sorting-icon.svg"
                    alt="Sort"
                    className={`w-4 h-4 transition ${
                      sort.field === "status" && sort.order === "desc"
                        ? "transform rotate-180"
                        : ""
                    }`}
                  />
                </div>
              </th>

              <th className="px-4 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {filteredAndSearchedStudents.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                  No applications found matching your criteria
                </td>
              </tr>
            ) : (
              filteredAndSearchedStudents.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-1100 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">
                    <div className="font-medium text-black">{item.student.name}</div>
                    <div className="text-gray-1000 text-xs">{item.student.email}</div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="font-medium text-black">{item.property.name}</div>
                    <div className="text-gray-1000 text-xs">{item.property.address}</div>
                  </td>

                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium">
                      <div
                        className={`min-w-[34px] h-6 flex rounded-md items-center justify-center ${
                          riskStyles[item.risk.level as "low" | "medium" | "high"]
                        }`}
                      >
                        {item.risk.score}
                      </div>
                      <span className="capitalize text-gray-1000">
                        {item.risk.level} Risk
                      </span>
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-md text-xs font-medium ${
                        statusStyles[
                          item.status as "Approved" | "In Review" | "Pending" | "Rejected"
                        ]
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="pl-4 pr-16 py-3 text-right">
                    <Menu>
                      <MenuButton className="transition outline-0 duration-300 hover:bg-gray-1200 p-1 cursor-pointer">
                        <img src="/icons/option-icon-1.svg" alt="Options" />
                      </MenuButton>

                      <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-50 origin-top-right rounded-xl p-1 bg-white border space-y-1.5 border-gray-2100 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 z-10"
                      >
                        <MenuItem>
                          <Link
                            href={`/Applications/${item.id}`}
                            className="py-2.5 w-full rounded-xl px-3 flex transition duration-300 hover:bg-gray-1200 items-center gap-2 text-sm text-black-1000 font-medium"
                          >
                            <img src="/icons/eye-icon-2.svg" alt="" />
                            <span>View Details</span>
                          </Link>
                        </MenuItem>

                        {item.status !== "Rejected" && (
                          <MenuItem>
                            <button
                              onClick={() => openActionModal("documents", item)}
                              className="py-2.5 w-full rounded-xl px-3 flex transition duration-300 hover:bg-gray-1200 items-center gap-2 text-sm text-black-1000 font-medium"
                            >
                              <img src="/icons/file-icon-2.svg" alt="" />
                              <span>Documents</span>
                            </button>
                          </MenuItem>
                        )}

                        {item.status === "Rejected" && (
                          <MenuItem>
                            <button
                              onClick={() => openActionModal("documents", item)}
                              className="py-2.5 w-full rounded-xl px-3 flex transition duration-300 hover:bg-gray-1200 items-center gap-2 text-sm text-black-1000 font-medium"
                            >
                              <img src="/icons/file-icon-2.svg" alt="" />
                              <span>Rejection Reason</span>
                            </button>
                          </MenuItem>
                        )}

                        {item.status !== "Rejected" && item.status !== "Approved" && (
                          <MenuItem>
                            <button
                              onClick={() => openActionModal("request-docs", item)}
                              className="py-2.5 w-full rounded-xl px-3 flex transition duration-300 hover:bg-gray-1200 items-center gap-2 text-sm text-black-1000 font-medium"
                            >
                              <img src="/icons/file-text-icon-2.svg" alt="" />
                              <span>Request Docs</span>
                            </button>
                          </MenuItem>
                        )}

                        {item.status === "Approved" && (
                          <MenuItem>
                            <button
                              onClick={() => openActionModal("lease", item)}
                              className="py-2.5 w-full rounded-xl px-3 flex transition duration-300 hover:bg-gray-1200 items-center gap-2 text-sm text-black-1000 font-medium"
                            >
                              <img src="/icons/file-text-icon-2.svg" alt="" />
                              <span>Lease</span>
                            </button>
                          </MenuItem>
                        )}

                        {item.status !== "In Review" && item.status !== "Rejected" && (
                          <MenuItem>
                            <button
                              onClick={() => openActionModal("message", item)}
                              className="py-2.5 w-full rounded-xl px-3 flex transition duration-300 hover:bg-gray-1200 items-center gap-2 text-sm text-black-1000 font-medium"
                            >
                              <img src="/icons/message-icon-2.svg" alt="" />
                              <span>Message</span>
                            </button>
                          </MenuItem>
                        )}

                        {item.status === "In Review" && (
                          <MenuItem>
                            <button
                              onClick={() => handleRejectClick(item.id)}
                              className="py-2.5 w-full rounded-xl px-3 flex transition duration-300 hover:bg-red-1000/10 items-center gap-2 text-sm text-red-1400 font-medium"
                            >
                              <img src="/icons/disable-icon-2.svg" alt="" />
                              <span>Reject</span>
                            </button>
                          </MenuItem>
                        )}
                      </MenuItems>
                    </Menu>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
          <div className="mt-4 text-sm text-gray-600">
        Showing {filteredAndSearchedStudents.length} of {students.length} applications
      </div>

      {actionModal.isOpen && actionModal.student && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-black-1200">
                {actionModal.student.student.name}
              </h3>
              <button
                onClick={closeActionModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ✕
              </button>
            </div>


            {actionModal.type === "documents" && (
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm font-medium text-black-1200">ID Verification.pdf</p>
                  <p className="text-xs text-gray-600 mt-1">Uploaded 3 days ago</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm font-medium text-black-1200">Proof of Income.pdf</p>
                  <p className="text-xs text-gray-600 mt-1">Uploaded 2 days ago</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm font-medium text-black-1200">References.pdf</p>
                  <p className="text-xs text-gray-600 mt-1">Uploaded 1 day ago</p>
                </div>
              </div>
            )}

            {actionModal.type === "request-docs" && (
              <div className="space-y-3">
                <p className="text-sm text-gray-700">
                  Select documents to request from the applicant:
                </p>
                <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">ID Verification</span>
                </label>
                <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">Proof of Income</span>
                </label>
                <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">Bank Statements</span>
                </label>
                <label className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">References</span>
                </label>
              </div>
            )}

            {actionModal.type === "lease" && (
              <div className="space-y-3">
                <p className="text-sm text-gray-700">Lease Agreement Ready</p>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-700 font-medium mb-2">
                    Lease Agreement - {actionModal.student.property.name}
                  </p>
                  <p className="text-xs text-blue-600">
                    Ready for signature. Click below to send to applicant.
                  </p>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Send Lease to Applicant
                </button>
              </div>
            )}

            {actionModal.type === "message" && (
              <div className="space-y-3">
                <textarea
                  placeholder="Type your message..."
                  className="w-full p-3 border border-gray-1300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  rows={4}
                />
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Send Message
                </button>
              </div>
            )}

            <div className="mt-6 flex gap-2">
              <button
                onClick={closeActionModal}
                className="flex-1 px-4 py-2 border border-gray-1300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {rejectReason.isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-lg font-bold text-black-1200 mb-4">
              Reject Application
            </h3>

            <p className="text-sm text-gray-700 mb-3">
              Please provide a reason for rejection:
            </p>

            <textarea
              value={rejectReason.reason}
              onChange={(e) =>
                useApplicationStore.setState({
                  rejectReason: {
                    ...rejectReason,
                    reason: e.target.value,
                  },
                })
              }
              placeholder="Enter rejection reason..."
              className="w-full p-3 border border-gray-1300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 mb-4"
              rows={4}
            />

            <div className="flex gap-3">
              <button
                onClick={closeRejectModal}
                disabled={rejectReason.isLoading}
                className="flex-1 px-4 py-2 border border-gray-1300 text-gray-700 rounded-lg hover:bg-gray-50 transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleRejectSubmit}
                disabled={!rejectReason.reason.trim() || rejectReason.isLoading}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {rejectReason.isLoading ? "Rejecting..." : "Reject"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplicationTable;