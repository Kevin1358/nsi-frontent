import { NextResponse,NextRequest } from "next/server";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
interface booksAddReq{
    isbn: string|any;
    title:string|any;
    subtitle:string|any;
    author:string|any;
    published:string|any;
    publisher:string|any;
    pages:number|any;
    description:string|any;
    website:string|any;
  }
export async function POST(request:NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    const req = await request.formData();
    //return NextResponse.json({msg:req.get("email")})
    const reqBody:booksAddReq = {
        isbn: req.get("isbn")?.toString(),
        title:req.get("title")?.toString(),
        subtitle:req.get("subtitle")?.toString(),
        author:req.get("author")?.toString(),
        published:req.get("published")?.toString(),
        publisher:req.get("publisher")?.toString(),
        pages:req.get("pages")?.toString(),
        description:req.get("description")?.toString(),
        website:req.get("website")?.toString(),
    };
    var resp = await fetch("https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books/add",{
        method:"POST",
        headers:{Authorization: 'Bearer '+token?.value, accept: "application/json","Content-Type": "application/json"},
        body:JSON.stringify(reqBody)
    })

    var respText = await resp.json();
    console.log(respText)

    if(resp.status == 200){
        redirect("/books");
        return NextResponse.json({message:"Signed up successfully"},{status:200})
    }else{
        return NextResponse.json({error:respText.message},{status:resp.status})
    }
}