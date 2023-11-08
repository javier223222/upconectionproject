'use client '
import React from 'react'
import FriendItem from './FriendItem'

const FriendsContainer = (props) => {
  const amigos=[{name:"javier cundapi"},{name:"javier cundapi "},{name:"javier cundapi"}].map(x=><FriendItem namefriend={x.name}></FriendItem>)
  return (
    <div className='container-friends'>
          <div className='title'>
             <h3>Amigos</h3>

          </div>
          <div>
            {amigos}
          </div>

    </div>
  )
}

export default FriendsContainer