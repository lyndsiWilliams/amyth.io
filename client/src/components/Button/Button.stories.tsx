import Button, { ButtonProps } from './';

export default {
  title: 'Button',
  component: Button,
};

export const InteractiveButton = (args: ButtonProps) => (
  <Button
    buttonText={args.buttonText}
    type='default'
    shape='round'
  />
);

InteractiveButton.args = {
  buttonText: 'This is a button',
};
