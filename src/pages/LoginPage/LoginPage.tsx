import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { validateEmail } from '../../helpers/validateEmail';
import { validatePassword } from '../../helpers/validatePassword';

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

export const LoginPage: React.FC = React.memo(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>

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

            <Button
              type="submit"
              fullWidth
              variant="contained"
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
              Sign In
            </Button>

            <NavLink to="/register" style={() => ({ color: secondaryColor })}>
              Don't have an account? Sign Up
            </NavLink>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
});
