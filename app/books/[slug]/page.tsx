import BookDetailComp from "@/app/components/BookDetailComp";
import { cookies } from 'next/headers'
const BookDetail = async ({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
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
  interface myData{
    key:string;
    value:string;
  }
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  var getBooks = await fetch('https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books/'+params.slug, {
    headers: {Authorization: 'Bearer '+token?.value}
  })
  if(getBooks.status != 200){
    return(
      <main>
        <h1>Not Found</h1>
        <a href="/">Back to Home</a>
      </main>
    )
  }
  const json =await getBooks.json();
  const book = json;
  
  const props = {title:book.title,bookDetail:book};
  return (
  <main>
    <BookDetailComp prop={props}></BookDetailComp>
  </main>
  )
}

export default BookDetail