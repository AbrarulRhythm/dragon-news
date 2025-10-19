import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import LoadingOne from '../components/LoadingEffect/LoadingOne';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <LoadingOne classes='h-screen'></LoadingOne>
    }

    if (user && user?.email) {
        return children;
    }
    return <Navigate to='/auth/login'></Navigate>
};

export default PrivateRoute;