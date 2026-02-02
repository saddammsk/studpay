"use client";

import PrimaryLink from "@/app/ui/PrimaryLink";
import DropdownMenu from "@/app/ui/DropdownMenu";
import Link from "next/link";
import { useState } from "react";
import InputField from "@/app/ui/InputField";

type DropdownItem = {
  label: string;
  value: string;
  separator?: boolean;
};

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Owner" | "Viewer";
  avatar: string;
  joinedDate: string;
  isCurrentUser: boolean;
}

interface InviteModalState {
  isOpen: boolean;
  email: string;
  role: string;
  errors: { [key: string]: string };
  isLoading: boolean;
  message: { type: "success" | "error" | "idle"; text: string };
}

interface RemoveConfirmState {
  isOpen: boolean;
  memberId: string | null;
  memberName: string;
  isLoading: boolean;
}

const roleMenuItems: DropdownItem[] = [
  { label: "Admin", value: "Admin" },
  { label: "Owner", value: "Owner" },
  { label: "Viewer", value: "Viewer" },
];

const rolePermissions: { [key: string]: string[] } = {
  Admin: [
    "Full access to all features",
    "Manage team members",
    "Change member roles",
    "View reports and analytics",
  ],
  Owner: [
    "Full access to all features",
    "Manage team members",
    "View reports and analytics",
  ],
  Viewer: ["View-only access", "Cannot make changes or remove members"],
};

