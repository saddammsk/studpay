import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchUsers } from "@/store/slices/userSlice";

type User = {
  id: string;
  name: string;
  currency: string;
  dashboard?: {
    financialOverview?: {
      walletBalance?: number;
    };
  };
  personalInformation?: {
    profilePicture?: string;
  };
};

export const useUser = (userId: string) => {
  const dispatch = useAppDispatch();
  type UsersState = { users: User[]; loading: boolean; error: unknown };
  const { users, loading, error } = useAppSelector((state: { users: UsersState }) => state.users);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  const user = users.find(u => u.id === userId);

const balance =
    user?.dashboard?.financialOverview?.walletBalance !== undefined && user?.dashboard?.financialOverview?.walletBalance
        ? user.dashboard.financialOverview.walletBalance.toLocaleString("en-US", {
                style: "currency",
                currency: user.currency,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            })
        : null;

 const hasProfilePicture = !!user?.personalInformation?.profilePicture;
  const avatarUrl = hasProfilePicture
    ? user!.personalInformation!.profilePicture!
    : "/images/default-user.png";
  const initials =
    !hasProfilePicture && user?.name
      ? user.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : null;

  return { user, balance, avatarUrl, initials, hasProfilePicture, loading, error };
};
