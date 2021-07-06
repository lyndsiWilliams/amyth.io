import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';
import styled from '@emotion/styled';
import 'antd/dist/antd.css';
import galaxy from '../../images/galaxy.jpeg';

const AmythicalCard = styled(
  ({ ...props }: CardProps) => (
    <Card {...props} />
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

  border: 1px solid black;

  .ant-card-head {
    background-image: url(${galaxy});
    color: plum;
    background-position: 0px 0px;
    background-repeat: repeat-y;
    animation: animatedBackground 60s linear infinite;
  }

  .ant-card-body {
    background-color: plum;
    opacity: 0.8;
    color: royalblue;
  }
`;

export default AmythicalCard;
