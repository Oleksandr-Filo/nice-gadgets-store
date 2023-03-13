import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { validateEmail } from '../../helpers/validateEmail';
import { validatePassword } from '../../helpers/validatePassword';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert } from '@mui/material';
import s from './RegisterPage.module.scss';
import { usePageError } from '../../hooks/usePageError';
import { authService } from '../../api/services/authService';

const primaryColor = '#313237';
const secondaryColor = '#89939a';

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: primaryColor,
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: primaryColor,
    },
  },
});

const theme = createTheme();

export const RegisterPage: React.FC = React.memo(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [registrationError, setRegistrationError] = usePageError('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    if (emailValidationError) {
      setEmailError(emailValidationError);

      return;
    }

    if (passwordValidationError) {
      setPasswordError(passwordValidationError);

      return;
    }

    setEmailError('');
    setPasswordError('');

    setIsLoading(true);

    try {
      await authService.register({ email, password });

      setRegistered(true);
    } catch (error) {
      setRegistrationError('Unable to register');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEmail(event.target.value || '');
    setEmailError('');
  };

  const handleChangePassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPassword(event.target.value || '');
    setPasswordError('');
  };

  if (registered) {
    return (
      <section className={s.registerPage}>
        <div className="container">
          <h1 className={s.registerPage__title}>Check your email</h1>

          <p className={s.registerPage__text}>
            We have sent you an email with the activation link
          </p>
        </div>
      </section >
    );
  }

  return (
    <main className={s.registerPage}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1 className={s.registerPage__title}>Sign up</h1>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <CustomTextField
                error={!!emailError}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleChangeEmail}
                helperText={(
                  emailError
                    ? `${emailError}`
                    : ''
                )}
              />

              <CustomTextField
                error={!!passwordError}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handleChangePassword}
                helperText={(
                  passwordError
                    ? `${passwordError}`
                    : ''
                )}
              />

              <LoadingButton
                loading={isLoading}
                type="submit"
                fullWidth
                variant="contained"
                disabled={isLoading}
                sx={[
                  { mt: 3, mb: 2, backgroundColor: primaryColor },
                  {
                    '&:hover': {
                      backgroundColor: primaryColor,
                      boxShadow: "0px 3px 13px rgba(23, 32, 49, 0.4)",
                    },
                  }
                ]}
              >
                Sign Up
              </LoadingButton>

              <NavLink to="/login" style={() => ({ color: secondaryColor })}>
                Already have an account? Sign in
              </NavLink>

              {!!registrationError && (
                <Alert
                  severity="error"
                  sx={{
                    mt: 1,
                  }}
                >
                  {registrationError}
                </Alert>
              )}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </main>
  );
});
