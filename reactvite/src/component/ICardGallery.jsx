import React from 'react'
import ICard from './ICard'
import Photo from '../images/Photo.jpg';
import vns from '../images/vns.png';
import iop from '../images/iop.png';
function ICardGallery() {
 const student=[
   { pic:Photo,
    roll:"6366366",
    name:"subo",
    branch:"xya",
    college:"ABES",
 },
  { pic:vns,
    roll:"63663",
    name:"subodh",
    branch:"xya",
    college:"ABES",
 },
  { pic:iop,
    roll:"63666",
    name:"subo",
    branch:"xya",
    college:"ABES",
 },
  { pic:Photo,
    roll:"6366366",
    name:"subo",
    branch:"xya",
    college:"ABES",
 },
  { pic:vns,
    roll:"6366366",
    name:"subo",
    branch:"xya",
    college:"ABES",
 }
   ]

    return(
        <div style ={{display:'flex',justifyContent:'space-evenly'}} >
     

       {  /*      <ICard data={student[1]}/> */ }

       {
        student.map((ele)=>(
           < ICard data ={ele}/>
        ))
       }
        </div> 
    )
}

export default ICardGallery
