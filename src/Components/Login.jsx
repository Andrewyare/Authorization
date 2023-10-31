import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';

const Login = ({ database, setUsername }) => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [failedAttempts, setFailedAttempts] = useState(0);
	const maxFailedAttempts = 3;
	const history = useNavigate();

	const verifyLogin = () => {
		if (failedAttempts >= maxFailedAttempts) {
			alert('Ви досягли максимальної кількості невдалих спроб. Спробуйте пізніше.');
			return;
		}
		const user = database.find((user) => user.login === login);
		if (!user) {
			alert('Користувача з таким логіном не знайдено');
			return;
		}

		const hashedPassword = CryptoJS.SHA256(password).toString();
		if (user.password === hashedPassword) {
			setUsername(login);
			setFailedAttempts(0);
			history("/");
		} else {
			setFailedAttempts(failedAttempts + 1);
			alert('Неправильний пароль');
		}
	};
	return (
		<div className='form'>
			<form>
				<div className="form__item">
					<label htmlFor="login">Login</label>
					<input
						type="text"
						name="login"
						className='form__input'
						placeholder='Login'
						value={login}
						onChange={e => setLogin(e.target.value)}
					/>
				</div>
				<div className="form__item">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						className='form__input'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div className="form__item">
					<input
						type="button"
						value="Login"
						className='form__button'
						onClick={verifyLogin}
					/>
				</div>
			</form>
		</div>
	);
};

export default Login;