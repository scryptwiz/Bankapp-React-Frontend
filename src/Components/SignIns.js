import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'

const SignIns = () => {
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: '',
    }
    const onSubmit = values => {
        axios.post('http://localhost:5000/signin', values).then(res=>{
            console.log(res.data );
            if (res.data.status===true) {
                const user_token = res.data.token
                localStorage.setItem('token', user_token)
                navigate('/dashboard');
            } else if (res.data.status===false) {
                console.log(res.data.message);
            } else if (res.data.err) {
                console.log(res.data.err);
            }
        }).catch((err) => {
            console.log(err.message);
        })}
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Field Required'),
        password: Yup.string().required('Field Required!'),
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
  return (
    <>
        <div className='flex h-screen items-center justify-center'>
            <div className='flex h-full 2xl:w-4/5 w-full'>
                <div className='w-full h-full overflow-y-auto flex flex-col justify-between px-10'>
                    {/* logo */}
                    <div className='py-7 w-full'>
                        <h4 className='text-gray-700 text-2xl font-medium tracking-widest animate__animated  animate__jackInTheBox animate__slow'>Kbank</h4>
                    </div>
                    <form autoComplete='off' className='xl:w-3/12 md:w-3/6 w-full mx-auto animate__animated  animate__zoomInRight animate__slow' onSubmit={formik.handleSubmit}>
                        <div>
                            <h4 className='mb-7 font-medium text-3xl text-gray-700 pl-1 tracking-wide'>Signin</h4>
                        </div>
                        <div className='mb-4'>
                            { formik.touched.email && formik.errors.email ? <><TextField fullWidth id="outlined-basic" name="email" onChange={formik.handleChange} value={formik.values.email} error helperText={ formik.errors.email } label="E-mail" size='small' required variant="outlined" onBlur={formik.handleBlur} aria-describedby="component-error-text"/></> : <TextField fullWidth id="outlined-basic" name="email" onChange={formik.handleChange} value={formik.values.email} label="E-mail" size='small' required variant="outlined" onBlur={formik.handleBlur}/> }
                        </div>
                        <div className='mb-4'>
                            { formik.touched.password && formik.errors.password ? <><TextField fullWidth id="outlined-basic" name="password" onChange={formik.handleChange} type='password' value={formik.values.password} error helperText={ formik.errors.password } label="Password" size='small' required variant="outlined" onBlur={formik.handleBlur} aria-describedby="component-error-text"/> </> : <TextField fullWidth id="outlined-basic" name="password" onChange={formik.handleChange} value={formik.values.password} type='password' label="Password" size='small' required variant="outlined" onBlur={formik.handleBlur}/> }
                        </div>
                        <div className='mb-5'>
                            <Button variant="contained" size='large' type='submit' name='submit' fullWidth>Signin</Button>
                        </div>
                        <div>
                            <p className='text-sm text-gray-600 text-center tracking-wider'>Do no have an account? <Link to="/signup" className='underline text-blue-600 font-medium'>Signup</Link></p>
                        </div>
                    </form>
                    <div className='py-5 flex justify-between'>
                        <p className='text-xs tracking-widest md:block hidden'>@ Copyright 2022</p>
                        <nav>
                            <Link to='#' className='text-blue-600 text-xs'>Terms</Link>
                            <Link to='#' className='text-blue-600 ml-3 md:ml-5 md:text-sm text-xs'>Privacy</Link>
                            <Link to='#' className='text-blue-600 ml-3 md:ml-5 md:text-sm text-xs'>Security</Link>
                            <Link to='#' className='text-blue-600 ml-3 md:ml-5 md:text-sm text-xs'>Get in Touch</Link>
                        </nav>
                    </div>
                </div>
                {/* <div className='md:w-6/12 h-full md:block hidden' id='rights_bg'></div> */}
            </div>
        </div>
    </>
  )
}

export default SignIns