import { create } from 'zustand'

type RiskLevel = 'low' | 'medium' | 'high'
type StatusType = 'Approved' | 'In Review' | 'Pending' | 'Rejected'
type SortField = 'student' | 'property' | 'risk' | 'status'
type SortOrder = 'asc' | 'desc'

interface StudentRow {
  id: number
  student: { name: string; email: string }
  property: { name: string; address: string }
  risk: { score: number; level: RiskLevel }
  status: StatusType
}

interface TableFilters {
  status: StatusType[]
  riskLevels: RiskLevel[]
}

interface SortState {
  field: SortField | null
  order: SortOrder
}

interface ActionModalState {
  isOpen: boolean
  type: 'view' | 'documents' | 'request-docs' | 'lease' | 'message' | 'reject' | null
  student: StudentRow | null
}

interface RejectReasonState {
  isOpen: boolean
  studentId: number | null
  reason: string
  isLoading: boolean
}

interface ApplicationStore {
  students: StudentRow[]
  search: string
  filters: TableFilters
  sort: SortState
  actionModal: ActionModalState
  rejectReason: RejectReasonState

  setSearch: (value: string) => void
  toggleStatusFilter: (status: StatusType) => void
  toggleRiskFilter: (level: RiskLevel) => void
  handleSort: (field: SortField) => void

  openActionModal: (type: ActionModalState['type'], student: StudentRow) => void
  closeActionModal: () => void

  openRejectModal: (studentId: number) => void
  closeRejectModal: () => void
  submitReject: () => Promise<void>
}

export const useApplicationStore = create<ApplicationStore>((set, get) => ({
  students: [],
  search: '',
  filters: { status: [], riskLevels: [] },
  sort: { field: null, order: 'asc' },

  actionModal: { isOpen: false, type: null, student: null },
  rejectReason: { isOpen: false, studentId: null, reason: '', isLoading: false },

  setSearch: (value) => set({ search: value }),

  toggleStatusFilter: (status) =>
    set((state) => ({
      filters: {
        ...state.filters,
        status: state.filters.status.includes(status)
          ? state.filters.status.filter((s) => s !== status)
          : [...state.filters.status, status],
      },
    })),

  toggleRiskFilter: (level) =>
    set((state) => ({
      filters: {
        ...state.filters,
        riskLevels: state.filters.riskLevels.includes(level)
          ? state.filters.riskLevels.filter((l) => l !== level)
          : [...state.filters.riskLevels, level],
      },
    })),

  handleSort: (field) =>
    set((state) => ({
      sort:
        state.sort.field === field
          ? { field, order: state.sort.order === 'asc' ? 'desc' : 'asc' }
          : { field, order: 'asc' },
    })),

  openActionModal: (type, student) =>
    set({ actionModal: { isOpen: true, type, student } }),

  closeActionModal: () =>
    set({ actionModal: { isOpen: false, type: null, student: null } }),

  openRejectModal: (studentId) =>
    set((state) => ({
      rejectReason: { ...state.rejectReason, isOpen: true, studentId },
    })),

  closeRejectModal: () =>
    set({
      rejectReason: { isOpen: false, studentId: null, reason: '', isLoading: false },
    }),

  submitReject: async () => {
    const { rejectReason, students } = get()
    if (!rejectReason.studentId || !rejectReason.reason.trim()) return

    set((state) => ({
      rejectReason: { ...state.rejectReason, isLoading: true },
    }))

    await new Promise((r) => setTimeout(r, 800))

    set({
      students: students.map((s) =>
        s.id === rejectReason.studentId ? { ...s, status: 'Rejected' } : s
      ),
      rejectReason: { isOpen: false, studentId: null, reason: '', isLoading: false },
    })
  },
}))
