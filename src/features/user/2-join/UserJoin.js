import React, { useState } from 'react'
import * as Yup from 'yup';

import axios from 'axios'
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export default function UserJoin(){
    // const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate=useNavigate()
    const SERVER=''
    const[join,setJoin]=useState({})
    const{}=join
    const handleChange =e=>{
        const{value,name}=e.target
        setJoin({...join,[name]:value})
    }
    const userJoin=joinRequest=>axios.post(`${SERVER}/??`, JSON.stringify(joinRequest),{headers})
    const headers = {}
    // const handleSubmit=e=>{}

    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().required('이름'),
        lastName: Yup.string().required('성'),
        email: Yup.string().email('메일 형식에 맞게 입력해주세요').required('메일 주소를 입력해주세요'),
        password: Yup.string().required('비밀번호를 입력해주세요')
      })
      const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        },
        validationSchema: RegisterSchema,
        onSubmit: () => {
          // navigate('/', { replace: true });
          // navigate=클릭하면 메인페이지 뜨게 주소 넣기
                      // RETRY
        }
      })
      const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

      return (
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  label="이름"
                  {...getFieldProps('firstName')}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
    
                <TextField
                  fullWidth
                  label="성"
                  {...getFieldProps('lastName')}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Stack>
    
              <TextField
                fullWidth
                autoComplete="username"
                type="email"
                label="메일주소"
                {...getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
    
              <TextField
                fullWidth
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                label="비밀번호"
                {...getFieldProps('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                        <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
    
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                가입 신청
              </LoadingButton>
            </Stack>
          </Form>
        </FormikProvider>

    )
}