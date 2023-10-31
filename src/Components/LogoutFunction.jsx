import React from 'react';
import { Navigate } from 'react-router-dom';

const LogoutFunction = ({ setUsername }) => {
	setUsername('');

	return <Navigate to="/login" replace={true} />
};

export default LogoutFunction;