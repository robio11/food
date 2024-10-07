"use client"
import {Loader2, LockKeyhole, Mail, Phone, User } from 'lucide-react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
// import { useNavigate } from 'react-router'
import { Separator } from '../components/ui/separator'
import { Link } from 'react-router-dom'
import { ChangeEvent, FormEvent, useState } from 'react'

interface SignupInputState {
  email : string;
  password:string;
  fullName : string;
  phoneNumber:string;
}

const Signup = () => {
  const [input,setInput] = useState<SignupInputState>({
    email:"",
    password:"",
    fullName:"",
    phoneNumber:""
  });
  const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target;
    setInput({...input,[name]:value});
  }
  const singupSumbitHandler = (e:FormEvent) => {
    e.preventDefault();
    console.log(input);
  }

  const loading = false;
    // const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        action=""
        className="md:border md:p-8 max-w-md border-gray-200 rounded-lg mx-4 w-full"
        onSubmit={singupSumbitHandler}
      >
        <div>
          <h1 className="font-bold text-2xl">Food Chain</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="name"
              placeholder="Fullname"
              className="pl-10 focus-visible:ring-1"
              onChange={changeEventHandler}
              name='fullName'
              value={input.fullName}
            />
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10 focus-visible:ring-1"
              onChange={changeEventHandler}
              name='email'
              value={input.email}
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="PhoneNumber"
              className="pl-10 focus-visible:ring-1"
              onChange={changeEventHandler}
              name='phoneNumber'
              value={input.phoneNumber}
            />
            <Phone className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Enter your password"
              className="pl-10 focus-visible:ring-1"
              onChange={changeEventHandler}
              name='password'
              value={input.password}
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          </div>
        </div>
       <div>
        {loading ? (
          <Button disabled className="bg-Orange hover:bg-hoverOrange w-full">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{' '}
          </Button>
        ) : (
          <Button type="submit" className="bg-Orange hover:bg-hoverOrange w-full">
            SignUp
          </Button>
        )}
        </div>
        <Separator/>
        <p className="mt-2" >
          Already have an account {""}
          <Link to="/login" className="text-blue-500" >Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Signup
