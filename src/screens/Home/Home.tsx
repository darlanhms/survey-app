import React from 'react';

import {
  HomeContainer,
  TitleSection,
  TokenInput,
  ContainerSection,
  ButtonBuild,
  ButonText,
  ButtonIcon,
  PopularCard,
  PopularTitle,
  WriterStarsContainer,
  Writer,
  StarsContainer,
  Star,
  TextAnswers,
} from './styles';

const Home: React.FC = () => (
  <HomeContainer>
    <ContainerSection>
      <TitleSection>Answer with token</TitleSection>
      <TokenInput placeholder="Place your token here" />
    </ContainerSection>
    <ContainerSection>
      <TitleSection>Build you're own</TitleSection>
      <ButtonBuild>
        <ButtonIcon name="pencil-ruler" color="#ffffff" size={20} />
        <ButonText>Build from scratch</ButonText>
      </ButtonBuild>
      <ButtonBuild style={{ marginBottom: 0 }}>
        <ButtonIcon name="clone" color="#ffffff" size={20} />
        <ButonText>Build from template</ButonText>
      </ButtonBuild>
    </ContainerSection>
    <ContainerSection>
      <TitleSection>Popular Surveys</TitleSection>
      <PopularCard>
        <PopularTitle numberOfLines={1}>Do you like bananas?</PopularTitle>
        <WriterStarsContainer>
          <Writer numberOfLines={1}>
            Jason Statan ahdjashd asdhajsdhjas asjdhajshda ashdjashd asdjashdj
          </Writer>
          <StarsContainer>
            <Star name="star" solid color="#FFCE22" size={17} />
            <TextAnswers numberOfLines={1}>12343 Answers</TextAnswers>
          </StarsContainer>
        </WriterStarsContainer>
      </PopularCard>
      <PopularCard>
        <PopularTitle numberOfLines={1}>
          Really big text here to ensure that this text will pass{' '}
        </PopularTitle>
        <WriterStarsContainer>
          <Writer numberOfLines={1}>Michael Jackson</Writer>
          <StarsContainer>
            <Star name="star" solid color="#FFCE22" size={17} />
            <TextAnswers numberOfLines={1}>1231223 Answers</TextAnswers>
          </StarsContainer>
        </WriterStarsContainer>
      </PopularCard>
      <PopularCard>
        <PopularTitle numberOfLines={1}>Trying to understand what's happening</PopularTitle>
        <WriterStarsContainer>
          <Writer numberOfLines={1}>Big writer name to ensure that it will bypass</Writer>
          <StarsContainer>
            <Star name="star" solid color="#FFCE22" size={17} />
            <TextAnswers numberOfLines={1}>7583 Answers</TextAnswers>
          </StarsContainer>
        </WriterStarsContainer>
      </PopularCard>
    </ContainerSection>
  </HomeContainer>
);

export default Home;
