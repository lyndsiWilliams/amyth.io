import React from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonProps as AntdButtonProps } from 'antd/lib/button';
import styled from '@emotion/styled';
import 'antd/dist/antd.css';

export interface ButtonProps extends AntdButtonProps {
  buttonText?: string;
}

const Button = styled(
  ({ buttonText, ...props }: ButtonProps) => (
    <AntdButton
      {...props}
    >
      {buttonText}
    </AntdButton>
  ),
)`
  background-color: rebeccapurple;
  color: lavender;
  border: 1px solid lavender;

  &:hover, &:focus {
    background-color: lavender;
    color: rebeccapurple;
    border: 1px solid rebeccapurple;
  }
`;

export default Button;