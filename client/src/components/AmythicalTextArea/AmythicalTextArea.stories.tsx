import AmythicalTextArea from "./AmythicalTextArea";
import { InputProps } from "antd/lib/input";

export default {
  title: "Amythical Text Area",
  component: AmythicalTextArea,
};

export const InteractiveAmythicalTextArea = (args: InputProps) => {
  return (
    <AmythicalTextArea style={args.style} placeholder={args.placeholder} />
  );
};

InteractiveAmythicalTextArea.args = {
  placeholder: "Type something in this cool galaxy text area...",
  style: { color: "plum" },
};

InteractiveAmythicalTextArea.argTypes = {
  size: {
    defaultValue: "middle",
    control: {
      type: "select",
      options: ["small", "middle", "large"],
    },
  },
};
