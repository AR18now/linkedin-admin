import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import axios from 'axios'; // Import axios
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  Container,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';

const AuthPages = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hardcodedEmail = 'ali@example.com';
    const hardcodedPassword = '12345678';

    // Check for hardcoded credentials
    if (
      formData.email === hardcodedEmail &&
      formData.password === hardcodedPassword
    ) {
      setUser({ email: hardcodedEmail }); // Simulate a user object
      alert('User logged in successfully (hardcoded)!');
      setIsAuthenticated(true);
      return;
    }

    try {
      // If not hardcoded, proceed with API call
      const response = await axios.post(
        'http://localhost:5000/api/users/login', // Assuming you have a POST endpoint for login
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.data) {
        setUser(response.data);
        alert('User logged in successfully!');
        setIsAuthenticated(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'User not found');
      setOpenSnackbar(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const closeSnackbar = () => {
    setOpenSnackbar(false);
    setError('');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#bbdefb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            backgroundColor: '#e3f2fd',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" align="center" gutterBottom sx={{ color: '#1e88e5' }}>
            Admin Login
          </Typography>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ color: '#1e88e5', marginBottom: '20px' }}
          >
            Enter your email and password.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <TextField
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#fff',
                  borderRadius: '8px',
                },
              }}
            />
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  background: '#fff',
                  borderRadius: '8px',
                },
              }}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                padding: '12px',
                background: '#1976d2',
                '&:hover': {
                  background: '#ff0077',
                },
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={closeSnackbar}>
        <Alert severity="error" onClose={closeSnackbar}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AuthPages;
