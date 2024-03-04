import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import Preloader from "../components/Preloader";

const Price = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay to showcase the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);
  // fetch data
  // fetch data
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  useEffect(() => {
    fetch(`${BASE_URL}/api/view/price`, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.info.sort((a, b) => a.price - b.price)));
  }, [API_KEY, BASE_URL]);

  const navigate = useNavigate();

  // price handler
  const priceHandler = (id) => {
    navigate(`/home/price/${id}`);
  };
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="price-container">
          <div className="py-[10px] text-center mobile-header">
            <h2 className="text-4xl tracking-tight font-extrabold text-black">
              Our Price Points
            </h2>
          </div>
          <div className="w-full px-4 bg-white mb-15">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
              {data ? (
                data.map((card, index) => (
                  <div
                    key={index}
                    className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border`}
                  >
                    <h2 className="text-2xl font-bold text-center py-8">
                      {card.name}
                    </h2>
                    <p className="text-center text-4xl font-bold">
                      {card.price}/<sub>{card.time}</sub>
                    </p>
                    <button
                      onClick={() => priceHandler(card.id)}
                      className={`bg-[#F69021] hover:text-[white] hover:bg-[black] duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white`}
                    >
                      Start Trial
                    </button>
                  </div>
                ))
              ) : (
                <Error data="No Package Available" />
              )}
            </div>
          </div>
        </div>
      )
      }
    </>
  );
};

export default Price;
