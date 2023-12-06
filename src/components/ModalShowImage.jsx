'use client'
import { stylestwo } from '@/helpers/client_side';
import { Box, Grid, Modal, TextField } from '@mui/material'
import Image from 'next/image';

import * as React from 'react';

const ModalShowImage = props => {
  return (
    <div>
        <Modal open={props.open} onClose={props.close}>
          {
            props.type?<Image alt='' className='imageShow' style={{...stylestwo,width:"600"}} width={"400"} height={"250"}  src={props.image}></Image>:<Image alt='' className='profile' style={{position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',outline: "none",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,}} width={"400"} height={"250"}  src={props.image}></Image>
          }
          
        </Modal>
    </div>
  )
}

export default ModalShowImage