import Header from './components/header'
import CardDetail from './components/cardDetail'
import Link from 'next/link'

export default function Home({cars}) {
  return (
    <>
    <Header></Header>
    <h1 className="text-5xl tracking-tight text-gray-900 sm:text-5xl text-center">Comprar auto</h1>
    <div className="bg-white">
        <div className="max-w-2xl mx-auto py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cars.map((car) => (
              <div key={car.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://via.placeholder.com/219x136"
                    alt=""
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-blue-700">
                      <Link href={`/${car._id}`}>
                      <a>{car.name}</a>
                    </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{car.maker}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{car.price_mxn}</p>
                </div>
                <button type="button" class="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">AGREGAR AL CARRRITO</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
   

    
  )
}

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch(process.env.API_SERVER+'cars')
  const cars = await res.json()

    // Get the paths we want to pre-render based on cars
    const paths = cars.map((car) => ({
      params: { id: car._id },
    }))

  return {
    props: {
      cars,
    },
  }
}
