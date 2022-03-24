import CardDetail from "./components/CardDetail";
import Head from "next/head";

function Car({ car }) {
  let logo = "shopping-cart.png";
  return (
    <>
      <Head>
        <title>Detalle</title>
      </Head>
      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label for="menu-toggle" className="cursor-pointer md:hidden block">
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>{car.id}</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="order-1 md:order-2">
            <img src="https://via.placeholder.com/200x50"></img>
          </div>

          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            <a
              className="pl-3 inline-block no-underline hover:text-black"
              href="#"
              onClick={() => setOpen(true)}
            >
              <svg
                className="fill-current hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
      <CardDetail car={car}></CardDetail>
    </>
  );
}
// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(process.env.API_SERVER + `cars/${params.id}`);
  const car = await res.json();
  console.table(car);
  // Pass post data to the page via props
  return { props: { car } };
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(process.env.API_SERVER + `cars/`);
  const cars = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = cars.map((car) => ({
    params: { id: car._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default Car;
