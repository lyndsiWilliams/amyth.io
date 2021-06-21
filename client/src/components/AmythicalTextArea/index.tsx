import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import styled from '@emotion/styled';
import 'antd/dist/antd.css';

const { TextArea } = Input;

const onChange = (event: any) => {
  [event.target.name] = event.target.value;
};


const AmythicalTextArea = styled(
  ({ ...props }: InputProps) => (
    <TextArea onChange={onChange} />
  ),
)``;

export default AmythicalTextArea;
