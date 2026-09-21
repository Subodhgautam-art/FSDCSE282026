import React from 'react'
import ICard from './ICard'
import Photo from '../images/Photo.jpg';
import Photo2 from '../images/vns.png';
import Photo3 from '../images/iop.png';
function ICardGallery() {
 const student={
    pic:{Photo},
    roll:"6366366",
    name:"subo",
    branch:"xya",
    college:"ABES"
 }

    return(
        <div style ={{display:'flex',justifyContent:'space-evenly'}} >
     

                <ICard data={student}/>
        </div> 
    )
}

export default ICardGallery
