import AmythicalCard from "./AmythicalCard";
import { CardProps } from "antd/lib/card";

export default {
  title: "Amythical Card",
  component: AmythicalCard,
};

export const InteractiveAmythicalCard = (args: CardProps) => {
  return (
    <AmythicalCard title={args.title} style={args.style}>
      Test
    </AmythicalCard>
  );
};

InteractiveAmythicalCard.args = {
  title: "Card title",
  style: { "background-color": "plum" },
};

InteractiveAmythicalCard.argTypes = {
  bordered: {
    defaultValue: true,
    control: {
      type: "boolean",
      options: [true, false],
    },
  },
};
