import { NextResponse,NextRequest } from "next/server";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
export async function GET(request:NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    var resp = await fetch("https://book-crud-service-6dmqxfovfq-et.a.run.app/api/user/logout",{
        method:"DELETE",
        headers: {Authorization: 'Bearer '+token?.value}
    })
    var respText = await resp.json();
    if(resp.status == 200){
        const cookieStore = cookies();
        const token = cookieStore.get('token');
        cookieStore.delete('token')
        console.log("DeletekCooke");
        redirect("/");
        return NextResponse.json({message:"Logged Out"},{status:200})
    }else{
        return NextResponse.json({error:"Error"},{status:resp.status})
    }
}