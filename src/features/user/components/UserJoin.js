import React from 'react';
import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { Button } from '@mui/material';


export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    user_email: '',
    username:'',
    password: '',
    user_name: '',
    user_birthday: '',
    user_sex:'',
    user_phone:'',
    user_address:'',
    user_vaccinated:'',
    vaccine_type:''
  })
  const handleChange = e => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]:value
    })
    console.log(e.target.name);
    console.log(setUser);
  }

  const handleSubmit=e=>{
    e.preventDefault();
    console.log(`가입 : ${JSON.stringify(user)}`)
    RegisterForm({user})
    .then(res=>{alert(`가입 완료: ${res.data.result}`)})
    .catch(err=>{alert(`가입 실패: ${err}`)})
  }

  // const userJoin=joinRequest=>axios.post(`${SERVER}/??`, JSON.stringify(joinRequest),{headers})
  
//   const SERVER='http://127.0.0.1:8000/api/user/join'
// // ????

  const{user_email, username, password, 
    user_name, user_birthday, user_sex, user_phone, 
    user_address, user_vaccinated, vaccine_type}=`user`
  

  const RegisterSchema = Yup.object().shape({
    user_email: Yup.string().email('메일 형식에 맞게 입력해주세요').required('메일 주소를 입력해주세요'),
    password: Yup.string().required('비밀번호 6 ~ 12자 이내로 작성해주세요').min(6, '6 ~ 12자 이내로 작성해주세요'),  
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다'),
    username: Yup.string().required('아이디 6 ~ 12자 이내로 작성해주세요').min(6, '6 ~ 12자 이내로 작성해주세요'),
    user_birthday: Yup.string().required('생년월일 8자리 입력해주세요').min(8),
    user_sex: Yup.string().required('m / f'),
    user_phone: Yup.string().required('연락처 11자리 입력해주세요'),
    user_address: Yup.string().required(),
    user_vaccinated: Yup.string().required('yes/ no 백신 접종완료 여부를 알려주세요'),
    vaccine_type: Yup.string('대중적인 명칭으로 기입해주세요').max(30)        
    });

  const formik = useFormik({
    initialValues: {
      user_email: '',
      username:'',
      password: '',
      user_name: '',
      user_birthday: '',
      user_sex:'',
      user_phone:'',
      user_address:'',
      user_vaccinated:'',
      vaccine_type:''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/', { replace: true });
    }
  });

  const { errors, touched, isSubmitting, getFieldProps } = formik;

  return (
    <div align="center" style={{ display: "inline-block" }}>
      <h1><b>회원 가입</b></h1>
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                fullWidth
                label="이름"
                {...getFieldProps('user_name')}
                error={Boolean(touched.user_name && errors.user_name)}
                helperText={touched.user_name && errors.user_name}
              />
  
              <TextField
                fullWidth
                label="생년월일"
                {...getFieldProps('user_birthday')}
                error={Boolean(touched.user_birthday && errors.user_birthday)}
                helperText={touched.user_birthday && errors.user_birthday}
              />
              <TextField
                fullWidth
                label="성별"
                {...getFieldProps('user_sex')}
                error={Boolean(touched.user_sex && errors.user_sex)}
                helperText={touched.user_sex && errors.user_sex}
                // 성별은 radio? 
              /></Stack>
        <TextField
              fullWidth
              autoComplete="user_email"
              type="email"
              label="이메일=로그인 아이디"
              {...getFieldProps('user_email')}
              error={Boolean(touched.user_email && errors.user_email)}
              helperText={touched.user_email && errors.user_email}
            />
            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="6~12자리 비밀번호"
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
            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="비밀번호 확인"
              {...getFieldProps('password')}  // how to make pw chk?
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
              // 확인!!
            />
            
              
              <TextField
                fullWidth
                label="01000000000"
                {...getFieldProps('user_phone')}
                error={Boolean(touched.user_phone && errors.user_phone)}
                helperText={touched.user_phone && errors.user_phone}
              />
            
              <TextField
                fullWidth
                label="주소지"
                {...getFieldProps('user_address')}
                error={Boolean(touched.user_address && errors.user_address)}
                helperText={touched.user_address && errors.user_address}
              />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>             
              <TextField
                fullWidth
                label="백신접종 여부 (Y/N)"
                {...getFieldProps('user_vaccinated')}
                error={Boolean(touched.user_vaccinated && errors.user_vaccinated)}
                helperText={touched.user_vaccinated && errors.user_vaccinated}
              />
  
              <TextField
                fullWidth
                label="접종 백신 종류"
                {...getFieldProps('vaccine_type')}
                error={Boolean(touched.vaccine_type && errors.vaccine_type)}
                helperText={touched.vaccine_type && errors.vaccine_type}
              /></Stack>          
            
            <Button variant="outlined"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              onClick={()=>{
                console.log('가입 완료.')
            }}>
              회원 가입
            </Button>
        </Stack>
      </Form>
    </FormikProvider>
    </div>
  );
}