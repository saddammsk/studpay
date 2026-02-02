/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileState {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    profilePhoto: string | null;
  };
  loading: boolean;
  error: string | null;
  success: boolean;
  successMessage: string | null;
}

const initialState: ProfileState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profilePhoto: '/images/profile-img.png',
  },
  loading: false,
  error: null,
  success: false,
  successMessage: null,
};

export const fetchUserProfile = createAsyncThunk(
  'profile/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/profile');
      if (!response.ok) throw new Error('Failed to fetch profile');
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch profile');
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'profile/updateUserProfile',
  async (profileData: any, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) throw new Error('Failed to update profile');
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to update profile');
    }
  }
);

export const uploadProfilePhoto = createAsyncThunk(
  'profile/uploadProfilePhoto',
  async (file: File, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/profile/photo', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to upload photo');
      const data = await response.json();
      return data.photoUrl;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to upload photo');
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.user.firstName = action.payload;
      state.success = false;
      state.error = null;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.user.lastName = action.payload;
      state.success = false;
      state.error = null;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
      state.success = false;
      state.error = null;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.user.phone = action.payload;
      state.success = false;
      state.error = null;
    },
    clearMessages: (state) => {
      state.success = false;
      state.error = null;
      state.successMessage = null;
    },
    resetForm: (state) => {
      state.user = initialState.user;
      state.error = null;
      state.success = false;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
        state.successMessage = 'Profile updated successfully!';
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.success = false;
      });

    builder
      .addCase(uploadProfilePhoto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadProfilePhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.user.profilePhoto = action.payload;
        state.success = true;
        state.successMessage = 'Photo uploaded successfully!';
      })
      .addCase(uploadProfilePhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.success = false;
      });
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  clearMessages,
  resetForm,
} = profileSlice.actions;

export default profileSlice.reducer;