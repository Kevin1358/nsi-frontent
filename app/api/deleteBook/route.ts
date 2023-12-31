import { NextResponse,NextRequest } from "next/server";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
export async function GET(request:NextRequest) {
    const bookId = request.nextUrl.searchParams.get("bookid");
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    const target = "https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books/"+bookId;
    var resp = await fetch(target,{
        method:"DELETE",
        headers: {Authorization: 'Bearer '+token?.value,accept: "application/json","Content-Type": "application/json"}
    })
    var respText = await resp.json();
    if(resp.status == 200){
        redirect("/books");
        return NextResponse.json({message:"Book Deleted"},{status:200})
    }else{
        return NextResponse.json({error:respText.message},{status:resp.status})
    }
}