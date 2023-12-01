import React from 'react'
import "./LetterTopGift.scss"
const LetterTopGift = ({setModal}) => {
  return (
    <div className='LetterTopGift' id="Նամակներ" >

      <div className='LetterCont' >
          <div className="textGift">Բացեք նվերի տուփը</div>
          <div className="imageGift" onClick={()=>setModal(true)} >
            <img src='/images/Gift.png' alt='click to open Gift' />
          </div>
      </div>
 
    </div>
  )
}

export default LetterTopGift