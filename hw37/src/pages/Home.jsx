import {Button, Container, Grid, Typography} from "@mui/material";
import {Form, Formik} from "formik";
import * as yup from 'yup';

import TextField from "../components/FormsUI/TextField";

import styles from './Home.module.scss';

const INITIAL_FORM_STATE = {
	firstName: '',
	lastName: '',
	email: '',
	phone: ''
};

const phoneRegExp = /^\d{12}$/;

const FORM_VALIDATION = yup.object().shape({
	firstName: yup.string().required('Required'),
	lastName: yup.string().required('Required'),
	email: yup.string().required('Required').email('Invalid email.'),
	phone: yup.string().required('Required').matches(phoneRegExp, {message:'Please enter a valid phone number'})
});

const HomePage = () => {
	return (
		<div className={styles.Homepage}>
			<Grid item xs={12}>
				<Container maxWidth="md">
					<Formik
						initialValues={{
							...INITIAL_FORM_STATE
						}}
						validationSchema={FORM_VALIDATION}
						onSubmit={values => {
							console.log(values);
						}}
					>
						<Form>

							<Grid container spacing={2}>

								<Grid item xs={12}>
									<Typography>
										Your details
									</Typography>
								</Grid>

								<Grid item xs={6}>
									<TextField
										name="firstName"
										label="First Name"
									/>
								</Grid>

								<Grid item xs={6}>
									<TextField
										name="lastName"
										label="Last Name"
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField
										name="email"
										label="Email"
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField
										name="phone"
										label="Phone"
									/>
								</Grid>

								<Grid item xs={12}>
									<Button>
										Submit Form
									</Button>
								</Grid>
							</Grid>
						</Form>
					</Formik>
				</Container>
			</Grid>
		</div>
	)
}

export default HomePage;
