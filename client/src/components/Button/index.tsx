import React from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonProps as AntdButtonProps } from 'antd/lib/button';
import styled from '@emotion/styled';
import 'antd/dist/antd.css';

export interface ButtonProps extends AntdButtonProps {
  buttonText?: string;
}

const StyledButton = styled(AntdButton)`
  background-color: purple;
  color: lavender;
`;

const Button = styled(
  ({ buttonText, ...props }: ButtonProps) => (
    <StyledButton
      {...props}
    >
      {buttonText}
    </StyledButton>
  ),
)``;

export default Button;