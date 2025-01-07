import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'
import { BeatLoader } from 'react-spinners'
import Error from './error'
  
const Login = () => {
    const [error,setError]=useState();
   const[formData,setFormdata]= useState({
    email:'',
    password:" "
   });

   const handleInputChange=(e)=>{
   const[name,value] =e.target;
   setFormdata((prevState)=>({
    ...prevState,
    [name]:value,
   }));
   
};
const BtnLogin=()=>{

}

  return (
    <Card>
    <CardHeader>
      <CardTitle>Login</CardTitle>
      <CardDescription>to your account if you already have one</CardDescription>
      <Error message={"some error"} />

    </CardHeader>
    <CardContent className="space-y-2">
        <div className='space-y-1'>
            <input type="email" name='email' placeholder="enter Email" onChange={handleInputChange} className='w-full p-2 capitalize'/>
            <Error message={"some error"} />
        </div>
        <div className='space-y-1'>
            <input type="password" name='password' placeholder="enter password" onChange={handleInputChange} className='w-full p-2 capitalize'/>
            <Error message={"some error"} />

        </div>
    </CardContent>
    <CardFooter>
      <Button onClick={BtnLogin}>
        {true ?<BeatLoader/>:" Login"}
        </Button>
    </CardFooter>
  </Card>
  
  )
}

export default Login