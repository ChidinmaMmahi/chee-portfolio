interface ButtonProps {
  title: string;
  extraClassnames?: string;
}

const Button = ({ title, extraClassnames }: ButtonProps) => {
  return (
    <button className={`py-2 px-4 rounded-md text-sm ${extraClassnames}`}>
      {title}
    </button>
  );
};

export default Button;
