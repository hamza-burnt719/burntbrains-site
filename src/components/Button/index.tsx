interface iProps {
    buttonText: string;
    onClick: () => void;
}

const Button = ({buttonText, onClick}: iProps) => {

    return (
        <div onClick={onClick} className="text-lg font-bold py-5 px-12 cursor-pointer bg-secondary w-fit rounded-xl">
            {buttonText}
        </div>
    )
}

export default Button