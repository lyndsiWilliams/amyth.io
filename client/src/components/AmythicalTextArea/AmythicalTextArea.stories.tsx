import AmythicalTextArea from '.';
import { InputProps } from 'antd/lib/input';

export default {
  title: 'Amythical Text Area',
  component: AmythicalTextArea,
};

export const InteractiveAmythicalTextArea = (args: InputProps) => {
  return (
    <AmythicalTextArea style={args.style} />
  );
};

InteractiveAmythicalTextArea.args = {
  style: { color: 'plum' }
}

InteractiveAmythicalTextArea.argTypes = {
  size: {
    defaultValue: 'middle',
    control: {
      type: 'select',
      options: ['small', 'middle', 'large']
    }
  },
}
