

import {useState} from 'react'
import heroImg from './assets/hero.png'
import heroLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import ICard from './component/ICard'
import ICardGallery from './component/ICardGallery'
import StateHandling from './component/StateHandling'

function App() {

  return (
    <div>
   {/*  <ICardGallery/> */ }
   <StateHandling/>
    </div>

  )
}

export default App