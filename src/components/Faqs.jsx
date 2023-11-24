import React from 'react'
import Image from 'next/image'
import faqs from "@/assets/FAQs.svg"
import "@/css/faqs.css"

 const Faqs =(props)=> {
  return (
    <div className='container'>
        <div>
            <h1 className='titulo'>¿En qué podemos ayudarte?</h1>
        </div>
        <div className='svg-container'>
            <Image src={faqs} alt='faqs' className='faqs'/>
        </div>
    </div>
  )
}
export default Faqs
