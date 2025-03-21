import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { useStore } from "../../store";
import { useEffect } from "react";

type Inputs = {
  identityType: "business" | "individual";
};

export const useHook = () => {
  const navigate = useNavigate();
  const form = useStore((state) => state.form);
  useEffect(() => {
    if (form.first.type === "") {
      navigate("/new-number");
    }
  }, [form, navigate]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const updateForm = useStore((state) => state.updateForm);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data) {
      updateForm({ second: data });
      navigate("/new-number/ris-form");
    }
  };

  return { register, handleSubmit, watch, errors, onSubmit };
};
