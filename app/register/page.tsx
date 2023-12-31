
import React from 'react'

const Register = () => {
  return (
    <main>
      <h1>Register</h1>
      <form action="/api/register" method="post">
        <label htmlFor="">Name</label>
        <br />
        <input type="text" name="name" id="" />
        <br />
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

export default Register