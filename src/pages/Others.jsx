import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";

const Others = () => {
    // For Loader
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate a delay to showcase the preloader
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);


    // Main Data
    const cardData = [
        {
            title: "Web Design",
            price: "৳ 15000 + ",
            charge: 'Life Time',
            features: ["Domain+Hosting (1yr)", "Website Development", "Website Maintaince (Free 3 Months)"],
        },
        {
            title: "Facebook Page Pack",
            price: "৳ 3000",
            charge: 'Life Time',
            features: ["Logo & Cover Page", "Fb Create & Page Setup", "FaQ Automation"],
        },
        {
            title: "Explaner Video",
            price: "৳ 3000 + ",
            charge: 'Life Time',
            features: ["30 Sec - ৳ 3000", "1 Min - ৳ 5000", "1.5 Min - ৳ 6500"],
        },
        {
            title: "Video Shoot",
            price: "৳ 5000 + ",
            charge: '',
            features: [],
        },
        {
            title: "Video Edit",
            price: "৳ 1500 + ",
            charge: '',
            features: [],
        },
        {
            title: "Boosting",
            price: "৳ 170 Per Dollar",
            charge: '',
            features: [],
        },
    ];
    /* const navigate = useNavigate(); */

    // price handler
    /*  const priceHandler = (data) => {
         if (data == 'ব্যাসিক') {
             navigate('/home/basic')
         } else if (data == 'কোম্পানি') {
             navigate('/home/company')
         } else if (data == 'এন্টারপ্রাইজ') {
             navigate('/home/enterprise')
         }
     } */
    return (
        <>
            {loading ? (
                <Preloader />
            ) : (

                <div className="price-container">
                    <div className="py-[10px] text-center mobile-header">
                        <h2 className=" text-4xl tracking-tight font-extrabold text-black">One-time Package</h2>
                    </div>
                    <div className="w-full px-4 bg-white mb-10">
                        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                            {cardData.map((card, index) => (
                                <div
                                    key={index}
                                    className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border`}
                                >
                                    <h2 className="text-2xl font-bold text-center py-8">
                                        {card.title}
                                    </h2>
                                    <p className="text-center text-4xl font-bold">{card.price}</p>
                                    <div className="text-center font-medium">
                                        {card.features.map((feature, index) => (
                                            <p
                                                key={index}
                                                className={`py-2 border-b mx-8 ${index === 0 ? "mt-8" : ""}`}
                                            >
                                                {feature}
                                            </p>
                                        ))}
                                    </div>
                                    {/*  <button
                            onClick={() => priceHandler(card.title)}
                            className={`bg-[#FF00D3] hover:text-[#00df9a] hover:bg-gray-50 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white`}
                        >
                            Start Trial
                        </button> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default Others;