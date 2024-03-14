import { useEffect, useState } from "react";

const API = {
  key: "45d2bbda8db331a1ca3cea96684d43f2",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [error, setError] = useState();
  const [find, setFind] = useState("Korce");
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        try {
          setIsLoading(true);

          const res = await fetch(
            `${API.base}weather?q=${find}&units=metric&APPID=${API.key}`
          );
          const data = await res.json();
          setResult(data);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
    },
    [find]
  );

  if (error) {
    return (
      <div>
        <p>Something went wrong! Please try again!</p>
      </div>
    );
  }

  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };

  return (
    <div>
      {isLoading && (
        <div>
          <p className="text-white">Loading data...</p>
        </div>
      )}

      {error && (
        <div>
          <p>Something gone wrong! Try again!</p>
        </div>
      )}

      {typeof result.main != "undefined" ? (
        <div className=" bg-[#29292954] m-3 w-[150px] grid  items-center justify-self-end rounded-md p-1 grid-rows-1 duration-500">
          <p className="flex justify-center text-[20px] items-center  text-gray-100 font-sans">
            Weather Today
          </p>
          <div className="flex justify-center items-start">
            {
              <img
                className="w-6 h-6"
                src={getWeatherIconUrl(result.weather[0].icon)}
                alt="Weather Icon"
              />
            }
            <p className="flex justify-center items-center  text-gray-100 mt-0 text-[15px]">
              {result.name}
            </p>
            <p className="flex justify-center items-center  text-gray-100 font-thin text-[15px] ml-2">
              {Math.round(result.main.temp)}°
            </p>
            <p className="ml-2 mx-auto text-[15px]  text-gray-100 ">
              {result.weather[0].main}
            </p>
          </div>
        </div>
      ) : result.message === "city not found" ? (
        <div className="bg-[#29292954] w-[400px] grid items-start justify-center rounded-lg py-5 grid-rows-1 mb-8 duration-500">
          <p className="text-[2rem] text-gray-100 font-thin mx-auto">
            Uknown location!
          </p>
          <p className="text-[1rem] text-gray-100 font-thin mx-auto">
            ({result.message})
          </p>
          <p className=" text-[2rem] text-gray-100 font-thin mx-auto">
            Try again!
          </p>
        </div>
      ) : typeof result.main === "undefined" ? (
        <div className="duration-500"></div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Weather;
