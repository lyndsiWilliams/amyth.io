import AmythicalTextArea from '.';
import { InputProps } from 'antd/lib/input';

export default {
  title: 'Input',
  component: AmythicalTextArea,
};

export const InteractiveAmythicalTextArea = (args: InputProps) => {
  return (
    <AmythicalTextArea type={args.type} />
  );
};

InteractiveAmythicalTextArea.argTypes = {
  size: {
    defaultValue: 'middle',
    control: {
      type: 'select',
      options: ['small', 'middle', 'large']
    }
  },
}
