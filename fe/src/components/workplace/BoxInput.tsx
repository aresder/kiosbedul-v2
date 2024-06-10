interface InputProps {
  input: string;
  name: string;
  type: any;
  auto: string;
}

const BoxInputComponent = ({ input, name, type, auto }: InputProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm: justify-between gap-y-4 px-8">
      <label htmlFor={name} className="text-sm sm:text-base">
        {input}
      </label>
      <input
        className=" py-2 px-4 rounded-md sm:w-1/2 w-full text-[#162331] outline-none bg-white"
        type={type}
        name={name}
        id={name}
        autoComplete={auto}
      />
    </div>
  );
};

export default BoxInputComponent;
