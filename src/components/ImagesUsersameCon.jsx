'use client'
import { Grid } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import ModalShowUseUser from './ModalShowUseUser'
import ModalShowMoreImgOFUser from './ModalShowMoreImgOFUser'
import { getAnyProfile, getProfile } from '@/apiconections'


const ImagesUsersameCon = props => {
  const [images, setImages] = useState({allImages:props.images,pages:props.pages,totalPages:props.totalPages,
    allImagesPivot:props.images,
    pagesPivot:props.pages,
    totalPagesPivot:props.totalPages,
    token:props.token,shwoModal:false,numeOfElement:-1,urlToshwo:'',
    username:props.username,openShowMore:false,showImgInnetwoMod:false})


    const open=()=>{
      setImages(x=>{
        return {
          ...x,
          shwoModal:!x.shwoModal
        }
      })
    }
    const showonlyOfsecon=(id)=>{
      openAny("showImgInnetwoMod")
      setImages(x=>{
        return {
          ...x,
          numeOfElement:id,
          urlToshwo:x.allImagesPivot[id].urlfile
        }
      })

    }
    const closeShowOne=()=>{
      openAny("showImgInnetwoMod")
    }
    const nextSecondImg=()=>{
      if(images.numeOfElement+1==images.allImagesPivot.length){
        setImages(x=>{
           return{
             ...x,
             numeOfElement:0,
             urlToshwo:x.allImagesPivot[0].urlfile
           }
        })
      }else{
        setImages(x=>{
          return {
            ...x,
            numeOfElement:x.numeOfElement+1,
            urlToshwo:x.allImagesPivot[x.numeOfElement+1].urlfile
          }
        })

      }
    }
    const openAny=(name)=>{
     setImages(x=>{
      return {
        ...x,
        [name]:!x[name]
      }
     })
    }
    const gewNewImages=async()=>{
      
      if(images.pagesPivot<images.totalPagesPivot){
          const getNewImages=await getAnyProfile(`http://18.116.19.145/profile/getimagesprofile?page=${parseInt(images.pagesPivot+1)}&limit=4&username=${images.username}`,images.token)
          setImages(x=>{
            return {
              ...x,
              allImagesPivot:[...x.allImagesPivot,...getNewImages.result],
              pagesPivot:parseInt(getNewImages.page)
            }
          })
      }
    }
    const openAndsave=(id,url)=>{
      open()
      setImages(
        x=>{
          return {
            ...x,
            numeOfElement:id,
            urlToshwo:url
          }
        }
        
      )
    
      
    }
    const beforeSecondImg=()=>{
      if(images.numeOfElement-1<0 ){
        setImages(x=>{
          return {
            ...x,
            numeOfElement:x.allImagesPivot.length-1,
            urlToshwo:x.allImagesPivot[x.allImagesPivot.length-1].urlfile
          }
        })
      }else{
        setImages(x=>{
          return {
            ...x,
            numeOfElement:x.numeOfElement-1,
            urlToshwo:x.allImagesPivot[x.numeOfElement-1].urlfile
          }
        })
      
      }
    }

  const nextIm=()=>{
     if(images.numeOfElement+1==images.allImages.length){
       setImages(x=>{
          return{
            ...x,
            numeOfElement:0,
            urlToshwo:x.allImages[0].urlfile
          }
       })
     }else{
      setImages(x=>{
        return {
          ...x,
          numeOfElement:x.numeOfElement+1,
          urlToshwo:x.allImages[x.numeOfElement+1].urlfile
        }
      })
     }
  }
  const beforeImg=()=>{
      if(images.numeOfElement-1<0 ){
        setImages(x=>{
          return {
            ...x,
            numeOfElement:x.allImages.length-1,
            urlToshwo:x.allImages[x.allImages.length-1].urlfile
          }
        })
      }else{
        setImages(x=>{
          return {
            ...x,
            numeOfElement:x.numeOfElement-1,
            urlToshwo:x.allImages[x.numeOfElement-1].urlfile
          }
        })
      
      }
  }
  const closeShowMore=()=>{
    openAny("openShowMore")
    setImages(x=>{
      return {
        ...x,
        allImagesPivot:x.allImages,
        pagesPivot:x.pages,
      }
    })
  }
  const closeAll=()=>{
    open()
  }
  return (
    <Grid container direction={"column"}   justifyContent="center"
    alignItems="center" gap={"0.8rem"} >
        <Grid  container direction={"row"} item justifyContent="center"
    alignItems="center" gap={"1.4rem"}  >
            {
              images.allImages.map((x,i)=>{return <Grid key={i} spacing={1}
               item xs={3}><Image alt='' onClick={()=>openAndsave(i,x.urlfile)}
                 key={i} src={x.urlfile} width={"101"} height={"103"}></Image></Grid>})
            }  
        </Grid>
        {
          images.totalPages>1?<button className='anadir' onClick={()=>openAny("openShowMore")}>Ver mas </button>:<></>
        }
      <ModalShowUseUser beforeImg={beforeImg} 
      nextImg={nextIm} currentpage={images.numeOfElement}
       closeAll={closeAll} imageOFshow={images.urlToshwo}
        shwomodal={images.shwoModal}></ModalShowUseUser>
      <ModalShowMoreImgOFUser 
      close={closeShowMore}
       openwin={images.openShowMore}
        getMoreImages={gewNewImages}
         images={images.allImagesPivot} 
         bolShowSec={images.showImgInnetwoMod}
         onlyviewOne={showonlyOfsecon}
         urlOnlyToshow={images.urlToshwo}
         showMenext={nextSecondImg}
         closeShowOne={closeShowOne}
         showMeBefore={beforeSecondImg}
         ></ModalShowMoreImgOFUser>
      
    </Grid>
  )
}



export default ImagesUsersameCon