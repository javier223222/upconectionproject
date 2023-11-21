import React from 'react'
import Link from 'next/link'
import "@/css/ayuda.css"
import NewNav from '@/components/NewNav'
import Faqs from '@/components/Faqs'
import Options from '@/components/Options'

 const Ayuda=(props)=> {
  return (
    <div >
      <NewNav/>
      <Faqs/>
      <div className='c'>
      <hr className='linea'></hr>
      </div>
      <Options/>
    </div>
  )
}
export default Ayuda
