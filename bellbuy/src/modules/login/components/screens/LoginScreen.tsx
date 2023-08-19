import { Input } from "antd";
import axios from "axios";

import { useState } from "react";
import Button from "../../../../shared/components/buttons/button/Button";
import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage, Text, TitleLogin } from "../../../styles/loginscreen.styles";


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    };
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleLogin = async () => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/auth',
            data: {
                email: email,
                password: password,
            },
        }).then((result) => {
            alert(`Acesso Permitido ${result.data.accessToken}`);
            return result.data;
        })
            .catch(() => {
                alert('Usuário ou senha iválido')
            })

    }

    return (
        <div>
            <BackgroundImage src="./wallpaper01a.jpg" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo2.png" />
                    <TitleLogin level={2} type="success">LOGIN</TitleLogin>
                    <Text> Usuário:</Text>
                    <Input placeholder="Insira  usuario " onChange={handleEmail} value={email} />
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
