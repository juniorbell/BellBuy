import { Input } from "antd";
import { useState } from "react";
import Button from "../../shared/buttons/button/Button";
import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage, Text, TitleLogin } from "../styles/loginscreen.styles";


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        alert(`Seu usuário é: ${username}, Sua senha é: ${password}`)
    }

    return (
        <div>
            <BackgroundImage src="./wallpaper01.jpg" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo2.png" />
                    <TitleLogin level={2} type="success">LOGIN</TitleLogin>
                    <Text> Usuário:</Text>
                    <Input placeholder="Insira  usuario " onChange={handleUsername} value={username} />
                    <Text> Senha:</Text>
                    <Input type="password" placeholder="Insira a senha" onChange={handlePassword} value={password} />
                    <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
                        ENTRAR
                    </Button>
                </LimitedContainer>
            </ContainerLogin>
        </div>
    );
};

export default LoginScreen;
