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

  const [beforeStyle, setBeforeStyle] = useState('before:-left-[250%]')
  const [leftBlueStyle, setLeftBlueStyle] = useState('left-0')
  const [rightBlueStyle, setRightBlueStyle] = useState('-right-[50%]')
  const [loginFormStyle, setLoginFormStyle] = useState('right-0')
  const [registerFormStyle, setRegisterFormStyle] = useState('right-0 hidden')

  const handleSignUp = () => {
    setBeforeStyle('before:left-[50%]')
    setLeftBlueStyle('-left-[50%]')
    setRightBlueStyle('right-0 delay-[0.6s]')
    setLoginFormStyle('right-[50%] hidden')
    setRegisterFormStyle('right-[50%] flex')
  }
  const handleLogin = () => {
    setBeforeStyle('before:-left-[250%]')
    setLeftBlueStyle('left-0 delay-[0.6s]')
    setRightBlueStyle('-right-[50%]')
    setLoginFormStyle('right-0')
    setRegisterFormStyle('right-0 hidden')
  }


  return (
    <div className="flex justify-center items-center p-10 h-[100vh]">
      <div className="container z-2 relative overflow-hidden w-[85vw] max-w-300 min-h-full bg-[#ffffff] rounded-2xl shadow-2xl">
        <div className={`${loginFormStyle} ease-in-out duration-[1.2s] delay-[0.6s] absolute w-[50%] h-full flex z-2 text-black bg-white items-center text-center p-10`}>
          <form className="w-full space-y-10">
            <h1 className="text-[36px]">Login</h1>
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  label="شماره دانشجویی"
                  defaultValue=""
                />
              </div>
            </Box>
          </form>
        </div>
        <div className={`${registerFormStyle} ease-in-out duration-[1.2s] delay-[0.6s] absolute w-[50%] h-full z-2 text-black bg-white items-center text-center p-10`}>
          <form className="w-full space-y-10">
            <h1 className="text-[36px]">Registration</h1>
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  label="نام"
                  defaultValue=""
                />
              </div>
              <div>
                <TextField
                  required
                  label="نام خوانوادگی"
                  defaultValue=""
                />
              </div>
              <div>
                <TextField
                  required
                  label="شماره دانشجویی"
                  defaultValue=""
                />
              </div>
            </Box>
          </form>
        </div>
        <div className={`toggle-box absolute w-full h-full before:ease-in-out before:duration-[1.8s] before:content-[''] ${beforeStyle} before:-z-1 before:left-[-250%] before:rounded-[150px] before:absolute before:bg-blue-500 before:w-[300%] before:h-[100%]`}>
          <div className={`${leftBlueStyle} ease-in-out duration-[1.2s] absolute w-[50%] h-full z-1 flex flex-col justify-center items-center space-y-4`}>
            <h1>خوش برگشتید</h1>
            <p>هنوز ثبت نام نکرده اید؟</p>
            <button onClick={handleSignUp} className="w-[160px] h-[46px] rounded-[8px] border-2 border-white">ثبت نام</button>
          </div>
          <div className={`${rightBlueStyle} ease-in-out duration-[1.2s] absolute w-[50%] h-full z-1 flex flex-col justify-center items-center space-y-4`}>
            <h1>خوش آمدید</h1>
            <p>قبلا ثبت نام کرده اید؟</p>
            <button onClick={handleLogin} className="w-[160px] h-[46px] rounded-[8px] border-2 border-white">ورود</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
