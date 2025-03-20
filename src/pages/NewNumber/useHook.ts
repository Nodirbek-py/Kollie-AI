import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  country: number;
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

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return { register, handleSubmit, watch, errors, onSubmit };
};
