import React, { useContext } from 'react';
import AuthContext from '../auths/AuthContext';

const useAuth = () => {
    const authInformations=useContext(AuthContext)
    return authInformations
};

export default useAuth;