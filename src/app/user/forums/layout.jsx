import React from 'react'
import PropTypes from 'prop-types'
import ForumContainer from '@/components/ForumContainer'

import {cookies} from "next/headers"
import { getAnyProfile } from '@/apiconections'


const getTokenofme=()=>{
  const cokiestore= cookies()
  const hasCokokie= cokiestore.has('tokenUser')
  return hasCokokie?cokiestore.get("tokenUser").value:undefined

}
const HomeForum = async({children}) => {
    
  
    const getforos=await getAnyProfile(`http://18.116.19.145/foros/`,getTokenofme())
    console.log(getforos)
 
  
    
  
  return (
    <div className="layout">
        <ForumContainer forosd={getforos.result}>

        </ForumContainer>

        {children}
    </div>
  )
}



export default HomeForum