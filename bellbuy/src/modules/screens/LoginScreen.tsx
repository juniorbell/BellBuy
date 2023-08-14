import { Input } from "antd";
import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage, Text } from "../styles/loginscreen.styles";

const LoginScreen = () => {
    return (
        <div>
            <BackgroundImage src="./wallpaper.jpg" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo2.png" />
                    <Text> Usuário:</Text>
                    <Input title="Usuário" />
                    <Text> Senha:</Text>
                    <Input title="Senha" />
                </LimitedContainer>
            </ContainerLogin>
        </div>
    );
};

export default LoginScreen;
