import React, { useState } from "react";

const Home = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=56898df3e21e6f12403d03cd4d3eba67`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => error);
      setLocation("");
    }
  };

  const divStyle = "flex items-center flex-col";
  const pTag1 = "font-bold lg:text-4xl text-white text-2xl";
  const pTag2 = "font-[400] text-[1rem] md:text-xl lg:text-2xl text-white";

  return (
    <section className="wrapper h-[100vh] -z-10 ">
      <input
        value={location}
        onKeyPress={searchLocation}
        onChange={(e) => setLocation(e.target.value)}
        type="text"
        placeholder="ENTER YOUR LOCATION"
        className="mx-auto top-[4rem] absolute left-0 right-0 w-[60%] md:w-[50%] lg:w-[40%] glass border border-gray-500 h-12 outline-none pl-4 text-white placeholder:text-gray-300 placeholder:font-semibold font-semibold text-[.5rem] lg:text-[.8rem] lg:text-xl uppercase"
      />
      <div className="flex justify-between pl-5 w-full mt-[13rem] ">
        <div className="ml-0 xl:ml-20">
          <p className="text-xl lg:text-3xl  text-white font-bold uppercase">
            {data.name}
          </p>
          {data.name ? (
            <p className="lg:text-9xl md:text-8xl text-7xl font-bold text-white">
              {Math.round(data.main.temp)}
              <sup>o</sup>F
            </p>
          ) : (
            <p className="lg:text-3xl text-2xl font-bold text-white pl-16"></p>
          )}
        </div>
        {data.name ? (
          <p className="-rotate-90 text-2xl lg:text-3xl text-white font-bold xl:mr-10 -mr-10">
            {data.weather[0].main}
          </p>
        ) : (
          <p className="-rotate-90 text-2xl lg:text-3xl text-white font-bold xl:mr-10 -mr-10"></p>
        )}
      </div>
      <div className="w-[90%] lg:w-[80%] xl:w-[70%] h-28 absolute bottom-6 mx-auto left-0 right-0 glass flex justify-around items-center">
        {data.name ? (
          <div className={divStyle}>
            <p className={pTag1}>
              {Math.round(data.main.feels_like)}
              <sup>o</sup>F
            </p>
            <p className={pTag2}>Feels Like</p>
          </div>
        ) : (
          <div className={divStyle}>
            <p className={pTag1}></p>
            <p className={pTag2}>Feels Like</p>
          </div>
        )}

        {data.name ? (
          <div className={divStyle}>
            <p className={pTag1}>{data.main.humidity}%</p>
            <p className={pTag2}>Humidity</p>
          </div>
        ) : (
          <div className={divStyle}>
            <p className={pTag2}>Humidity</p>
          </div>
        )}
        {data.name ? (
          <div className={divStyle}>
            <p className={pTag1}>{data.wind.speed}mph</p>
            <p className={pTag2}>Wind Speed</p>
          </div>
        ) : (
          <div className={divStyle}>
            <p className={pTag2}>Wind Speed</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
