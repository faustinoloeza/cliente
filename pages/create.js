import Navigation from './components/Navigation'
import CardDetail from './components/cardDetail'
import Link from 'next/link'

function Home({cars}) {
  return (
    <div>
        <Navigation></Navigation>
      {cars.map((cars) => (
        <li>{cars.name}</li>
      ))}

    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch(process.env.API_SERVER+'cars')
    const cars = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        cars,
      },
    }
  }

export async function addCar(req, res) {
	const {method} = req;
	if(method == 'POST'){
		try{
			
		}catch(e){
			console.log(e);
		}
	}
}

export default Home;