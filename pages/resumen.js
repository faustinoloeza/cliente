
import Navigation from './components/Navigation'
import Link from 'next/link'
import Head from 'next/head'

export default function Home({cart}) {
  return (
    <>
		<Head>
			<title>
				Resumen
			</title>
		</Head>
		<Navigation cart={cart}></Navigation>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8">
                                <div className="flow-root">
                                <ul
                                    role="list"
                                    className="-my-6 divide-y divide-gray-200"
                                >
                                    {cart.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src="https://m.media-amazon.com/images/I/51F9eK8B6DS._AC_SY606_.jpg"
                                            alt=""
                                            className="h-full w-full object-cover object-center"
                                        />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <a href=""> {product.name} </a>
                                            </h3>
                                            <p className="ml-4">
                                                {product.price_mxn}
                                            </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">
                                            Cantidad {1}
                                            </p>

                                            <div className="flex">
                                            <button
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Eliminar
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                            </div>
    </>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  const resshopping = await fetch(process.env.API_SERVER+'shoppingcart')
  const cart = await resshopping.json()

  return {
    props: {
	  cart,
    },
  }
}
