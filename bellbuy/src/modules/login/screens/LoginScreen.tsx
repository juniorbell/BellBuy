import { Input } from "antd";

import { useState } from "react";
import Button from "../../../shared/components/buttons/button/Button";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";
import { useRequests } from "../../../shared/hooks/useRequest";
import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage, Text, TitleLogin } from "../../styles/loginscreen.styles";
import { UserType } from "../types/userType";

const LoginScreen = () => {
    const { accessToken } = useGlobalContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { postRequest, loading } = useRequests();

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    };
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const handleLogin = () => {
        postRequest<UserType>('http://localhost:8080/auth', {
            email: email,
            password: password,
        });
    };

    return (
        <div>
            <BackgroundImage />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo2.png" />
                    <TitleLogin level={2} type="success">LOGIN</TitleLogin>
                    <Text> Usuário:</Text>
                    <Input placeholder="Insira  usuario " onChange={handleEmail} value={email} />
                    <Text> Senha:</Text>
                    <Input type="password" placeholder="Insira a senha" onChange={handlePassword} value={password} />
                    <Button loading={loading} type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
                        ENTRAR
                    </Button>
                </LimitedContainer>
            </ContainerLogin>
        </div>
    );
};

export default LoginScreen;
