import React from 'react'
import Products from '../components/Products'
import Contact from '../components/Contact'
import Heading from '../components/Heading'
import Why from '../components/Why'
import Team from '../components/Team'
import Intend from '../components/Intend'
import OurProjects from '../components/OurProjects'
import Partners from '../components/Partners'
import Technics from '../components/Technics'

export const Home = () => {
  return (
    <div>
        <Heading/>
        <Why/>
        <Products/>
        <Team/>
        <Intend/>
        <OurProjects/>
        <Partners/>
        <Technics/>
        <Contact/>

    </div>
  )
}
