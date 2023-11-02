import React from 'react'
import Layout from '../../components/layout/Layout'
import Hero from '../../components/heroSection/Hero'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import {Link} from 'react-router-dom'
// import MyContext from '../../context/data/myContext'


function Home() {

  return (
    <Layout>
      <Hero />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      {/* <Track /> */}
      <Testimonial />
    </Layout>
  )
}

export default Home