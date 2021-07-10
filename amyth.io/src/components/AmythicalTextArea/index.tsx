import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import styled from '@emotion/styled';
import 'antd/dist/antd.css';
import galaxy from '../../images/galaxy.jpeg';

const { TextArea } = Input;

const AmythicalTextArea = styled(
  ({...props}: TextAreaProps) => (
    <TextArea {...props} />
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
  background-position: 0px 0px;
  background-repeat: repeat-y;
  animation: animatedBackground 60s linear infinite;

  &::placeholder {
    color: lightskyblue;
  }
`;

export default AmythicalTextArea;
