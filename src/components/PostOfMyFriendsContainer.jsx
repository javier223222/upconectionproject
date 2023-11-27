'use client'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Post from './PostBody'
import { Grid } from '@mui/material'


const PostOfMyFriendsContainer = ({allPublicationOfMyfriend,page,tokenU}) => {
    const [allPublicationOfMyfrineds,setAllPublicationOfMyFriend]=useState({allPublicationOfMyfriend:allPublicationOfMyfriend,currentPage:page,token:tokenU})

  return (
    <>
     <InfiniteScroll dataLength={allPublicationOfMyfriend.length} hasMore={true} >

     </InfiniteScroll>
     {
        allPublicationOfMyfriend.length!=0?
        allPublicationOfMyfriend.map((x,i)=>{
            return  <Post idpublication={x.idpublicacion} 
            contentOfPublication={x.cuerpodelapublicacion} tipodecategorios={x.tipoDecategoria} nameexpertoOrExpert={x.namefininteorexpert}  token={allPublicationOfMyfrineds.token} imageuse={x.imageuser} username={x.username}></Post>
            
        }):<></>
     }
     
     </>
  )
}

export default PostOfMyFriendsContainer