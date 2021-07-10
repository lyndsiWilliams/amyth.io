import AmythicalButton, { AmythicalButtonProps } from '.';

export default {
  title: 'Amythical Button',
  component: AmythicalButton,
};

export const InteractiveAmythicalButton = (args: AmythicalButtonProps) => (
  <AmythicalButton
    buttonText={args.buttonText}
    type={args.type}
    shape={args.shape}
    style={args.style}
    loading={args.loading}
  />
);

InteractiveAmythicalButton.args = {
  buttonText: 'This is a button',
  style: {
    width: '180px',
  }
};

InteractiveAmythicalButton.argTypes = {
  loading: {
    defaultValue: false,
    control: {
      type: 'boolean',
      options: [true, false],
    }
  },
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
