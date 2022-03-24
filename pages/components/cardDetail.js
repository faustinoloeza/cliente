import styles from '../../styles/Home.module.css'
import Link from "next/link"

export default function CardDetail({car}) {
    return (
    <div id="card" className="">
        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">

            <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
            <div className="h-64 w-auto md:w-1/2">
                <img src="https://via.placeholder.com/219x136" className="inset-0 h-full w-full object-cover object-center" />
            </div>

            <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 className="font-semibold text-lg leading-tight truncate">{ car.name }</h3>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis ex augue. Quisque bibendum imperdiet leo eget pretium. In in felis quis tellus rutrum viverra. Morbi tincidunt pretium mauris nec bibendum. Nulla facilisi. Sed quis sagittis lacus. Donec ut ullamcorper enim. Fusce volutpat molestie nisi eget lobortis. In sollicitudin ac elit non sodales. Ut eu nunc vel odio congue hendrerit. Sed neque erat, dictum tincidunt viverra vel, porttitor in odio. Praesent condimentum iaculis aliquam. Quisque tristique lorem ex, sit amet scelerisque sem suscipit non. Fusce convallis risus eu sem dictum, ultrices sollicitudin dolor eleifend.</p>
                <p className="text-sm text-green-600 uppercase tracking-wide font-semibold mt-2"  >{car.price_mxn}</p>
            </div>
            
            </div>
            <Link href="/">
                    <button type="button" className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Regresar</button>
                </Link>
        </div>
    </div>
    )
  }

        
