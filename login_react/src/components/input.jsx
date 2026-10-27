const Input = ({ ...props }) => {
  const interact =
    "focus:border-stone-500 hover:border-stone-500 hover:duration-0";
  return (
    <input
      className={`px-4 py-2 outline-0 border-stone-700 border-b-2 duration-300 text-lg ${interact}`}
      {...props}
    />
  );
};

export default Input;
