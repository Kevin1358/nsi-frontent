
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { cookies } from 'next/headers';
import { renderToHTML } from 'next/dist/server/render';
const Books = async ({searchParams}:any)=>{
    const page = searchParams.page;
    interface Book{
      id: number;
      user_id: number;
      isbn: string;
      title:string;
      subtitle:string;
      author:string;
      published:string;
      publisher:string;
      page:number;
      description:string;
      website:string;
      created_at:string;
      updated_at:string;
    }
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    var target = 'https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books';
    if(page!==undefined){
      target += '?page='+page;
    }
    var getBooks = await fetch(target, {
      headers: {Authorization: 'Bearer '+token?.value}
    })
    const json =await getBooks.json();
    const Books:Book[] = json.data;
    const Links:any = json.links;
    console.log(target);
    if(getBooks.status != 200){
      return(
        <main>
          <h1>Login Requiered</h1>
        </main>
      )
    }
    //.then(json => console.log(json))
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Daftar Buku</h1>
        <table>
          <tbody>
            <tr>
              <th colSpan={2}>Tambah Buku</th>
            </tr>
            <tr>
              <td colSpan={2}><a href="/add-book">Tambah Buku</a></td>
            </tr>
            <tr>
              <th>Title</th>
              <th>Detail</th>
            </tr>
            {Books.map(book=>
              <tr>
                <td>{book.title}</td>
                <td><a href={"/books/"+book.id}>Detail</a></td>
              </tr>
              )}
              <tr>
                <th>Page</th>
                <th>Go</th>
              </tr>
            {Links.map((link:any)=>{
              var linkString = new String(link.url);
              var page = "/books?page="+linkString[linkString.length - 1];
              var label = link.label;
              return(
                <tr>
                <td dangerouslySetInnerHTML={{ __html: label }}></td>
                <td><a href={page}>Go</a></td>
              </tr>
              )
            }
            )}
          </tbody>
        </table>
      </main>
    )
  }
  export default Books