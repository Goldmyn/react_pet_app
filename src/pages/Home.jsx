import { Link } from "react-router";

function Home() {
  return (
    <>
      <section className="container mx-auto grid h-screen place-items-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">
            Welcome to pet store
          </h1>
          <p className="text-lg text-gray-500 font-light my-3">
            Express your love for pets by adopting one today
          </p>
          <Link
            className="shadow bg-slate-900 rounded-md font-semibold p-3 tracking-wide text-white"
            to={"/marketplace"}
          >
            Adopt Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
