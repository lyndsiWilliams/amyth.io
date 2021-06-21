import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import styled from '@emotion/styled';
import 'antd/dist/antd.css';
import LinesEllipsis from 'react-lines-ellipsis';
import * as galaxy from '../../images/galaxy.jpeg';

export interface AmythicalButtonProps extends ButtonProps {
  buttonText?: string;
}

const AmythicalButton = styled(
  ({ buttonText, ...props }: AmythicalButtonProps) => (
    <Button
      {...props}
    >
      {/* <LinesEllipsis
        text={buttonText}
        maxLine='2'
        basedOn='letters'
        trimRight
      /> */}
      {buttonText}
    </Button>
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

export default AmythicalButton;
