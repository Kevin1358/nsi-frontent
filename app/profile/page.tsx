import React from 'react'
import { cookies } from 'next/headers';
const page = async () => {
    interface userProfile{
        id: any,
        name: any,
        email: any,
        email_verified_at: any,
        created_at: any,
        updated_at: any
    }
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    const getUserReq = await fetch("https://book-crud-service-6dmqxfovfq-et.a.run.app/api/user",{
        method:"get",
        headers:{Authorization: 'Bearer '+token?.value, accept: "application/json"}
    })
    const responseText:userProfile = await getUserReq.json();
    console.log(responseText);
  return (
    <main>
      <h1>Profile</h1>
      <table>
        <tbody>
          <tr>
            <td>Id</td>
            <td><input type="text" readOnly defaultValue={responseText.id}/></td>
          </tr>
          <tr>
            <td>Name</td>
            <td><input type="text" readOnly defaultValue={responseText.name}/></td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td><input type="text" readOnly defaultValue={responseText.email}/></td>
          </tr>
          <tr>
            <td>E-mail Verified Time</td>
            <td><input type="datetime-local" readOnly defaultValue={responseText.email_verified_at.split(".")[0]}/></td>
          </tr>
          <tr>
            <td>Created at</td>
            <td><input type="datetime-local" readOnly defaultValue={responseText.created_at.split(".")[0]}/></td>
          </tr>
          <tr>
            <td>Updated at</td>
            <td><input type="datetime-local" readOnly defaultValue={responseText.updated_at.split(".")[0]}/></td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default page