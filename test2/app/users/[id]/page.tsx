import React from 'react'

const DetaiPage = ({params}:{params :{id:string}} )=> {
    const {userId }= params ; 


  return (
 <>
     <h1>User ID: {userId} </h1>
     <p>Bienvenue sur la page de l'utilisateur {userId}.</p>
 </>
  )
}

export default DetaiPage

