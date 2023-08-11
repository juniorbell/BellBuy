import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage } from "../styles/loginscreen.styles";

const LoginScreen = () => {
    return (
        <div>
            <BackgroundImage src="./wallpaper01.jpg" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.svg" />
                </LimitedContainer>
            </ContainerLogin>
        </div>
    );
};

export default LoginScreen;
