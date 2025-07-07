interface ButtonProps {
  title: string;
  extraClassnames?: string;
}

const Button = ({ title, extraClassnames }: ButtonProps) => {
  return (
    <button
      className={`py-2 px-4 rounded-md text-sm cursor-pointer hover:scale-[1.05] hover:opacity-80 duration-500 ${extraClassnames}`}
    >
      {title}
    </button>
  );
};

export default Button;
