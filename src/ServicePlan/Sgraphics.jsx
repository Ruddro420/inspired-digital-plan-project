import { Link, useParams } from "react-router-dom";

const Sgraphics = () => {
    const { title } = useParams();
    const cardData = [
        {
            image: "../../public/img/starter.png",
            title: "ব্যাসিক",
            price: "৳১৪৯",
            charge: 'মাস',
            features: ["২ লোগো ডিজাইন ", "২ ফেসবুক ব্যানার", "২০ পোস্টার ডিজাইন"],
        },
        {
            image: "",
            title: "কোম্পানি",
            price: "৳৫০০",
            charge: 'মাস',
            features: ["২০ গ্রাফিক ডিজাইন", "২ ফেসবুক বুস্ট", "২০ কন্টেন্ট"],
        },
        {
            image: "",
            title: "এন্টারপ্রাইজ",
            price: "৳১০০০",
            charge: 'মাস',
            features: ["২০ গ্রাফিক ডিজাইন", "২ ফেসবুক বুস্ট", "২০ কন্টেন্ট"],
        },
    ];
    return (
        <>
            <div className="py-[10px] text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">{title} প্রাইজ পয়েন্ট</h2>
            </div>
            <div className="w-full px-4 bg-white">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border`}
                        >
                            <h2 className="text-2xl font-bold text-center py-8">
                                {card.title}
                            </h2>
                            <p className="text-center text-4xl font-bold">{card.price}/<sub>{card.charge}</sub></p>
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
                            <Link
                                to='/home/book'
                                className={`bg-[#FF00D3] hover:text-[#00df9a] hover:bg-gray-50 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white`}
                            >
                                Book Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sgraphics;