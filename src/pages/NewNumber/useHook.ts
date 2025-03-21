import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { useStore } from "../../store";

type Inputs = {
  countryCode: number;
  number: number;
  type: "local" | "national" | "mobile";
};

export const useHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const updateForm = useStore((state) => state.updateForm);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateForm({ first: data });
    navigate("/new-number/identity-type");
  };

  return { register, handleSubmit, watch, errors, onSubmit };
};
