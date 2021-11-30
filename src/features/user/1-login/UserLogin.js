import React, { useState } from 'react';
import { Link as RouterLink, useNavigate, useHistory  } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import * as Yup from 'yup';
import {} from 'formik'
import {
    Link,
    Stack,
    Checkbox,
    TextField,
    IconButton,
    InputAdornment,
    FormControlLabel
  } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export default function UserLogin() {
    // const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [login, setLogin] = useState({})
    const {username, password} = login
    const navigate = useNavigate()

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('메일 형식에 맞게 입력해주세요').required('메일 주소를 입력해주세요'),
        password: Yup.string().required('비밀번호를 입력해주세요')
    })
    const formik = useFormik({
        initialValues: {
            email: "",
            password:"",
            remember: true
        },
        validationSchema: LoginSchema,
        onSubmit: () =>{
            // navigate('/', {replace: true});
            // navigate=클릭하면 메인페이지 뜨게 주소 넣기
            // RETRY
        }
    })
    const {errors, touched, values, isSubmitting, handleSubmit, getFieldProps}=formik;

    const handleShowPassword=()=>{
        setShowPassword((show)=>!show);
    }

    return(
        <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#">
            비밀번호 찾기
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          로그인
        </LoadingButton>
      </Form>
    </FormikProvider>
    )

}