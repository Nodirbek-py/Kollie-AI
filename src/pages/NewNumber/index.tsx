import { useHook } from "./useHook";

export default function NewNumber() {
  const { register, handleSubmit, watch, errors, onSubmit } = useHook();
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
          className="mx-auto max-w-md shadow-lg rounded-xl p-2 bg-neutral-100"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center">
            <label htmlFor="number">Phone Number</label>
            <div className="ml-auto">
              <select
                id="country"
                className="bg-white border w-max outline-none border-neutral-200 rounded-r-none text-neutral-900 text-sm rounded-lg block px-2.5 h-10"
                {...(register("country"), { required: true })}
              >
                <option selected>🌎</option>
                <option value="+49">🇩🇪 (+49)</option>
                <option value="+31">🇳🇱 (+31)</option>
                <option value="+33">🇫🇷 (+33)</option>
                <option value="+32">🇧🇪 (+32)</option>
                <option value="+43">🇦🇹 (+43)</option>
              </select>
            </div>
            <div>
              <input
                {...(register("number"), { max: 12 })}
                type="number"
                className="bg-white border w-full border-neutral-200 rounded-l-none border-l-0 outline-none text-neutral-900 text-sm rounded-lg block px-2.5 h-10"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="number">Number Type</label>
            <div className="flex items-center">
              <input
                id="country-option-1"
                type="radio"
                name="type"
                value="local"
                className="w-4 h-4 outline-none mr-2 bg-gray-700 border-gray-600"
                {...(register("type"), { required: true })}
                checked
              />
              <label
                htmlFor="country-option-1"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Local
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="country-option-1"
                type="radio"
                name="type"
                value="mobile"
                className="w-4 h-4 outline-none mr-2 bg-gray-700 border-gray-600"
                {...(register("type"), { required: true })}
              />
              <label
                htmlFor="country-option-1"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Mobile
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="country-option-1"
                type="radio"
                name="type"
                value="national"
                className="w-4 h-4 outline-none mr-2 bg-gray-700 border-gray-600"
                {...(register("type"), { required: true })}
              />
              <label
                htmlFor="country-option-1"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                National
              </label>
            </div>
          </div>

          {errors.country && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
