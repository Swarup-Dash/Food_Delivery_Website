import React from 'react'
// import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
// import { Link } from 'react-router-dom'
import Card from '../Component/Card'
import image from "../Asset/Bara.jpg"
import image1 from "../Asset/Burger1.jpg"
import image2 from "../Asset/Chilligobi.jpg"
import image3 from "../Asset/Chole.jpg"
import image4 from "../Asset/Chowmin.jpg"
import image5 from "../Asset/Dahibara.jpg"
import image6 from "../Asset/Dosa.jpg"
import image7 from "../Asset/Fishbesara.jpg"
import image9 from "../Asset/Idle.jpg"
import image10 from "../Asset/Mudhimutton.jpg"
import image11 from "../Asset/Pakhala.jpg"
import image12 from "../Asset/Rasagola.jpg"
import image13 from "../Asset/Upama.jpg"
import image14 from "../Asset/Sajanasaga.jpg"
import image15 from "../Asset/Butterpaneer.jpg"
import image16 from "../Asset/Chaat.jpg"
import image17 from "../Asset/Gupchup.jpg"
import image18 from "../Asset/Masalapapad.jpeg"
import image19 from "../Asset/Muttonbiriani.jpeg"
import image20 from "../Asset/Paneertikka.jpg"
import image21 from "../Asset/Springrolls.jpeg"
import image22 from "../Asset/Vegbiriyani.jpeg"
import image23 from "../Asset/Icecream.jpg"
import image24 from "../Asset/Presty.jpg"
import Customernavbar from '../Component/Customernavbar'
// import { Customernavbar } from '../Component/Customernavbar'

function Customer() {
  return (
    <div>
      <div><Customernavbar /></div>
      <div className='grid grid-cols-3 ml-16 mr-14 gap-10 mt-24 mb-24'>
        <Card name="Bara" para="Bara one plate--RS 25" img={image} />
        <Card name="Burger" para="One Burger rs 40" img={image1} />
        <Card name="Chilligobi" para="One plate--RS 40" img={image2} />
        <Card name="Chole" para="One plate--RS 80" img={image3} />
        <Card name="Chowmin" para="One plate--RS 40" img={image4} />
        <Card name="Dahi Bara" para="One plate--RS 40" img={image5} />
        <Card name="Dosa" para="One plate--RS 40" img={image6} />
        <Card name="Macha Besara" para="One plate--RS 40" img={image7} />
        <Card name="Idle Sambar" para="One plate--RS 40" img={image9} />
        <Card name="Mudhi Mutton" para="One plate--RS 150" img={image10} />
        <Card name="Pakhala" para="One plate--RS 60" img={image11} />
        <Card name="Rasagola" para="One Piece--RS 10" img={image12} />
        <Card name="Upama" para="One plate--RS 40" img={image13} />
        <Card name="Sajana Saga" para="One plate--RS 40" img={image14} />
        <Card name="Butter Paneer" para="One plate--RS 40" img={image15} />
        <Card name="Chaat" para="One plate--RS 30" img={image16} />
        <Card name="Gupchup" para="One plate--RS 20" img={image17} />
        <Card name="Masala Papad" para="One plate--RS 20" img={image18} />
        <Card name="Mutton Biriyani" para="One plate--RS 20" img={image19} />
        <Card name="Paneer Tikka" para="One plate--RS 20" img={image20} />
        <Card name="Spring Rolls" para="One plate--RS 20" img={image21} />
        <Card name="Veg Biriyani" para="One plate--RS 20" img={image22} />
        <Card name="Icecream" para="One Ice Cream--RS 40" img={image23} />
        <Card name="Presty" para="One Piece--RS 40" img={image24} />
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default Customer

