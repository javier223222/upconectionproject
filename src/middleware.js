
import { NextResponse } from "next/server"

export const middleware=(request,res)=>{
   const tokenuser=request.cookies.get("tokenUser")
   console.log(tokenuser)
    if(request.nextUrl.pathname.includes("/user")){
      
    }
    return NextResponse.next()

}