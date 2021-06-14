import React from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonProps as AntdButtonProps } from 'antd/lib/button';
import styled from '@emotion/styled';
import 'antd/dist/antd.css';
import LinesEllipsis from 'react-lines-ellipsis';
import galaxy from '../../images/galaxy.jpeg';

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
        maxLine='2'
        basedOn='letters'
        trimRight
      />
      {/* {buttonText} */}
    </AntdButton>
  ),
)`
  @keyframes animatedBackground {
    from {
      background-position: 0 0;
    }
    to {
      // horizontal | vertical
      background-position: 100% 50%;
    }
  }

  background-image: url(${galaxy});
  color: plum;
  border: 1px solid black;
  white-space: break-spaces;
  width: 100%;
  background-position: 0px 0px;
  background-repeat: repeat-y;
  animation: animatedBackground 60s linear infinite;

  &:hover, &:focus {
    color: lightskyblue;
    background-image: url(${galaxy});
    background-position: 0px 0px;
    background-repeat: repeat-y;
    animation: animatedBackground 60s linear infinite;
  }
`;

export default Button;