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

  .ant-card-meta-title {
    text-align: center;
    font-size: 2em;
  }
`;

function App() {
  return (
    <StyledWrapper>
      <StyledCard
        cover={
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            alt={
              `Photo by 
                <a 
                  href="https://unsplash.com/@cosmictimetraveler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cosmic Timetraveler
                </a> 
              on 
                <a 
                  href="https://unsplash.com/s/photos/fairy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unsplash
                </a>`
            }
            src={mythicalBridge}
          />
        }
      >
        <Meta
          title='.: Amyth.io :.'
          description={
            <Button
              block
              href='https://60bafb54de11ec00490290c8-gxecvdusaz.chromatic.com/?path=/story/example-introduction--page'
              target='_blank'
              rel='noopener noreferrer'
            >
              Check out the Storybook!
            </Button>
          }
        />
      </StyledCard>
    </StyledWrapper>
  );
}

export default App;
