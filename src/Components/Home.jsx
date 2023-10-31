import React from 'react';

const Home = ({ username }) => {
	return (
		<h1 style={{ textAlign: "center" }}>Welcome {username}</h1>
	);
};

export default Home;