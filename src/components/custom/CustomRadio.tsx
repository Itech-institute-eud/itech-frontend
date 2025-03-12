import { Check } from "lucide-react";

const CustomRadio = () => {
  return (
    <div className="flex items-center gap-2 my-2 mt-3">
      <label className="relative flex items-center gap-2 cursor-pointer">
        {/* Hidden Radio Button */}
        <input type="radio" name="option" className="hidden peer" />

        {/* Custom Styled Radio Button */}
        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full border border-gray-400 flex items-center justify-center peer-checked:bg-blue-600 peer-checked:border-blue-600">
          {/* Ensure icon is inside the div and correctly positioned */}
          <Check className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
        </div>

        <span className="text-primary-links">General Inquiry</span>
      </label>
    </div>
  );
};

export default CustomRadio;
