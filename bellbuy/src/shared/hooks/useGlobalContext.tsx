import { createContext, useContext, useState } from "react";

type notificationType = 'success' | 'info' | 'warning' | 'error'

interface NotificationProps {
    message: string;
    type: notificationType;
    description?: string;
}

interface GlobalData {
    notification?: NotificationProps
}
interface GlobalContextProps {
    globalData: GlobalData
    setGlobalData: (globalData: GlobalData) => void;
}

const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalProviderProps {
    children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [globalData, setGlobalData] = useState<GlobalData>({});

    return (
        <GlobalContext.Provider value={{ globalData, setGlobalData }} >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);
    ;

    const setNotification = (message: string, type: notificationType, description?: string) => {
        setGlobalData({
            ...globalData,
            notification: {
                message,
                type,
                description,
            }
        })
    }

    return {
        notification: globalData?.notification,
        setNotification
    };
};
