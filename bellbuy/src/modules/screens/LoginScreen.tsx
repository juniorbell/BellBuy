import { Input } from "antd";
import Button from "../../shared/buttons/button/Button";
import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage, Text, TitleLogin } from "../styles/loginscreen.styles";


const LoginScreen = () => {
    return (
        <div>
            <BackgroundImage src="./wallpape1r.jpg" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo2.png" />
                    <TitleLogin level={2} type="success">LOGIN</TitleLogin>
                    <Text> Usuário:</Text>
                    <Input title="Usuário" />
                    <Text> Senha:</Text>
                    <Input title="Senha" />
                    <Button type="primary" margin="64px 0px 16px 0px">
                        ENTRAR
                    </Button>
                </LimitedContainer>
            </ContainerLogin>
        </div>
    );
};

export default LoginScreen;
