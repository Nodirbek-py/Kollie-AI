import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import { useStore } from "../../store";

type Inputs = {
  companyName: string;
  companyRegisterNumber: string;
  country: string;
  city: string;
  zip: string;
  strName: string;
  strNumber: number;
  docType: "utility" | "bank" | "other";
  doc: File | null | FileList;
};

export const useHook = () => {
  const form = useStore((state) => state.form);
  const navigate = useNavigate();

  useEffect(() => {
    if (form.first.type === "") {
      navigate("/new-number");
    } else if (form.second.identityType === "") {
      navigate("/new-number/identity-type");
    }
  }, [form, navigate]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>();

  const updateForm = useStore((state) => state.updateForm);

  const sendForm = async () => {
    // const response = await fetch("https://api.example.com", {
    //   method: "POST",
    //   body: JSON.stringify(useStore.getState().form),
    // });

    console.log(useStore.getState().form);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data) {
      updateForm({ third: data });
      sendForm();
    }
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
    setValue,
    getValues,
  };
};
