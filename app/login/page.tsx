'use client'
import React from 'react'
function login(ev:any){

}
const LoginPage = () => {
  return (
    <main>
      <h1>Login</h1>
      <form action="/api/login" method="post">
        <label htmlFor="">E-Mail</label>
        <br />
        <input type="email" name="email" id="" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" name="password" id="" />
        <br />
        <button type="submit">Login</button>
      </form>
    </main>
  )
}

export default LoginPage