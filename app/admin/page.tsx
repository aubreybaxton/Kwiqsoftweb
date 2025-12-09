"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Mail,Lock } from 'lucide-react';
import { useLogin } from '@/hooks/UseLogin';


type Inputs={
  email:string,
  password:string
}


function Admin() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();


  const Login = useLogin();

  const onSubmit:SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const formData = new FormData()
    formData.append('email', data.email);
    formData.append('password', data.password);
    Login.mutate({formData: formData},{
      onSuccess: (data) => {
        console.log('Login Success:', data);
      },
      onError: (error) => {
        console.log('Login Error:', error);
      }
    });
  }


  return (
    <div className=''>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            Welcome to Admin Panel
          </Link>
          <div className="w-full bg-white rounded-xl shadow-lg md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign In 
              </h1>
              <hr className='border border-2'/>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)} action="#">
                <div>
                  <label htmlFor="email" className="flex items-center mb-2 text-sm font-medium text-gray-900 "><Mail /> Email</label>
                  <input type="email" id="email" {...register('email')} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" />
                </div>
                <div>
                  <label htmlFor="password" className="flex items-center mb-2 text-sm font-medium text-gray-900 "> <Lock />Password</label>
                  <input type="password"  id="password" {...register('password')} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2" />
                </div>
                
                <button type="submit" className="w-full border text-white bg-purple-500 hover:bg-purple-700 rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admin;