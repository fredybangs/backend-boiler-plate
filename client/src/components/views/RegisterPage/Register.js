import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { Formik } from 'formik';
// import Copyright from '../../views/SignIn_SignUp/Copyright';
import * as Yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppBar, Button, TextField, Grid } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { registerUser } from '../../../_actions/user_actions';

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

function Register(props) {
	const dispatch = useDispatch();
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
						Sign Up
					</Typography>
					<Formik
						initialValues={{
							email: '',
							lastName: '',
							name: '',
							password: '',
							confirmPassword: '',
						}}
						validationSchema={Yup.object().shape({
							name: Yup.string().required('Name is required'),
							lastName: Yup.string().required('Last Name is required'),
							email: Yup.string()
								.email('Email is invalid')
								.required('Email is required'),
							password: Yup.string()
								.min(6, 'Password must be at least 6 characters')
								.required('Password is required'),
							confirmPassword: Yup.string()
								.oneOf([Yup.ref('password'), null], 'Passwords must match')
								.required('Confirm Password is required'),
						})}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								let dataToSubmit = {
									email: values.email,
									password: values.password,
									name: values.name,
									lastName: values.lastName,
									image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`,
								};

								console.log('DATA', dataToSubmit);

								dispatch(registerUser(dataToSubmit)).then((response) => {
									if (response.payload.success) {
										props.history.push('/sign-in');
									} else {
										alert(response.payload.err.errmsg);
									}
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
								handleBlur,
							} = props;
							return (
								<form onSubmit={handleSubmit}>
									<TextField
										variant='outlined'
										margin='normal'
										required
										fullWidth
										id='name'
										label='Name'
										name='name'
										autoComplete='name'
										autoFocus
										helperText={touched.name ? errors.name : ''}
										error={touched.name && Boolean(errors.name)}
										value={values.name}
										onChange={handleChange}
									/>
									<TextField
										variant='outlined'
										margin='normal'
										required
										fullWidth
										id='lastName'
										label='Last Name'
										name='lastName'
										autoComplete='lastName'
										autoFocus
										helperText={touched.lastName ? errors.lastName : ''}
										error={touched.lastName && Boolean(errors.lastName)}
										value={values.lastName}
										onChange={handleChange}
									/>
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
										onBlur={handleBlur}
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
										onBlur={handleBlur}
									/>

									<TextField
										variant='outlined'
										margin='normal'
										required
										name='confirmPassword'
										label='Confirm Password'
										type='password'
										id='confirmPassword'
										helperText={
											touched.confirmPassword ? errors.confirmPassword : ''
										}
										error={
											touched.confirmPassword && Boolean(errors.confirmPassword)
										}
										fullWidth
										value={values.confirmPassword}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									<Button
										disabled={isSubmitting}
										onSubmit={handleSubmit}
										type='submit'
										fullWidth
										variant='contained'
										color='primary'>
										Sign Up
									</Button>
									<Grid container>
										<Grid item>
											<Link
												to='/sign-in'
												variant='body2'
												style={{ textDecoration: 'none' }}>
												Have an account? Sign In
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

export default withRouter(Register);
