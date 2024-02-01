import React from 'react'
import MainComponent from '../../main/maincomponent'
import Navbar from '../../navbar/navigation'
import Footer from '../../footer/footer'

const Home = () => {
  console.log(`rendering`);
  return (
    <>

      <Navbar/>
      <MainComponent/>
      <Footer/>
    
      
    </>
  )
}

export default Home