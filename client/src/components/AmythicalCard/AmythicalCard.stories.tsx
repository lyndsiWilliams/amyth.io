import AmythicalCard from '.';
import { CardProps } from 'antd/lib/card';

export default {
  title: 'Card',
  component: AmythicalCard,
};

export const InteractiveAmythicalCard = (args: CardProps) => {
  return (
    <AmythicalCard title={args.title}>Test</AmythicalCard>
  );
};

InteractiveAmythicalCard.args = {
  title: "Card title",
};

InteractiveAmythicalCard.argTypes = {
  bordered: {
    defaultValue: true,
    control: {
      type: 'boolean',
      options: [true, false],
    }
  }
};
