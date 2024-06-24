import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: absolute;
  max-width: 100%;
  cursor: default !important;
`;

const TextContainer = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  cursor: default !important;
`;

const TitleText = styled.h1`
  display: inline-block;
  font-size: 8vmin;
  font-family: ReadexPro, sans-serif;
  color: #F62D0B;
  margin: 0;
  padding: 0;
  font-weight: 600;
  text-align: left;
  cursor: default !important;
`;

const BodyText = styled.p`
  display: inline-block;
  font-size: 3.2vmin;
  font-family: ReadexPro, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  color: #1e1e1e;
  line-height: 1.6;
  cursor: default !important;
`;

const SmallSpacer = styled.div`
  width: 100%;
  height: 5vh;
  cursor: default !important;
`;

const LineBreak = styled.div`
    width: 100%;
    cursor: default !important;
`

function PageNotFound() {
    return (
      <SectionContainer>
        <TextContainer>
          <TitleText>ERROR 404</TitleText>
          <LineBreak/>
          <TitleText><span style={{fontSize: "5vmin", color: "#141414", cursor: 'default' }}> Sorry! That page doesn't exist.</span></TitleText>
          <SmallSpacer/>
          <BodyText>
              Go back <Link to="/" style={{cursor: "pointer"}}>home</Link>.
          </BodyText>
        </TextContainer>
      </SectionContainer>
    );
}

export default PageNotFound;