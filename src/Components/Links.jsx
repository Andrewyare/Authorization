import React from 'react';
import { Link } from 'react-router-dom';
import '../App'

const Links = () => {
	return (
		<div className='links'>
			<Link className='link' to={"/login"}>Login</Link>
			<Link className='link' to={"/registration"}>Register</Link>
		</div>
	);
};

export default Links;