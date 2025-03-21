import { useHook } from "./useHook";
import Radio from "../../components/Radio";

export default function Identity() {
  const { register, handleSubmit, errors, onSubmit } = useHook();
  return (
    <div>
      <div className="h-32 flex flex-col justify-center max-h-32 border-b-neutral-200 border-b px-8">
        <h2 className="text-neutral-950 text-3xl font-bold">
          Select your identity type
        </h2>
        <p className="text-neutral-950">
          Information will be used to purchase and register the number on your
          behalf
        </p>
      </div>
      <div className="p-8">
        <form
          className="mx-auto max-w-md shadow-lg rounded-xl p-4 bg-neutral-100"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-xs leading-8 py-2 px-4 bg-slate-100 rounded-2xl mb-2">
            If you want this service for your business, please select{" "}
            <span className="py-1 px-2 bg-neutral-900 text-white rounded-full">
              Business
            </span>{" "}
            If you want this service for yourself, please select{" "}
            <span className="py-1 px-2 bg-neutral-900 text-white rounded-full">
              Individual
            </span>
          </div>
          <Radio
            label="Identity Type"
            name="identityType"
            options={[
              { value: "business", label: "Business" },
              { value: "individual", label: "Individual" },
            ]}
            register={register}
            error={errors.identityType}
            errorMsg="Please select a identity type"
          />
          <input
            disabled={Object.keys(errors).length > 0}
            type="submit"
            value="Next Step"
            className="text-black block text-center bg-neutral-300 disabled:bg-neutral-200 disabled:hover:text-black disabled:cursor-not-allowed hover:bg-neutral-800 hover:text-white ml-auto transition-colors duration-300 outline-none font-medium rounded-lg text-sm px-5 py-2.5"
          />
        </form>
      </div>
    </div>
  );
}
