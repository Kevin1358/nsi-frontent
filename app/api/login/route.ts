import { NextResponse,NextRequest } from "next/server";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
interface loginReqBody{
    email:string|any;
    password:string|any;
}
export async function POST(request:NextRequest) {
    const cookieStore = cookies();
    const req = await request.formData();
    //return NextResponse.json({msg:req.get("email")})
    const reqBody:loginReqBody = {email:req.get("email")?.toString(),password:req.get("password")?.toString()};
    var resp = await fetch("https://book-crud-service-6dmqxfovfq-et.a.run.app/api/login",{
        method:"POST",
        headers:{accept: "application/json","Content-Type": "application/json"},
        body:JSON.stringify(reqBody)
    })

    var respText = await resp.json();
    console.log(respText)

    if(resp.status == 200){
        const cookieStore = cookies();
        cookieStore.set('token',respText.token);
        redirect("/");
        return NextResponse.json({message:"Logged Out"},{status:200})
    }else{
        return NextResponse.json({error:respText.message},{status:resp.status})
    }
}