export default function TeamAndAccess() {
  const [members, setMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "John Smith",
      email: "john@example.com",
      role: "Admin",
      avatar: "/images/user-img.png",
      joinedDate: "2024-01-15",
      isCurrentUser: true,
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Owner",
      avatar: "/images/user-img.png",
      joinedDate: "2024-02-20",
      isCurrentUser: false,
    },
    {
      id: "3",
      name: "Mike Davis",
      email: "mike@example.com",
      role: "Viewer",
      avatar: "/images/user-img.png",
      joinedDate: "2024-03-10",
      isCurrentUser: false,
    },
  ]);

  const [inviteModal, setInviteModal] = useState<InviteModalState>({
    isOpen: false,
    email: "",
    role: "Viewer",
    errors: {},
    isLoading: false,
    message: { type: "idle", text: "" },
  });

  const [removeConfirm, setRemoveConfirm] = useState<RemoveConfirmState>({
    isOpen: false,
    memberId: null,
    memberName: "",
    isLoading: false,
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateInviteForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (!inviteModal.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(inviteModal.email)) {
      errors.email = "Please enter a valid email address";
    } else if (
      members.some(
        (m) => m.email.toLowerCase() === inviteModal.email.toLowerCase()
      )
    ) {
      errors.email = "This member is already in the team";
    }

    if (!inviteModal.role) {
      errors.role = "Role is required";
    }

    setInviteModal((prev) => ({
      ...prev,
      errors,
    }));

    return Object.keys(errors).length === 0;
  };

  const handleInviteMember = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateInviteForm()) {
      return;
    }

    setInviteModal((prev) => ({
      ...prev,
      isLoading: true,
      message: { type: "idle", text: "" },
    }));

    try {
   

      setInviteModal((prev) => ({
        ...prev,
        message: {
          type: "success",
          text: `Invitation sent to ${inviteModal.email}`,
        },
        email: "",
        role: "Viewer",
        errors: {},
      }));

      setTimeout(() => {
        setInviteModal((prev) => ({
          ...prev,
          message: { type: "idle", text: "" },
        }));
      }, 3000);
    } catch (error) {
      setInviteModal((prev) => ({
        ...prev,
        message: {
          type: "error",
          text:
            error instanceof Error ? error.message : "Failed to send invitation",
        },
      }));
    } finally {
      setInviteModal((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  const handleRoleChange = async (memberId: string, newRole: string) => {
    const member = members.find((m) => m.id === memberId);
    if (!member) return;

    try {
   

      setMembers((prev) =>
        prev.map((m) =>
          m.id === memberId ? { ...m, role: newRole as TeamMember["role"] } : m
        )
      );
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  const handleRemoveClick = (memberId: string, memberName: string) => {
    setRemoveConfirm({
      isOpen: true,
      memberId,
      memberName,
      isLoading: false,
    });
  };

  const handleConfirmRemove = async () => {
    if (!removeConfirm.memberId) return;

    setRemoveConfirm((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
    

      setMembers((prev) =>
        prev.filter((m) => m.id !== removeConfirm.memberId)
      );

      setRemoveConfirm({
        isOpen: false,
        memberId: null,
        memberName: "",
        isLoading: false,
      });
    } catch (error) {
      console.error("Error removing member:", error);
    } finally {
      setRemoveConfirm((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  const isOwnerOrAdmin = members.some(
    (m) => m.isCurrentUser && (m.role === "Owner" || m.role === "Admin")
  );

  return (
    <div className="2xl:w-[calc(100%_-_398px)] lg:w-[calc(100%_-_298px)] ml-auto">
      <div className="max-w-[830px]">
        <div className="flex lg:mt-0 mt-5 items-center gap-3">
          <div className="bg-black-1300/[10%] w-9 h-9 rounded-[10px] flex items-center justify-center">
            <img src="/images/user-icon.svg" alt="Team" />
          </div>
          <div>
            <h4 className="text-2xl font-bold leading-8 text-black-1200">
              Team & Access
            </h4>
            <p className="text-base font-normal font-inter leading-6 text-gray-1400">
              Manage team members and permissions
            </p>
          </div>
        </div>

        <div className="bg-white mt-6 border border-gray-1100 rounded-xl shadow-7xl 2xl:p-6 p-4">
          <div className="flex items-center justify-between">
            <div>
            
            </div>
            {isOwnerOrAdmin && (
              <div className="w-fit min-w-[120px]">
                <button
                  onClick={() =>
                    setInviteModal((prev) => ({
                      ...prev,
                      isOpen: true,
                    }))
                  }
                  className="w-full px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  Invite Member
                </button>
              </div>
            )}
          </div>

          <div className="mt-6 space-y-3">
            {members.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No team members yet</p>
              </div>
            ) : (
              members.map((member) => (
                <div
                  key={member.id}
                  className="border border-gray-1300 bg-gray-1700/[20%] rounded-[10px] flex items-center justify-between gap-5 p-4 hover:bg-gray-1700/[30%] transition"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <img
                      src={member.avatar}
                      className="w-10 h-10 rounded-full object-cover"
                      alt={member.name}
                    />
                    <div className="flex-1">
                      <h6 className="text-base font-normal font-inter leading-6 text-black-1200">
                        {member.name}
                        {member.isCurrentUser && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                            You
                          </span>
                        )}
                      </h6>
                      <span className="block text-sm font-normal leading-5 font-inter text-gray-1400">
                        {member.email}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <DropdownMenu
                      label={member.role}
                      items={roleMenuItems}
                      selectedValue={member.role}
                      onSelect={(newRole) =>
                        handleRoleChange(member.id, newRole)
                      }
                    />

                    {!member.isCurrentUser && isOwnerOrAdmin && (
                      <button
                        onClick={() =>
                          handleRemoveClick(member.id, member.name)
                        }
                        className="text-sm cursor-pointer font-normal leading-5 text-red-1000 hover:text-red-700 hover:bg-red-50 py-2 px-3 rounded transition"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          
        </div>

        {inviteModal.isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-black-1200">
                  Invite Team Member
                </h3>
                <button
                  onClick={() =>
                    setInviteModal((prev) => ({
                      ...prev,
                      isOpen: false,
                      email: "",
                      role: "Viewer",
                      errors: {},
                      message: { type: "idle", text: "" },
                    }))
                  }
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              {inviteModal.message.type !== "idle" && (
                <div
                  className={`p-3 rounded-lg mb-4 ${
                    inviteModal.message.type === "success"
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <p
                    className={`text-sm ${
                      inviteModal.message.type === "success"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {inviteModal.message.text}
                  </p>
                </div>
              )}

              <form onSubmit={handleInviteMember} className="space-y-5">
                <div>
                
                  <InputField
                  label="Email"
                    type="email"
                    value={inviteModal.email}
                    onChange={(e) => {
                      setInviteModal((prev) => ({
                        ...prev,
                        email: e.target.value,
                        errors: { ...prev.errors, email: "" },
                      }));
                    }}
                    placeholder="member@example.com"
                    className="h-10!"
                 
                  />
                  {inviteModal.errors.email && (
                    <p className="text-red-600 text-xs mt-1">
                      {inviteModal.errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-black-1200 mb-1">
                    Role
                  </label>
                  <select
                    value={inviteModal.role}
                    onChange={(e) => {
                      setInviteModal((prev) => ({
                        ...prev,
                        role: e.target.value,
                      }));
                    }}
                    className="w-full px-3 py-2 border border-gray-1300 transition duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-1000"
                  >
                    <option value="Viewer">Viewer</option>
                    <option value="Owner">Owner</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>


                <div className="flex items-center justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() =>
                      setInviteModal((prev) => ({
                        ...prev,
                        isOpen: false,
                        email: "",
                        role: "Viewer",
                        errors: {},
                        message: { type: "idle", text: "" },
                      }))
                    }
                    className="px-4 py-2 h-10 text-sm cursor-pointer border border-gray-1300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={inviteModal.isLoading}
                    className="px-4 py-2 h-10 cursor-pointer bg-blue-1100 text-sm text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {inviteModal.isLoading ? "Sending..." : "Send Invite"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {removeConfirm.isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6">
              <h3 className="text-lg font-bold text-black-1200 mb-2">
                Remove Team Member
              </h3>
              <p className="text-gray-1000 text-sm mb-4">
                Are you sure you want to remove this member? Access will be revoked immediately.
              </p>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() =>
                    setRemoveConfirm({
                      isOpen: false,
                      memberId: null,
                      memberName: "",
                      isLoading: false,
                    })
                  }
                  disabled={removeConfirm.isLoading}
                  className="px-4 py-2 border border-gray-1300 h-10 cursor-pointer text-gray-700 rounded-xl hover:bg-gray-50 transition disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmRemove}
                  disabled={removeConfirm.isLoading}
                  className="px-4 py-2 bg-red-1100 cursor-pointer h-10 text-white rounded-xl hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {removeConfirm.isLoading ? "Removing..." : "Remove"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}