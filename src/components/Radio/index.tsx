export default function Radio({
  label,
  name,
  options,
  error,
  errorMsg,
  register,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  error: any;
  errorMsg: string;
  register: any;
}) {
  return (
    <div className="flex flex-col my-4">
      <label>{label}</label>
      <div className="flex items-center gap-4">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={`${name}-${option.value}`}
              type="radio"
              value={option.value}
              className="w-4 h-4 outline-none mr-2 bg-gray-700 border-gray-600"
              {...register(name, {
                required: {
                  value: true,
                  message: errorMsg,
                },
              })}
            />
            <label
              htmlFor={`${name}-${option.value}`}
              className="block text-sm font-medium text-gray-900"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <span className="text-red-700 text-xs">{error.message}</span>}
    </div>
  );
}
