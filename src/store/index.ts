import { create } from "zustand";

type FormSteps = {
  first: {
    countryCode: number | null;
    number: number | null;
    type: string;
  };
  second: {
    identityType: string;
  };
  third: {
    companyName: string;
    companyRegisterNumber: string;
    country: string;
    city: string;
    zip: string;
    strName: string;
    strNumber: number | null;
    docType: string;
    doc: File | null | FileList;
  };
};

type StoreType = {
  form: FormSteps;
};

type ActionType = {
  resetForm: () => void;
  updateForm: (updatedFields: Partial<FormSteps>) => void;
};

const initialFormState: FormSteps = {
  first: {
    countryCode: null,
    number: null,
    type: "",
  },
  second: {
    identityType: "",
  },
  third: {
    companyName: "",
    companyRegisterNumber: "",
    country: "",
    city: "",
    zip: "",
    strName: "",
    strNumber: null,
    docType: "",
    doc: null,
  },
};

const useStore = create<StoreType & ActionType>((set) => ({
  form: { ...initialFormState },

  resetForm: () => set({ form: { ...initialFormState } }),

  updateForm: (updatedFields) =>
    set((state) => ({
      form: {
        ...state.form,
        ...updatedFields,
      },
    })),
}));

export { useStore };
