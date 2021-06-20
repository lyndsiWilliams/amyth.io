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
  type: {
    defaultValue: 'button',
    control: {
      type: 'select',
      options: [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ]
    }
  },
}
