import {
    Box,
    Button,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Formik } from "formik";
import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as Yup from "yup";
import Google from "../../assets/images/icons/social-google.svg";
import { Logo } from "../../components/icons";
import authService from "../../services/api/authService";
import { auth } from "../../store";
import AuthCardWrapper from "./AuthCardWrapper";

const useStyles = makeStyles((theme: any) => ({
    redButton: {
        fontSize: "1rem",
        fontWeight: 500,
        backgroundColor: theme.palette.grey[50],
        border: "1px solid",
        borderColor: theme.palette.grey[100],
        color: theme.palette.grey[700],
        textTransform: "none",
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.875rem",
        },
    },
    loginIcon: {
        marginRight: "16px",
        [theme.breakpoints.down("sm")]: {
            marginRight: "8px",
        },
    },
}));

const LoginPage = () => {
    const theme = useTheme();
    const history = useHistory();
    const classes = useStyles();
    const [, setAuthSettings] = useRecoilState(auth);
    const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));

    const doLogin = async (email: string, password: string) => {
        const result = await authService.login(email, password);
        if (result) {
            setAuthSettings({ isLoggedIn: true });
            history.push("/");
        }
    };

    return (
        <Grid
            container
            direction="column"
        >
            <Grid item xs={12}>
                <Grid
                    container
                    justifyContent="center"
                >
                    <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                        <AuthCardWrapper>
                            <Grid
                                container
                                spacing={2}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Grid item sx={{ mb: 3 }}>
                                    <RouterLink to="#">
                                        <Logo />
                                    </RouterLink>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        direction={
                                            matchDownSM
                                                ? "column-reverse"
                                                : "row"
                                        }
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Grid item>
                                            <Stack
                                                alignItems="center"
                                                justifyContent="center"
                                                spacing={1}
                                            >
                                                <Typography
                                                    color={
                                                        theme.palette.secondary
                                                            .main
                                                    }
                                                    gutterBottom
                                                    variant={
                                                        matchDownSM
                                                            ? "h3"
                                                            : "h2"
                                                    }
                                                >
                                                    Hi, Welcome Back
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    fontSize="16px"
                                                    textAlign={
                                                        matchDownSM
                                                            ? "center"
                                                            : "left"
                                                    }
                                                >
                                                    Enter your credentials to
                                                    continue
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Formik
                                        initialValues={{
                                            email: "fergal.moran+audioboos@gmail.com",
                                            password: "secret",
                                        }}
                                        validationSchema={Yup.object().shape({
                                            email: Yup.string()
                                                .email("Must be a valid email")
                                                .max(255)
                                                .required("Email is required"),
                                            password: Yup.string()
                                                .max(255)
                                                .required(
                                                    "Password is required"
                                                ),
                                        })}
                                        onSubmit={async (data) => {
                                            await doLogin(
                                                data.email,
                                                data.password
                                            );
                                        }}
                                    >
                                        {({
                                            errors,
                                            handleBlur,
                                            handleChange,
                                            handleSubmit,
                                            isSubmitting,
                                            touched,
                                            values,
                                        }: any) => (
                                            <form onSubmit={handleSubmit}>
                                                <Grid item xs={12}>
                                                    <Button
                                                        disableElevation
                                                        fullWidth={true}
                                                        className={
                                                            classes.redButton
                                                        }
                                                        size="large"
                                                        variant="contained"
                                                    >
                                                        <img
                                                            src={Google}
                                                            alt="google"
                                                            width="20px"
                                                            className={
                                                                classes.loginIcon
                                                            }
                                                        />{" "}
                                                        Sign in with Google
                                                    </Button>
                                                </Grid>
                                                <Box mt={3} mb={1}>
                                                    <Typography
                                                        align="center"
                                                        color="textSecondary"
                                                        variant="body1"
                                                    >
                                                        or login with email
                                                        address
                                                    </Typography>
                                                </Box>
                                                <TextField
                                                    error={Boolean(
                                                        touched.email &&
                                                            errors.email
                                                    )}
                                                    fullWidth
                                                    helperText={
                                                        touched.email &&
                                                        errors.email
                                                    }
                                                    label="Email Address"
                                                    margin="normal"
                                                    name="email"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="email"
                                                    value={values.email}
                                                    variant="outlined"
                                                />
                                                <TextField
                                                    error={Boolean(
                                                        touched.password &&
                                                            errors.password
                                                    )}
                                                    fullWidth
                                                    helperText={
                                                        touched.password &&
                                                        errors.password
                                                    }
                                                    label="Password"
                                                    margin="normal"
                                                    name="password"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="password"
                                                    value={values.password}
                                                    variant="outlined"
                                                />
                                                <Box my={2}>
                                                    <Button
                                                        color="primary"
                                                        disabled={isSubmitting}
                                                        fullWidth
                                                        size="large"
                                                        type="submit"
                                                        variant="contained"
                                                    >
                                                        Sign in now
                                                    </Button>
                                                </Box>
                                            </form>
                                        )}
                                    </Formik>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid
                                        item
                                        container
                                        direction="column"
                                        alignItems="center"
                                        xs={12}
                                    >
                                        <Typography
                                            component={RouterLink}
                                            to="/login"
                                            variant="subtitle1"
                                            sx={{ textDecoration: "none" }}
                                        >
                                            Don't have an account?
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AuthCardWrapper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        // <Box
        //     display="flex"
        //     flexDirection="column"
        //     height="100%"
        //     justifyContent="center"
        // >
        //     <Container maxWidth="sm">
        //         <Formik
        //             initialValues={{
        //                 email: "fergal.moran+audioboos@gmail.com",
        //                 password: "secret",
        //             }}
        //             validationSchema={Yup.object().shape({
        //                 email: Yup.string()
        //                     .email("Must be a valid email")
        //                     .max(255)
        //                     .required("Email is required"),
        //                 password: Yup.string()
        //                     .max(255)
        //                     .required("Password is required"),
        //             })}
        //             onSubmit={async (data) => {
        //                 await doLogin(data.email, data.password);
        //             }}
        //         >
        //             {({
        //                 errors,
        //                 handleBlur,
        //                 handleChange,
        //                 handleSubmit,
        //                 isSubmitting,
        //                 touched,
        //                 values,
        //             }: any) => (
        //                 <form onSubmit={handleSubmit}>
        //                     <Box mb={3}>
        //                         <Typography color="textPrimary" variant="h2">
        //                             Sign in
        //                         </Typography>
        //                         <Typography
        //                             color="textSecondary"
        //                             gutterBottom
        //                             variant="body2"
        //                         >
        //                             Sign in on the internal platform
        //                         </Typography>
        //                     </Box>
        //                     <Grid container spacing={3}>
        //                         <Grid item xs={12} md={6}>
        //                             <Button
        //                                 color="primary"
        //                                 fullWidth
        //                                 startIcon={<FacebookIcon />}
        //                                 onClick={handleSubmit}
        //                                 size="large"
        //                                 variant="contained"
        //                             >
        //                                 Login with Facebook
        //                             </Button>
        //                         </Grid>
        //                         <Grid item xs={12} md={6}>
        //                             <Button
        //                                 fullWidth
        //                                 startIcon={<GoogleIcon />}
        //                                 onClick={handleSubmit}
        //                                 size="large"
        //                                 variant="contained"
        //                             >
        //                                 Login with Google
        //                             </Button>
        //                         </Grid>
        //                     </Grid>
        //                     <Box mt={3} mb={1}>
        //                         <Typography
        //                             align="center"
        //                             color="textSecondary"
        //                             variant="body1"
        //                         >
        //                             or login with email address
        //                         </Typography>
        //                     </Box>
        //                     <TextField
        //                         error={Boolean(touched.email && errors.email)}
        //                         fullWidth
        //                         helperText={touched.email && errors.email}
        //                         label="Email Address"
        //                         margin="normal"
        //                         name="email"
        //                         onBlur={handleBlur}
        //                         onChange={handleChange}
        //                         type="email"
        //                         value={values.email}
        //                         variant="outlined"
        //                     />
        //                     <TextField
        //                         error={Boolean(
        //                             touched.password && errors.password
        //                         )}
        //                         fullWidth
        //                         helperText={touched.password && errors.password}
        //                         label="Password"
        //                         margin="normal"
        //                         name="password"
        //                         onBlur={handleBlur}
        //                         onChange={handleChange}
        //                         type="password"
        //                         value={values.password}
        //                         variant="outlined"
        //                     />
        //                     <Box my={2}>
        //                         <Button
        //                             color="primary"
        //                             disabled={isSubmitting}
        //                             fullWidth
        //                             size="large"
        //                             type="submit"
        //                             variant="contained"
        //                         >
        //                             Sign in now
        //                         </Button>
        //                     </Box>
        //                     <Typography color="textSecondary" variant="body1">
        //                         Don&apos;t have an account?{" "}
        //                         <Link
        //                             component={RouterLink}
        //                             to="/register"
        //                             variant="h6"
        //                         >
        //                             Sign up
        //                         </Link>
        //                     </Typography>
        //                 </form>
        //             )}
        //         </Formik>
        //     </Container>
        // </Box>
    );
};

export default LoginPage;
