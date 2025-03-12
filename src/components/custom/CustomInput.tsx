interface CustomInputProps {
  title: string;
}

const CustomInput = ({ title }: CustomInputProps) => {
  return (
    <div className="flex flex-col mt-10">
      <label className="text-white text-start text-sm md:text-lg">
        {title}
      </label>
      <input
        type="text"
        className="focus:ring-0 focus:outline-none text-primary-links border-0 border-b border-b-white focus:border-b-primary-links transition-colors"
      />
    </div>
  );
};

export default CustomInput;
