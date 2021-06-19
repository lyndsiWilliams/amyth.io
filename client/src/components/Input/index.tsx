import { Input as AntdInput } from 'antd';
import { InputProps as AntdInputProps } from 'antd/lib/input';
import styled from '@emotion/styled';
import 'antd/dist/antd.css';

const { TextArea } = AntdInput;

const onChange = event => {
  [event.target.name] = event.target.value;
};


const Input = styled(
  ({ ...props }: AntdInputProps) => (
    <TextArea onChange={onChange} />
  ),
)``;

export default Input
