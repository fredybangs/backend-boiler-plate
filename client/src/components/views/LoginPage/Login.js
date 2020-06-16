import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
// import Copyright from '../../views/SignIn_SignUp/Copyright';
import * as Yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '../MainPage/modules/components/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import {
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
	Grid,
} from '@material-ui/core/';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
	paper: {
		//   marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: '20px',
		backgroundColor: '#455A64',
	},
	form: {
		width: '100%',
		//   marginTop: theme.spacing(3),
	},
	submit: {
		//   margin: theme.spacing(3, 0, 2),
	},
});

function Login(props) {
	const dispatch = useDispatch();
	const rememberMeChecked = localStorage.getItem('rememberMe') ? true : false;

	const [formErrorMessage, setFormErrorMessage] = useState('');
	const [rememberMe, setRememberMe] = useState(rememberMeChecked);

	const handleRememberMe = () => {
		setRememberMe(!rememberMe);
	};

	const initialEmail = localStorage.getItem('rememberMe')
		? localStorage.getItem('rememberMe')
		: '';

	return (
		<Container component='main' maxWidth='lg'>
			<AppBar />
			<br />
			<br />
			<br />
			<br />
			<CssBaseline />
			<Container maxWidth='md'>
				<div>
					<Avatar>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5' align='center'>
						Sign in
					</Typography>
					<Formik
						initialValues={{
							email: '',
							password: '',
						}}
						validationSchema={Yup.object().shape({
							email: Yup.string()
								.email('Email is invalid')
								.required('Email is required'),
							password: Yup.string()
								.min(6, 'Password must be at least 6 characters')
								.required('Password is required'),
						})}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								let dataToSubmit = {
									email: values.email,
									password: values.password,
								};

								dispatch(loginUser(dataToSubmit))
									.then((response) => {
										if (response.payload.loginSuccess) {
											window.localStorage.setItem(
												'userId',
												response.payload.userId,
											);
											if (rememberMe === true) {
												window.localStorage.setItem('rememberMe', values.id);
											} else {
												localStorage.removeItem('rememberMe');
											}
											props.history.push('/home');
										} else {
											setFormErrorMessage(
												'Check out your Account or Password again',
											);
										}
									})
									.catch((err) => {
										setFormErrorMessage(
											'Check out your Account or Password again',
										);
										setTimeout(() => {
											setFormErrorMessage('');
										}, 3000);
									});
								setSubmitting(false);
							}, 500);
						}}>
						{(props) => {
							const {
								values,
								errors,
								touched,
								handleChange,
								handleSubmit,
								isSubmitting,
							} = props;
							return (
								<form onSubmit={handleSubmit}>
									<TextField
										variant='outlined'
										margin='normal'
										required
										fullWidth
										id='email'
										label='Email Address'
										name='email'
										autoComplete='email'
										autoFocus
										helperText={touched.email ? errors.email : ''}
										error={touched.email && Boolean(errors.email)}
										value={values.email}
										onChange={handleChange}
									/>
									<TextField
										variant='outlined'
										margin='normal'
										required
										name='password'
										label='Password'
										type='password'
										id='password'
										autoComplete='current-password'
										helperText={touched.password ? errors.password : ''}
										error={touched.password && Boolean(errors.password)}
										fullWidth
										value={values.password}
										onChange={handleChange}
									/>

									{formErrorMessage && (
										<label>
											<p
												style={{
													color: '#ff0000bf',
													fontSize: '0.7rem',
													border: '1px solid',
													padding: '1rem',
													borderRadius: '10px',
												}}>
												{formErrorMessage}
											</p>
										</label>
									)}
									<FormControlLabel
										control={
											<Checkbox
												name='remember'
												color='primary'
												id='rememberMe'
												onChange={handleRememberMe}
												checked={rememberMe}
											/>
										}
										label='Remember me'
										onChange={handleChange}
									/>
									<Button
										disabled={isSubmitting}
										onSubmit={handleSubmit}
										type='submit'
										fullWidth
										variant='contained'
										color='primary'>
										Sign In
									</Button>
									<Grid container>
										<Grid item xs>
											<Link
												to='/forgot-password'
												variant='body2'
												style={{ textDecoration: 'none' }}>
												Forgot Password?
											</Link>
										</Grid>
										<Grid item>
											<Link
												to='/sign-up'
												variant='body2'
												style={{ textDecoration: 'none' }}>
												Don't have an account? Sign Up
											</Link>
										</Grid>
									</Grid>
								</form>
							);
						}}
					</Formik>
				</div>
			</Container>
			<Box mt={8}>{/* <Copyright /> */}</Box>
		</Container>
	);
}

export default withRouter(Login);
