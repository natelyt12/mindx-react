const Button = ({ children, variant = "primary", ...props }) => {
  const interact_pri =
    "hover:bg-transparent hover:duration-0 hover:text-sky-400 disabled:opacity-60 disabled:hover:bg-sky-600 disabled:hover:text-white active:border-sky-700 active:text-sky-700";
  const interact_sec = "hover:border-white hover:opacity-70 hover:duration-0";
  const vari = {
    primary: `px-4 py-2 bg-sky-600 border-sky-600 duration-300 border outline-0 ${interact_pri}`,
    secondary: `px-3 py-1 border-stone-950 border duration-300 ${interact_sec}`,
  };
  return (
    <button className={vari[variant]} {...props}>
      {children}
    </button>
  );
};

export default Button;
