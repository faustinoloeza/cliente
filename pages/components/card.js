import Link from "next/link"

export default function Card({cars}) {
    return (
      
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cars.map((car) => (
              <div key={car.id} className="group relative">
               
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://m.media-amazon.com/images/I/51F9eK8B6DS._AC_SY606_.jpg"
                    alt=""
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      
                        <a>{car.name}</a>
                      
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{car.maker}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{car.price_mxn}</p>
                </div>
                <button type="button" class="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">AGREGAR AL CARRRITO</button>
                <Link href={`/${car._id}`}  key={car._id}>
                <button type="button" class="mb-2 w-full inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">DETALLE</button>

                </Link>
              </div>
            ))}
          </div>
        </div>

    )
  }