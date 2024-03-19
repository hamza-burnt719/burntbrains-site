import { IconType } from "react-icons";

interface iProps {
  text: string;
  Icon: IconType;
}

const IconText = ({ text, Icon }: iProps) => {
  return (
    <div className="flex gap-3 items-center">
        <Icon />
        {text}
    </div>
  );
};

export default IconText;
