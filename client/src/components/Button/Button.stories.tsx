import Button, { ButtonProps } from './';

export default {
  title: 'Button',
  component: Button,
};

export const InteractiveButton = (args: ButtonProps) => (
  <Button
    buttonText={args.buttonText}
    type={args.type}
    shape={args.shape}
    style={args.style}
  />
);

InteractiveButton.args = {
  buttonText: 'This is a button',
  style: {
    width: '150px',
  }
};

InteractiveButton.argTypes = {
  shape: {
    defaultValue: 'round',
    control: {
      type: 'select',
      options: [
        'round',
        'circle',
        undefined
      ]
    }
  },
  type: {
    defaultValue: 'default',
    control: {
      type: 'select',
      options: [
        'link',
        'text',
        'ghost',
        'default',
        'primary',
        'dashed',
        undefined,
      ]
    }
  },
}
