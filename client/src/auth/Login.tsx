"use client"
import { Loader2, LockKeyhole, Mail } from 'lucide-react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
// import { useNavigate } from 'react-router'
import { Separator } from '../components/ui/separator'
import { Link } from 'react-router-dom'
import { ChangeEvent, FormEvent, useState } from 'react'
import { LoginInputState, userLoginSchema } from '../schema/userSchema'

// interface LoginInputState {
//   email : string;
//   password:string;
// }
// interface LoginInputWithAge extends LoginInputState {
//   age : string;
// }
// interface LoginInputState2 {
//   email : string;
//   password:string;
// }

const Login = () => {
  const [input,setInput] = useState<LoginInputState>({
    email:"",
    password:"",
  });
  const [errors,setErrors] = useState<Partial<LoginInputState>>({});
  const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target;
    setInput({...input,[name]:value});
  }
  const loginSumbitHandler = (e:FormEvent) => {
    e.preventDefault();
    const result = userLoginSchema.safeParse(input);
    if(!result.success){
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginInputState>);
      return;
    }
    console.log(input);
  }

  const loading = false;
  // const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
      onSubmit={loginSumbitHandler}
        action=""
        className="md:border md:p-8 max-w-md border-gray-200 rounded-lg mx-4 w-full"
      >
        <div className="mb-4 text-center" >
          <h1 className="font-bold text-2xl">Food Chain</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="pl-10 focus-visible:ring-1"
              value={input.email}
              onChange={changeEventHandler}
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {errors && <span className="text-sm text-red-500" >{errors.email}</span>}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              className="pl-10 focus-visible:ring-1"
              value={input.password}
              onChange={changeEventHandler}
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {errors && <span className="text-sm text-red-500" >{errors.password}</span>}
          </div>
        </div>
        <div className="mb-10" >
        {loading ? (
          <Button disabled className="bg-Orange hover:bg-hoverOrange w-full">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{' '}
          </Button>
        ) : (
          <Button type="submit" className="bg-Orange hover:bg-hoverOrange w-full">
            Login
          </Button>
        )}
        <div>
          <Link className="hover:text-blue-500 hover:underline font-semibold text-sm" to="/forgetpassword" >Forget Password</Link>
        </div>
        </div>
        <Separator/>
        <p className="mt-2 font-semibold">
          Don't have an account {""}
          <Link to="/signup" className="text-blue-500 underline" >Signup</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
