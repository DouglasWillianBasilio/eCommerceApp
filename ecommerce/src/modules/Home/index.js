import React from 'react'
import { Hero } from '../../components/Header/Hero'
import { Products } from '../../components/Products'
import { Features } from '../../components/FeatureCard'

export const Home = () => {
  return (
    <>
        <Hero />
        <h2 className=' text-4xl font-bold text-center mt-20 text-gray-900'>Produtos</h2>
        <Products />
        <Features />
    </>
  )
}
