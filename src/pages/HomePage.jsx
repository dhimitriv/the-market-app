import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="flex justify-center items-center mt-8">
        {/* <Navigation /> */}
        <section>
          <div className="grid grid-cols-1 justify-items-center items-center w-[300px] m-auto">
            <h1 className="text-white text-2xl mt-3">Market application</h1>
            <h2 className="grid justify-center items-center  text-white pt-5">
              Manage your market finances and sales!
            </h2>
            <Link
              to="/login"
              className="bg-blue-700 my-5 px-3 rounded text-white font-sans"
            >
              Start application
            </Link>
          </div>
        </section>
      </div>
      {/* <Link to="/login">Loging in</Link> */}
    </div>
  );
}

export default HomePage;
