import Radio from "../../components/Radio";
import { useHook } from "./useHook";

export default function NewNumber() {
  const { register, handleSubmit, errors, onSubmit } = useHook();
  return (
    <div>
      <div className="h-32 flex flex-col justify-center max-h-32 border-b-neutral-200 border-b px-8">
        <h2 className="text-neutral-950 text-3xl font-bold">
          Create a new number
        </h2>
        <p className="text-neutral-950">Choose a location and a number type</p>
      </div>
      <div className="p-8">
        <form
          className="mx-auto max-w-md shadow-lg rounded-xl p-4 bg-neutral-100"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="number">Phone Number</label>
            <div className="flex items-center col-span-3">
              <select
                id="country"
                className="bg-white border outline-none border-neutral-200 rounded-r-none text-neutral-900 text-sm rounded-lg block px-2.5 h-10 w-14"
                {...register("countryCode", {
                  required: {
                    value: true,
                    message: "Country selection is required",
                  },
                })}
              >
                <option value="">🌎</option>
                <option value="+49">🇩🇪 (+49)</option>
                <option value="+31">🇳🇱 (+31)</option>
                <option value="+33">🇫🇷 (+33)</option>
                <option value="+32">🇧🇪 (+32)</option>
                <option value="+43">🇦🇹 (+43)</option>
              </select>
              <input
                {...register("number", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                  maxLength: {
                    value: 12,
                    message: "Phone number cannot exceed 12 digits",
                  },
                })}
                type="text"
                className="bg-white border w-full border-neutral-200 rounded-l-none border-l-0 outline-none text-neutral-900 text-sm rounded-lg block px-2.5 h-10"
              />
            </div>
            {errors.countryCode && (
              <span className="text-red-700 text-xs">
                {errors.countryCode.message}
              </span>
            )}
            {errors.number && (
              <span className="text-red-700 text-xs">
                {errors.number.message}
              </span>
            )}
          </div>
          <Radio
            label="Number Type"
            name="type"
            options={[
              { value: "local", label: "Local" },
              { value: "mobile", label: "Mobile" },
              { value: "national", label: "National" },
            ]}
            register={register}
            error={errors.type}
            errorMsg="Please select a document type"
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
