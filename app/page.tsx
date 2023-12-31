import React, { ReactElement } from 'react'
import { cookies } from 'next/headers';
const Home = () => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  var button:ReactElement[];
  console.log(token?.value)
  if(token?.value === undefined){
    return (
      <main>
        <h1>Home</h1>
        <br />
        <a href="" className="linkInactive">Books List</a>
        <br />
        <a href="" className="linkInactive">Profile</a>
        <br />
        <a href="/login" className="linkActive">Login</a>
        <br />
        <a href="/register" className="linkActive">Register</a>
        <br />
        <a href="" className="linkInactive">Logout</a>
      </main>
    )
  }else{
    return (
      <main>
        <h1>Home</h1>
        <br />
        <a href="/books" className="linkActive">Books List</a>
        <br />
        <a href="/profile" className="linkActive">Profile</a>
        <br />
        <a href="" className="linkInactive">Login</a>
        <br />
        <a href="" className="linkInactive">Register</a>
        <br />
        <a href="/api/logout" className="linkActive">Logout</a>
      </main>
    )
  }
  
}

export default Home