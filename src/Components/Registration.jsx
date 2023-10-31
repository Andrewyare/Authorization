import React from 'react';
import { useState } from 'react';
import CryptoJS from 'crypto-js';
import "../App"
const Registration = ({ database, setDatabase }) => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [valid, setValid] = useState(false);
	const [match, setMatch] = useState(true);

	const handlePasswordChange = (e) => {
		const newPassword = e.target.value;
		setPassword(newPassword);
		setValid(checkPassword(newPassword));
	};

	const checkPassword = (password) => {
		const hasUppercase = /[A-Z]/.test(password);
		const hasLowercase = /[a-z]/.test(password);
		const hasDigit = /\d/.test(password);
		const hasSpecial = /[!@#\$%^&*]/.test(password);
		const isLengthValid = password.length >= 8;

		return (
			hasUppercase &&
			hasLowercase &&
			hasDigit &&
			hasSpecial &&
			isLengthValid
		);
	};

	const handleConfirmPasswordChange = (e) => {
		const newConfirmPassword = e.target.value;
		setConfirmPassword(newConfirmPassword);
		setMatch(password === newConfirmPassword);
	};

	const savePassword = () => {

		const hashedPassword = CryptoJS.SHA256(password).toString();

		setDatabase([...database, { login: login, password: hashedPassword }]);
		setLogin('');
		setPassword('');
		setConfirmPassword('');
		setValid(false);
		alert("Ви успішно зареєструвались!")
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
						onChange={handlePasswordChange}
					/>
					{valid ? (
						<p style={{ color: 'green' }}>Password is valid</p>
					) : (
						<p style={{ color: 'red' }}>
							Password should have at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.
						</p>
					)}
				</div>
				<div className="form__item">
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						name="confirmPassword"
						className='form__input'
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
					/>
					{match ? (
						<p style={{ color: 'green' }}>Passwords match</p>
					) : (
						<p style={{ color: 'red' }}>Passwords do not match</p>
					)}
				</div>
				<div className="form__item">
					<input
						type="button"
						value="Register"
						className='form__button'
						onClick={savePassword}
					/>
				</div>
			</form>
		</div>
	);
};

export default Registration;