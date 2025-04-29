'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { Box, TextField } from "@mui/material"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { z } from "zod"
import { userSchema } from './validationSchemas'
import { useForm } from "react-hook-form"

type userData = z.infer<typeof userSchema>

const SignInPage = () => {

  const router = useRouter()
      
  const {register, handleSubmit, formState: { errors, isSubmitted }} = useForm<userData>({
    resolver: zodResolver(userSchema)
  })

  const [error, setError] = useState('')

  const onSubmit = handleSubmit( async(data) => {
    try {
    } catch (error) {
      setError('An unexpected error occurred.')
    }
  })

  return (
    <div className="flex justify-center items-center p-20 h-[100vh]">
      <div className="z-2 overflow-hidden relative w-[85vw] max-w-300 min-h-full bg-[#ffffff] rounded-2xl shadow-2xl">
        <div className="p-10 absolute w-[50%] h-full right-0 text-black bg-white flex items-center text-center">
          <form action="" className="w-full space-y-10">
            <h1 className="text-[36px]">Login</h1>
            <div>
              <input type="text" placeholder="username" className="p-2 rounded-[4px] w-full bg-[#e4e0e0] border-2"/>
            </div>
          </form>
        </div>
        <div className="toggle-box absolute w-full h-full before:content-[''] before:-z-1 before:left-[-250%] before:rounded-[150px] before:absolute before:bg-blue-500 before:w-[300%] before:h-[100%]">
          <div className="w-[50%] h-full z-2 flex flex-col justify-center items-center space-y-4">
            <h1>سلام، خوش آمدید</h1>
            <p>هنوز ثبت نام نکرده اید؟</p>
            <button className="w-[160px] h-[46px] rounded-[8px] border-2 border-white">ثبت نام</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
