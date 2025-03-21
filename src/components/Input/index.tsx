export default function Input({
  label,
  name,
  error,
  register,
  errorMsg,
}: {
  label: string;
  name: string;
  error: any;
  errorMsg: string;
  register: any;
}) {
  return (
    <div className="flex flex-col mb-4">
      <label>{label}</label>
      <div className="flex items-center gap-4">
        <input
          id="country-option-1"
          type="text"
          className="bg-white border w-full border-neutral-200 outline-none text-neutral-900 text-sm rounded-lg block px-2.5 h-10"
          {...register(name, {
            required: {
              value: true,
              message: errorMsg,
            },
          })}
        />
      </div>
      {error && <span className="text-red-700 text-xs">{error.message}</span>}
    </div>
  );
}
