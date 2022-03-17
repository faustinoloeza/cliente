export default function Card() {
    const products = [
        {
          id: 1,
          name: 'Mustang',
          href: '#',
          imageSrc: 'https://m.media-amazon.com/images/I/51F9eK8B6DS._AC_SY606_.jpg',
          price: '$35',
          maker: 'Ford',
        },
        {
          id: 1,
          name: 'Mustang',
          href: '#',
          imageSrc: 'https://m.media-amazon.com/images/I/51F9eK8B6DS._AC_SY606_.jpg',
          price: '$35',
          maker: 'Ford',
        },
        {
          id: 1,
          name: 'Mustang',
          href: '#',
          imageSrc: 'https://m.media-amazon.com/images/I/51F9eK8B6DS._AC_SY606_.jpg',
          price: '$35',
          maker: 'Ford',
        },
        {
          id: 1,
          name: 'Mustang',
          href: '#',
          imageSrc: 'https://m.media-amazon.com/images/I/51F9eK8B6DS._AC_SY606_.jpg',
          price: '$35',
          maker: 'Ford',
        },
        {
          id: 1,
          name: 'Mustang',
          href: '#',
          imageSrc: 'https://m.media-amazon.com/images/I/51F9eK8B6DS._AC_SY606_.jpg',
          price: '$35',
          maker: 'Ford',
        },
        {
          id: 1,
          name: 'Mustang',
          href: '#',
          imageSrc: 'https://m.media-amazon.com/images/I/51F9eK8B6DS._AC_SY606_.jpg',
          price: '$35',
          maker: 'Ford',
        },
        {
          id: 1,
          name: 'Mustang',
          href: '#',
          imageSrc: 'https://m.media-amazon.com/images/I/51F9eK8B6DS._AC_SY606_.jpg',
          price: '$35',
          maker: 'Ford',
        },
        // More products...
      ]
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.maker}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <button type="button" class="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">AGREGAR AL CARRRITO</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }