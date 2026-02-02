"use client";

import { useState } from "react";
import PrimaryLink from "@/app/ui/PrimaryLink";
import InputField from "@/app/ui/InputField";
import ToggleSwitch from "@/app/ui/ToggleSwitch";

interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface FormErrors {
  [key: string]: string;
}

interface SecuritySettings {
  twoFactorAuth: boolean;
  loginAlerts: boolean;
}

interface SubmissionState {
  type: "idle" | "success" | "error";
  message: string;
}

export default function SecuritySettings() {
  const [passwordForm, setPasswordForm] = useState<PasswordFormData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [securitySettings, setSecuritySettings] = useState<SecuritySettings>({
    twoFactorAuth: false,
    loginAlerts: false,
  });

  const [passwordErrors, setPasswordErrors] = useState<FormErrors>({});
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);
  const [passwordSubmission, setPasswordSubmission] = useState<SubmissionState>({
    type: "idle",
    message: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [twoFactorLoading, setTwoFactorLoading] = useState(false);
  const [loginAlertsLoading, setLoginAlertsLoading] = useState(false);

  const validatePassword = (password: string): string[] => {
    const errors: string[] = [];

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }

    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    }

    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number");
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      errors.push("Password must contain at least one special character");
    }

    return errors;
  };

  const validatePasswordForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!passwordForm.currentPassword.trim()) {
      newErrors.currentPassword = "Current password is required";
    }

    if (!passwordForm.newPassword.trim()) {
      newErrors.newPassword = "New password is required";
    } else {
      const passwordErrors = validatePassword(passwordForm.newPassword);
      if (passwordErrors.length > 0) {
        newErrors.newPassword = passwordErrors[0]; 
      }
    }

    if (!passwordForm.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your new password";
    } else if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (
      passwordForm.currentPassword &&
      passwordForm.newPassword &&
      passwordForm.currentPassword === passwordForm.newPassword
    ) {
      newErrors.newPassword =
        "New password must be different from current password";
    }

    setPasswordErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (passwordErrors[name]) {
      setPasswordErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordSubmission({ type: "idle", message: "" });

    if (!validatePasswordForm()) {
      return;
    }

    setIsPasswordLoading(true);

    try {

      setPasswordSubmission({
        type: "success",
        message: "Password updated successfully",
      });

      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        setPasswordSubmission({ type: "idle", message: "" });
      }, 3000);
    } catch (error) {
      setPasswordSubmission({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to update password. Please try again.",
      });
    } finally {
      setIsPasswordLoading(false);
    }
  };

  const handleTwoFactorToggle = async () => {
    setTwoFactorLoading(true);

    try {

      setSecuritySettings((prev) => ({
        ...prev,
        twoFactorAuth: !prev.twoFactorAuth,
      }));
    } catch (error) {
      console.error("Error updating 2FA:", error);
    } finally {
      setTwoFactorLoading(false);
    }
  };

  const handleLoginAlertsToggle = async () => {
    setLoginAlertsLoading(true);

    try {

      setSecuritySettings((prev) => ({
        ...prev,
        loginAlerts: !prev.loginAlerts,
      }));
    } catch (error) {
      console.error("Error updating login alerts:", error);
    } finally {
      setLoginAlertsLoading(false);
    }
  };

  const getPasswordStrength = (password: string): {
    score: number;
    label: string;
    color: string;
  } => {
    if (!password) return { score: 0, label: "", color: "" };

    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) score++;

    let label = "";
    let color = "";

    if (score <= 2) {
      label = "Weak";
      color = "text-red-600";
    } else if (score <= 4) {
      label = "Fair";
      color = "text-yellow-600";
    } else {
      label = "Strong";
      color = "text-green-600";
    }

    return { score, label, color };
  };

  const passwordStrength = getPasswordStrength(passwordForm.newPassword);
  const isPasswordFormValid =
    passwordForm.currentPassword &&
    passwordForm.newPassword &&
    passwordForm.confirmPassword &&
    Object.keys(passwordErrors).length === 0;

  return (
    <div className="2xl:w-[calc(100%_-_398px)] lg:w-[calc(100%_-_298px)] ml-auto">
      <div className="max-w-[830px]">
        <div className="flex lg:mt-0 mt-5 items-center gap-3">
          <div className="bg-black-1300/[10%] w-9 h-9 rounded-[10px] flex items-center justify-center">
            <img src="/images/shield-icon3.svg" alt="Security" />
          </div>
          <div>
            <h4 className="text-2xl font-bold leading-8 text-black-1200">
              Security
            </h4>
            <p className="text-base font-normal font-inter leading-6 text-gray-1400">
              Protect your account
            </p>
          </div>
        </div>

        <div className="bg-white mt-6 border border-gray-1100 rounded-xl shadow-7xl 2xl:px-5 px-3 2xl:py-6 py-4">
          <div>
            <p className="text-sm font-normal font-inter leading-6 text-gray-1400">
              Password
            </p>

            <form onSubmit={handlePasswordSubmit} className="mt-3 space-y-5">
              {passwordSubmission.type !== "idle" && (
                <div
                  className={`p-3 rounded-lg ${
                    passwordSubmission.type === "success"
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <p
                    className={`text-sm ${
                      passwordSubmission.type === "success"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {passwordSubmission.message}
                  </p>
                </div>
              )}

              <div>
                <InputField
                  label="Current Password"
                  placeholder="Enter your current password"
                  type={showPasswords.current ? "text" : "password"}
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                  id="currentPassword"
                  name="currentPassword"
                  variant="filled2"
                />
                {passwordErrors.currentPassword && (
                  <p className="text-red-600 text-xs mt-1">
                    {passwordErrors.currentPassword}
                  </p>
                )}
              </div>

              <div>
                <InputField
                  label="New Password"
                  placeholder="Enter your new password"
                  type={showPasswords.new ? "text" : "password"}
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                  id="newPassword"
                  name="newPassword"
                  variant="filled2"
                />
                {passwordForm.newPassword && (
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-gray-200 rounded">
                        <div
                          className={`h-full rounded transition-all ${
                            passwordStrength.score <= 2
                              ? "w-1/3 bg-red-500"
                              : passwordStrength.score <= 4
                              ? "w-2/3 bg-yellow-500"
                              : "w-full bg-green-500"
                          }`}
                        />
                      </div>
                      <span className={`text-xs font-medium ${passwordStrength.color}`}>
                        {passwordStrength.label}
                      </span>
                    </div>
                    <ul className="text-xs text-gray-600 space-y-0.5">
                      <li className={validatePassword(passwordForm.newPassword).length === 0 ? "text-green-600" : ""}>
                        ✓ Min 8 characters
                      </li>
                      <li className={/[A-Z]/.test(passwordForm.newPassword) ? "text-green-600" : ""}>
                        ✓ At least 1 uppercase letter
                      </li>
                      <li className={/[a-z]/.test(passwordForm.newPassword) ? "text-green-600" : ""}>
                        ✓ At least 1 lowercase letter
                      </li>
                      <li className={/[0-9]/.test(passwordForm.newPassword) ? "text-green-600" : ""}>
                        ✓ At least 1 number
                      </li>
                      <li className={/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordForm.newPassword) ? "text-green-600" : ""}>
                        ✓ At least 1 special character
                      </li>
                    </ul>
                  </div>
                )}
                {passwordErrors.newPassword && (
                  <p className="text-red-600 text-xs mt-1">
                    {passwordErrors.newPassword}
                  </p>
                )}
              </div>

              <div>
                <InputField
                  label="Confirm New Password"
                  placeholder="Confirm your new password"
                  type={showPasswords.confirm ? "text" : "password"}
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordChange}
                  id="confirmPassword"
                  name="confirmPassword"
                  variant="filled2"
                />
                {passwordForm.confirmPassword &&
                  passwordForm.newPassword === passwordForm.confirmPassword && (
                    <p className="text-green-600 text-xs mt-1">✓ Passwords match</p>
                  )}
                {passwordErrors.confirmPassword && (
                  <p className="text-red-600 text-xs mt-1">
                    {passwordErrors.confirmPassword}
                  </p>
                )}
              </div>
          <div className="w-full">

              <div className="py-6 border-t border-gray-1300 flex items-center justify-between">
                <div>
                  <h6 className="text-base font-inter leading-6 text-black-1000">
                    Two-Factor Authentication
                  </h6>
                  <span className="block text-sm font-inter font-normal leading-5 text-gray-1400">
                    Add an extra layer of security
                  </span>
                </div>
                <ToggleSwitch
                  enabled={securitySettings.twoFactorAuth}
                  setEnabled={handleTwoFactorToggle}
                />
              </div>


              {/* Login Alerts Section */}
              <div className="py-6 border-t border-gray-1300 flex items-center justify-between">
                <div>
                  <h6 className="text-base font-inter leading-6 text-black-1000">
                    Login Alerts
                  </h6>
                  <span className="block text-sm font-inter font-normal leading-5 text-gray-1400">
                    Get notified of new logins
                  </span>
                </div>
                <ToggleSwitch
                  enabled={securitySettings.loginAlerts}
                  setEnabled={handleLoginAlertsToggle}
                />
              </div>
          </div>


       

              <div className="w-fit ml-auto min-w-[127px] pt-4">
             <PrimaryLink
                    onClick={() => {
                    if (!isPasswordFormValid || isPasswordLoading) return;
                    }}
                    disabled={!isPasswordFormValid || isPasswordLoading}
                    className={`!py-2.5 ${
                    !isPasswordFormValid || isPasswordLoading
                         ? "opacity-50 cursor-not-allowed"
                         : ""
                    }`}
                    variant="primary"
                    >
                    {isPasswordLoading ? "Updating..." : "Update Password"}
                    </PrimaryLink>

              </div>
            </form>
          </div>
        </div>

       
      </div>
    </div>
  );
}