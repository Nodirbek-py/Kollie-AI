import { useHook } from "./useHook";
import { useStore } from "../../store";
import Input from "../../components/Input";
import Radio from "../../components/Radio";

export default function RIS() {
  const { register, handleSubmit, errors, onSubmit, watch } = useHook();
  const secondStep = useStore((state) => state.form.second);
  const file = watch("doc");
  return (
    <div>
      <div className="h-32 flex flex-col justify-center max-h-32 border-b-neutral-200 border-b px-8">
        <h2 className="text-neutral-950 text-3xl font-bold">
          Complete the RIS
        </h2>
        <p className="text-neutral-950">
          Please upload the necessary documents.
        </p>
      </div>
      <div className="p-8">
        <form
          className="mx-auto max-w-md shadow-lg rounded-xl p-4 bg-neutral-100"
          onSubmit={handleSubmit(onSubmit)}
        >
          {secondStep.identityType === "business" && (
            <div className="border-b border-b-neutral-300 mb-4">
              <Input
                label="Company Name"
                register={register}
                error={errors.companyName}
                name="companyName"
                errorMsg="Please give a company name"
              />
              <Input
                label="Company Register Number"
                register={register}
                error={errors.companyRegisterNumber}
                name="companyRegisterNumber"
                errorMsg="Please give a company register number"
              />
            </div>
          )}
          <h2 className="text-xl font-semibold">
            Address of{" "}
            {secondStep.identityType === "business" ? "your business" : "yours"}
          </h2>
          <Input
            label="Country"
            register={register}
            error={errors.country}
            name="country"
            errorMsg="Please give your country name"
          />
          <Input
            label="City"
            register={register}
            error={errors.city}
            name="city"
            errorMsg="Please give your city name"
          />
          <Input
            label="ZIP Code"
            register={register}
            error={errors.zip}
            name="zip"
            errorMsg="Please give your ZIP code"
          />
          <Input
            label="Street Name"
            register={register}
            error={errors.strName}
            name="strName"
            errorMsg="Please give your street name"
          />
          <Input
            label="Street Number"
            register={register}
            error={errors.strNumber}
            name="strNumber"
            errorMsg="Please give your street number"
          />
          <h2 className="text-xl font-semibold">Proof of address</h2>
          <Radio
            label="Document Type"
            name="docType"
            options={[
              { value: "utility", label: "Utility Bill" },
              { value: "bank", label: "Bank Statement" },
              { value: "other", label: "Other" },
            ]}
            register={register}
            error={errors.docType}
            errorMsg="Please select a document type"
          />
          <div className="flex w-full flex-col">
            <p className="block text-sm font-medium text-gray-900">File</p>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-neutral-300 border-dashed rounded-lg cursor-pointer bg-neutral-50  hover:bg-neutral-100 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-neutral-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-neutral-500 ">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-neutral-500 ">
                  {file instanceof FileList && file.length > 0
                    ? file[0].name
                    : "No file selected"}
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                accept="image/*,application/pdf"
                className="hidden"
                {...register("doc", {
                  required: {
                    value: true,
                    message: "Please upload a document",
                  },
                })}
              />
            </label>
            {errors.doc && (
              <span className="text-red-700 text-xs">{errors.doc.message}</span>
            )}
          </div>
          <input
            disabled={Object.keys(errors).length > 0}
            type="submit"
            value="Next Step"
            className="text-black mt-4 block text-center bg-neutral-300 disabled:bg-neutral-200 disabled:hover:text-black disabled:cursor-not-allowed hover:bg-neutral-800 hover:text-white ml-auto transition-colors duration-300 outline-none font-medium rounded-lg text-sm px-5 py-2.5"
          />
        </form>
      </div>
    </div>
  );
}
