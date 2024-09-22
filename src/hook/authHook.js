import { useEffect, useState } from "react";
import { userService } from "../services/auth";

export const useIsLogin = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleCheckLogin = async () => {
        try {
            const response = await userService()
            setIsLogin(response.status === 200 ? true : false);
            setLoading(false);
        } catch (error) {
            localStorage.removeItem('token');
            setIsLogin(false);
            setLoading(false);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            handleCheckLogin();
        } else {
            setIsLogin(false);
            setLoading(false);
        }
    }, []);

    return [loading, isLogin]
}