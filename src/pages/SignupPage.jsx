import React, { useState } from 'react';
import logoBlue from '/assets/Group blue.png';
// import icons
import  { CiRead, CiUnread } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupValidationSchema } from '../validation/SignupValidations';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    // state for create password and confirm password icons
    const [ isCreatePasswordVisible, setIsCreatePasswordVisible ] = useState( false );
    const [ isConfirmPasswordVisible, setIsConfirmPasswordVisible ] = useState( false );

    // state for inputs
    // const [ inputs, setInputs ] = useState({
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    // });

    // const handleChange = (e) => {

    // }

    const form = useForm({
        resolver: zodResolver(signupValidationSchema)
    });

    const { register, handleSubmit, formState: {errors}} = form;

    const submitForm = () => console.log('Form submitted successfully!');
    

  return (
    <div className='flex justify-center items-center h-screen bg-[#fffaff] relative'>
      <div className='flex flex-col justify-center items-center w-[660px] rounded-lg sm:shadow-none shadow-xl py-10'>
        {/* header */}
        <div className='flex flex-col justify-between items-center gap-12'>
            <div>
                <img src={ logoBlue } alt="Ego 2024" />
            </div>
            <div>
                <h3 className='font-semibold text-2xl text-[#2e2e2e] mb-2 text-center'>Welcome to Ego</h3>
                <p className='text-lg text-[#6e6e6e]'>Let's create your account</p>
            </div>
        </div>
        {/* form */}
        <form method="POST" onSubmit={handleSubmit(submitForm)} className='w-[340px]'>
            <div>
                <input 
                type="email" 
                name="email"
                {...register('email')}
                id="email" 
                className={`${errors.email ? 'focus:outline-red-600' : 'focus:outline-[#3f3fd9]'} h-11 border rounded-lg shadow-sm w-full px-4 placeholder:text-[#6f6f6f] mt-6 outline-none`}
                placeholder='Enter your email' 
                />
                {errors.email && (
                    <p className='text-xs text-red-600 mt-2.5 text-center'>{ errors.email.message }</p>
                )}
            </div>
            <div className='relative'>
                <input
                type={ isCreatePasswordVisible ? 'text' : 'password' } 
                name="password" 
                {...register('password')}
                id="createPassword"
                className={`${errors.email ? 'focus:outline-red-600' : 'focus:outline-[#3f3fd9]'} h-11 border rounded-lg shadow-sm w-full px-4 placeholder:text-[#6f6f6f] mt-6 outline-none`}
                placeholder='Create password'  
                />
                <span className='absolute right-2 bottom-3 text-2xl text-[#6f6f6f]' onClick={() => setIsCreatePasswordVisible(!isCreatePasswordVisible)}>
                    { isCreatePasswordVisible ? <CiRead/> : <CiUnread/> }
                </span>
            </div>
            {/* REQUIREMENTS */}
            <section className='flex justify-between items-center mt-4'>
                <div className='w-[75px] h-14 rounded-lg py-1 px-2 bg-[#d1fadf]'>
                    <h6 className='text-lg font-bold text-[#1b1b5b] text-center'>8+</h6>
                    <p className='text-xs text-[#6e6e6e]'>Characters</p>
                </div>
                <div className='w-[75px] h-14 rounded-lg py-1 px-2'>
                    <h6 className='text-lg font-bold text-[#1b1b5b] text-center'>AA</h6>
                    <p className='text-xs text-[#6e6e6e]'>Uppercase</p>
                </div>
                <div className='w-[75px] h-14 rounded-lg py-1 px-2'>
                    <h6 className='text-lg font-bold text-[#1b1b5b] text-center'>aa</h6>
                    <p className='text-xs text-[#6e6e6e]'>Lowercase</p>
                </div>
                <div className='w-[75px] h-14 rounded-lg py-1 px-2'>
                    <h6 className='text-lg font-bold text-[#1b1b5b] text-center'>000</h6>
                    <p className='text-xs text-[#6e6e6e]'>Numbers</p>
                </div>
            </section>
            <div className='relative'>
                <input 
                type={ isConfirmPasswordVisible ? 'text' : 'password' } 
                name="password" 
                // value={ inputs.confirmPassword }
                id="confirmPassword"
                className='h-11 border rounded-lg shadow-sm w-full px-4 placeholder:text-[#6f6f6f] mt-6 outline-none focus:outline-[#3f3fd9]'
                placeholder='Confirm password' 
                />
                <span className='absolute right-2 bottom-3 text-2xl text-[#6f6f6f]' onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                    { isConfirmPasswordVisible ? <CiRead/> : <CiUnread/> }
                </span>
            </div>
            <button 
            onSubmit={submitForm}
            className='bg-[#3f3fd9] hover:bg-[#4646f9] text-white rounded-full h-12 w-full px-6 gap-2 flex items-center justify-center mt-6'>Create account</button>
        </form>
      </div>
      <Link to='/' className='absolute top-4 left-4 text-3xl text-[#475467]'><MdClose/></Link>
    </div>
  )
}

export default LoginPage
