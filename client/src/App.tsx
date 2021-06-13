import './App.css';
import mythicalBridge from './images/mythicalBridge.jpg';
import { Card, Button } from 'antd';
import styled from '@emotion/styled';

const { Meta } = Card;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledCard = styled(Card)`
  width: 700px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;

  .ant-card-meta-title {
    font-family: 'Smythe', cursive;
    text-align: center;
    font-size: 3em;
  }

  .ant-card-meta-description {
    text-align: center;
    margin-bottom: 20px;
  }
`;

function App() {
  return (
    <StyledWrapper>
      <StyledCard
        cover={
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            alt='Photo by Cosmic Timetraveler on Unsplash'
            src={mythicalBridge}
          />
        }
      >
        <Meta
          title='.: Amyth.io :.'
          description='.: A mythical styling library :.'
        />
        <Button
          block
          href='https://60bafb54de11ec00490290c8-gsgpwgexgq.chromatic.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Check out the Storybook!
        </Button>
      </StyledCard>
    </StyledWrapper>
  );
}

export default App;
