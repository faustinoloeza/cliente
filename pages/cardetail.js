import Header from './components/header'
import CardDetail from './components/cardDetail'
import Link from 'next/link'

function Home({cars}) {
  return (
    <div>
        <Header></Header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <ul>
      {cars.map((cars) => (
        <li>{cars.name}</li>
      ))}
    </ul>
    </div>
  )
}

// This function gets called at build time
export async function getStaticProps({ params }) {
    console.log("Estoson los poaramaertrf"+ params);
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
  

export default Home;