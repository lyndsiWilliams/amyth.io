import React from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonProps as AntdButtonProps } from 'antd/lib/button';
import styled from '@emotion/styled';
import 'antd/dist/antd.css';
import LinesEllipsis from 'react-lines-ellipsis';

export interface ButtonProps extends AntdButtonProps {
  buttonText?: string;
}

const Button = styled(
  ({ buttonText, ...props }: ButtonProps) => (
    <AntdButton
      {...props}
    >
      <LinesEllipsis
        text={buttonText}
        maxLine='1'
        basedOn='letters'
        trimRight
      />
    </AntdButton>
  ),
)`
  background-color: rebeccapurple;
  color: lavender;
  border: 1px solid lavender;
  overflow: hidden;
  white-space: break-spaces;
  width: 100%;

  &:hover, &:focus {
    background-color: lavender;
    color: rebeccapurple;
    border: 1px solid rebeccapurple;
  }
`;

export default Button;