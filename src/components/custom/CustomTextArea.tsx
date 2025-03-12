const CustomTextArea = () => {
  return (
    <div className="mt-3">
      <div className="w-full">
        <label className="block text-sm font-medium text-white my-5">
          Message
        </label>
        <textarea
          className="w-full mt-1 p-3 border border-white rounded-md focus:outline-none focus:border-blue-500
          resize-none md:resize-y h-24 md:h-32 lg:h-40 text-primary-links transition-colors placeholder:text-gray-500"
          placeholder="Your Message"
        ></textarea>
      </div>
    </div>
  );
};

export default CustomTextArea;
