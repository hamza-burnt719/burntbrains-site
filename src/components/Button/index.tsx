interface iProps {
  buttonText: string;
  onClick: () => void;
  tailwindClasses?: string;
}

const Button = ({ buttonText, onClick, tailwindClasses }: iProps) => {
  return (
    <div
      onClick={onClick}
      className={`text-lg font-bold py-5 px-12 cursor-pointer bg-secondary w-fit rounded-xl ${tailwindClasses}`}
    >
      {buttonText}
    </div>
  );
};

export default Button;
