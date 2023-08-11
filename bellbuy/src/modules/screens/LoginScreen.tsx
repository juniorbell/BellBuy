import { Input } from "antd";
import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage } from "../styles/loginscreen.styles";

const LoginScreen = () => {
    return (
        <div>
            <BackgroundImage src="./wallpaper01.jpg" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo2.png" />
                    <Input title="Usuario" />
                    <Input title="Senha" />
                </LimitedContainer>
            </ContainerLogin>
        </div>
    );
};

export default LoginScreen;
