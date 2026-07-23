import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBuilder } from "../../../context/Builder.context";

export default function Protected({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();
    const { user, loadingStatus } = useBuilder();

    const isLoading = loadingStatus;
    const isUnauthorized = user === undefined || user === null;

    useEffect(() => {
        if (isLoading && isUnauthorized) {
            navigate("/login", { replace: true });
        }
    }, [isLoading, isUnauthorized, navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isUnauthorized) {
        return <div>You are not authorized to view this page. Redirecting to login...</div>;
    }

    return <>{children}</>;
}