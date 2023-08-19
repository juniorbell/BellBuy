import axios from "axios";
import { useState } from "react";
export const useRequest = () => {

    const [loading, setLoading] = useState(false);
    setLoading(true);

    const getRequest = async (url: string) => {
        return await axios({
            method: 'get',
            url: url,

        }).
            then((result) => {
                alert(`Acesso Permitido ${result.data.accessToken}`);
                return result.data;
            })
            .catch(() => {
                alert('Usuário ou senha iválido')
            });

    };
    const postRequest = async (url: string, body: any) => {
        return await axios({
            method: 'post',
            url: url,
            data: body,

        }).
            then((result) => {
                return result.data;
            })
            .catch(() => {
                alert('error')
            });

    };

    return {
        loading,
        getRequest,
        postRequest,
    };
};