import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Form = () => {

  const { handleSubmit, control } = useForm();

  const onSubmit = (data,e) => {
    console.log(data);
  };
  
  return (
    <Box >
      <Grid container rowSpacing={1} spacing={2}>
        <Grid item xl={4} lg={4} md={4} sm={3} xs={12}>
          <Item>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="First Name"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'First name required', minLength: { value: 6, message: "minimum 6 characters required" } }}
              />
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Last Name"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Last name required', minLength: { value: 6, message: "minimum 6 characters required" } }}
              />
               <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Phone Number"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Email required', pattern: { value: /^([+]\d{2})?\d{10}$/, message: "pattern should match" } }}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Email"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="email"
                  />
                )}
                rules={{ required: 'Email required', pattern: { value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, message: "pattern should match" } }}
              />
              <Controller
                name="confirmEmail"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Confirm Email"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="email"

                  />
                )}
                rules={{ required: 'Confirm Email required', pattern: { value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, message: "pattern should match" } }}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Password"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="password"

                  />
                )}
                rules={{
                  required: 'Password required', pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,32}$/,
                    message: `\nAt least 1 uppercase character.
        \nAt least 1 lowercase character.
        \nAt least 1 digit.
        \nAt least 1 special character.
        \nMinimum 8 characters.` }
                }}
              />
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    label="Confirm Password"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="password"
                  />
                )}
                rules={{
                  required: 'Confirm Password required', pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,32}$/, message: `At least 1 uppercase character.
        At least 1 lowercase character.
        At least 1 digit.
        At least 1 special character.
        Minimum 8 characters. ` }
                }}
              /><br />
              I am a developer:
              <FormControlLabel
                control={<Controller
                  name="checkbox"
                  control={control}
                  defaultChecked
                  render={({ field }) => <Checkbox {...field} label="dfasd" />}
                />}
              />
              <div>
                <Button type="submit" variant="contained" color="primary">
                  Signup
                </Button>
              </div>
            </form>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;