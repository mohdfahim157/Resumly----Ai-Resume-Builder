import { useNavigate } from "react-router-dom";
import { useBuilder } from "../../context/Builder.context";
import { getCurrentUser, loginUser, logoutUser, registerUser } from "../services/auth.api";
import { useEffect } from "react";

export const useAuth = () => {
    const navigate = useNavigate();
    const { setUser, setLoadingStatus } = useBuilder();
    const handleLogin = async (email: string, password: string) => {
        try {
            // Clear the context data before login
            setLoadingStatus(true);
            const data = await loginUser(email, password);
            setUser(data);
            navigate("/dashboard", {
                replace: true,
            });// Update the context with the new data
            return data;
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error logging in user:", error);
                throw error;
            }
            console.error("Error logging in user:", error);
            throw error;
        } finally {
            setLoadingStatus(false);
        }
    };

    const handleRegister = async (username: string, email: string, password: string) => {
        try {
            setLoadingStatus(true);
            const { data } = await registerUser(username, email, password);
            navigate("/dashboard", {
                replace: true,
            });
            setUser(data);
            return data;
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error registering user:", error);
                throw error;
            }
            console.error("Error registering user:", error);
            throw error;
        } finally {
            setLoadingStatus(false);
        }
    }

    const handleLogout = async () => {
        try {
            setLoadingStatus(true);
            await logoutUser();
             navigate("/", {
                replace: true,
            });
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error logging out user:", error);
                throw error;
            }
            console.error("Error logging out user:", error);
            throw error;
        } finally {

            setLoadingStatus(false);
        }
    };



    return {
        handleLogin,
        handleRegister,
        handleLogout,
    };

}
