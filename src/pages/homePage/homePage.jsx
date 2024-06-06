import React from 'react'
import Banner from '../../components/banner/banner';
import CardContent from '../../components/cardContent/cardContent';
import About from '../../components/about/about';

export default function homePage() {
  return (
    <div>
        <Banner/>
        <About/>
        <CardContent/>
    </div>
  )
}