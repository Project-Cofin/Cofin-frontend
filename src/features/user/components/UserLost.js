import React, {useState} from 'react';
import * as Yup from 'yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
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
import {UserPage} from 'features/user'

export default function UserLost(){

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const LostSchema = Yup.object().shape({
        user_email: Yup.string().email().required('*필수 항목'),
        // user_phone: Yup.string().required('*필수 항목')
        // because user/views.py searches by user_email only
      });
    const formik = useFormik({
        initialValues: {
            user_email: ''           
            // user_phone:'',
    },
    validationSchema: LostSchema,
    onSubmit: () => {
        // need pop up with id/pw info
        navigate({ UserPage }, { replace: true });        
    }});
    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

    return(
        <div align="center" style={{ display: "inline-block" }}>
                <h2>PW 찾기</h2>
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <TextField
                            fullWidth
                            autoComplete="user_email"
                            type="email"
                            label="이메일"
                            {...getFieldProps('email')}
                            error={Boolean(touched.user_email && errors.user_email)}
                            helperText={touched.user_email && errors.user_email}
                        />
                        {/* <TextField
                            fullWidth
                            label="연락처"
                            {...getFieldProps('user_phone')}
                            error={Boolean(touched.user_phone && errors.user_phone)}
                            helperText={touched.user_phone && errors.user_phone}
                        />*/}
                        <LoadingButton
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            loading={isSubmitting}>
                            PW 찾기
                        </LoadingButton>        
                    </Stack>
                </Form>
            </FormikProvider>
        </div>
    );
}
