import React from 'react';
import { Link } from 'react-router-dom';
import '../App'

const Logout = () => {
	return (
		<div className='logout'>
			<Link className='link' to={"/logout"}>Logout</Link>
		</div>
	);
};

export default Logout;