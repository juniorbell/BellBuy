import { UserType } from "./userType";

export interface AuthType {
    accessToken: string;
    user: UserType;
}