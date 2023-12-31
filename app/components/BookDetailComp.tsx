'use client'
import React, { ReactNode } from 'react'
interface BookDetailCL{
  title:string;
  bookDetail:any
}

const BookDetailComp = (props:{prop:BookDetailCL}) => {
  const bookId:string = props.prop.bookDetail.id;
  const target = "/api/edit/?bookid="+bookId;
  function getCookie(name:string) {
    const value = `; ${document.cookie}`;
    const parts:any = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  function saveChange(ev:any){
    ev.preventDefault();
    const body = JSON.stringify(Object.fromEntries(new FormData(ev.target)));
    fetch(target, 
    {
      
      method: "put",
      headers: {Authorization: 'Bearer '+getCookie("token")},
      body:body,
    })
    .then((result)=>{
      console.log(result);
    })
  }
  console.log(props);
  return (
    <main>
      <h1>{props.prop.title}</h1>
    <form onSubmit={saveChange} method="post">
      <table>
        <tbody>
          <tr>
            <td>isbn</td>
            <td><input type="text" name="isbn" defaultValue={props.prop.bookDetail.isbn}/></td>
          </tr>
          <tr>
            <td>title</td>
            <td><input type="text" name="title" defaultValue={props.prop.bookDetail.title}/></td>
          </tr>
          <tr>
            <td>subtitle</td>
            <td><input type="text" name="subtitle" defaultValue={props.prop.bookDetail.subtitle}/></td>
          </tr>
          <tr>
            <td>author</td>
            <td><input type="text" name="author" defaultValue={props.prop.bookDetail.author}/></td>
          </tr>
          <tr>
            <td>published</td>
            <td><input type="datetime-local" name="published" defaultValue={props.prop.bookDetail.published}/></td>
          </tr>
          <tr>
            <td>publisher</td>
            <td><input type="text" name="publisher" defaultValue={props.prop.bookDetail.publisher}/></td>
          </tr>
          <tr>
            <td>pages</td>
            <td><input type="number" name="pages" defaultValue={props.prop.bookDetail.pages}/></td>
          </tr>
          <tr>
            <td>description</td>
            <td><input type="text" name="description" defaultValue={props.prop.bookDetail.description}/></td>
          </tr>
          <tr>
            <td>website</td>
            <td><input type="text" name="website" defaultValue={props.prop.bookDetail.website}/></td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th colSpan={2}>Action</th>
          </tr>
          <tr>
            <td><button type="submit">Save Change</button></td>
            <td><button type='button' onClick={(ev)=>{
              ev.preventDefault;
              location.href="/api/deleteBook?bookid="+bookId;
              }}>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </form>
    </main>
  )
}

export default BookDetailComp