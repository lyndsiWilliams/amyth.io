import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';
import styled from '@emotion/styled';
import 'antd/dist/antd.css';

const AmythicalCard = styled(
  ({ ...props }: CardProps) => (
    <Card />
  ),
)``;

export default AmythicalCard;
