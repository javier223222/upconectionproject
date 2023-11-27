
import { NextResponse } from "next/server"

export const middleware=(request,res)=>{
    const tokenuser=request.cookies.get("tokenUser")
    if(request.nextUrl.pathname.includes("/user")){
         if(tokenuser===undefined){
           return NextResponse.redirect(new URL('/Login',request.url))
         }
      
   console.log(tokenuser.value)
    }else{
      if(request.nextUrl.pathname.includes("/Login") ||request.nextUrl.pathname.includes("/Register") ){
        if(tokenuser!=undefined){
          return NextResponse.redirect(new URL('/user',request.url))
        }
      }
    }
    return NextResponse.next()

}