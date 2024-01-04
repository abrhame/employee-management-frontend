import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // or use fetch API

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                console.log(token)
                const response = await axios.get('https://employee-management-sdpg.onrender.com/validate', {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                console.log(response)
                setIsAuthenticated(response.data); // Expect a boolean value
            } catch (error) {
                navigate('/login');
            }
        };

        checkAuthentication();
    }, [navigate]);

    if (isAuthenticated === null) {
        return null; // Or a loading spinner
    }

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;