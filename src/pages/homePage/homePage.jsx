import React from 'react'
import Banner from '../../components/banner/banner';
import CardContent from '../../components/cardContent/cardContent';
import About from '../../components/about/about';
import HotSells from '../../components/hotSells/hotSells';

export default function homePage() {
  return (
    <div>
        <Banner/>
        <HotSells/>
        <About/>
        <CardContent/>
    </div>
  )
}