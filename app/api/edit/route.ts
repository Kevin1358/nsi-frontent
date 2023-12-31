import { NextResponse,NextRequest } from "next/server";
import { cookies } from 'next/headers'
import { json } from "stream/consumers";
import { redirect } from "next/dist/server/api-utils";


export async function PUT(request:NextRequest) {
    const bookId = request.nextUrl.searchParams.get("bookid");
    const data = await request.json();
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    const target = "https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books/"+bookId+"/edit";
    const fetchReq={
      method: "PUT",
      headers: {Authorization: 'Bearer '+token?.value, accept: "application/json","Content-Type": "application/json"},
      body: JSON.stringify(data),
    }
    const resp = await fetch(target, fetchReq)
    const respJson = await resp.json();
    //redirect(307,"/books/"+bookId);
    return NextResponse.json(respJson,{status:resp.status});
}