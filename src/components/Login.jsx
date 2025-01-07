import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
const Login = () => {
  return (
    <Card>
    <CardHeader>
      <CardTitle>Login</CardTitle>
      <CardDescription>to your account if you already have one</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
  
  )
}

export default Login