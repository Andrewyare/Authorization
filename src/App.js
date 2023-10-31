import './App.css';
import Home from './Components/Home';
import Registration from './Components/Registration';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Components/Login';
import Links from './Components/Links';
import Logout from './Components/Logout';
import LogoutFunction from './Components/LogoutFunction';

function App() {
	const [fakeDatabase, setFakeDatabase] = useState([]);
	const [username, setUsername] = useState('');
	return (
		<div>
			{!username && <Links />}
			{username && <Logout />}
			<Routes>
				<Route path='/' element={<Home username={username} />} />
				<Route path='registration' element={<Registration database={fakeDatabase} setDatabase={setFakeDatabase} />} />
				<Route path='/login' element={<Login database={fakeDatabase} setUsername={setUsername} />} />
				<Route path='logout' element={<LogoutFunction setUsername={setUsername} />} />
			</Routes>
		</div>
	);
}


export default App;
