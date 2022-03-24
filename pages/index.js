import Header from './components/header'
import Navigation from './components/Navigation'
import Card from './components/Card'
import CardDetail from './components/cardDetail'
import Link from 'next/link'
import Head from 'next/head'

export default function Home({cars, cart}) {
  return (
    <>
		<Head>
			<title>
				Inicio
			</title>
		</Head>
		<Navigation cart={cart}></Navigation>
		<h1 className="text-5xl tracking-tight text-gray-900 sm:text-5xl text-center">Comprar auto</h1>
		<div className="bg-white">
			<Card cars={cars} ></Card>
		</div>
    </>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch(process.env.API_SERVER+'cars')
  const cars = await res.json()
  const resshopping = await fetch(process.env.API_SERVER+'shoppingcart')
  const cart = await resshopping.json()

    // Get the paths we want to pre-render based on cars
    const paths = cars.map((car) => ({
      params: { id: car._id },
    }))

  return {
    props: {
      cars,
	  cart,
    },
  }
}
