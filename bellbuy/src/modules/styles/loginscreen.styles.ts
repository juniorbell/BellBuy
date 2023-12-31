import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const ContainerLoginScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const BackgroundImage = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  background: linear-gradient(50deg, rgba(255,255,255,1) 0%, rgba(0,104,55,1) 100%);`;

export const LogoImage = styled.img`
width: 345px;
justify-content: center;
text-align: center;
margin-bottom: 15px;
`;

export const TitleLogin = styled(Title)`
 color: #15c93b;
`;

export const ContainerLogin = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 22px;
  width: 100%;
  height: 100%;
  max-width: 646px;
  box-shadow: 4px 0px 20px 1px #121212;
  border-radius: 0px 45px 0px 0px;

  
`;

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 498px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.div`
color: #006837;
font-style: normal;
font-size: 1.2rem;
line-height: 21px;
margin: 8px;
justify-content: left
align-items: start;     
font-family: MV Boli;

`;




