import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const services = [
        { id: 1, title: 'গ্রাফিক ডিজাইন', des: '🗸লোগো ডিজাইন🗸ফেসবুক কভার🗸সোস্যাল মিডিয়া ব্যানার🗸প্রিটিং ডিজাইন🗸ফটো এডিটিং', src: '/home/sGraphics', min: '৫,০০০', max: '২৫,০০০' },
        { id: 2, title: 'ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট', des: '🗸লোগো ডিজাইন🗸ফেসবুক কভার🗸সোস্যাল মিডিয়া ব্যানার🗸প্রিটিং ডিজাইন🗸ফটো এডিটিং', src: '/home/sGraphics', min: '4,০০০', max: '1৫,০০০' },
        { id: 3, title: 'ডিজিটাল মার্কেটিং', des: '🗸লোগো ডিজাইন🗸ফেসবুক কভার🗸সোস্যাল মিডিয়া ব্যানার🗸প্রিটিং ডিজাইন🗸ফটো এডিটিং', src: '/home/sGraphics', min: '3,০০০', max: '5৫,০০০' },
        { id: 4, title: 'মোশন অ্যাড ডিজাইন', des: '🗸লোগো ডিজাইন🗸ফেসবুক কভার🗸সোস্যাল মিডিয়া ব্যানার🗸প্রিটিং ডিজাইন🗸ফটো এডিটিং', src: '/home/sGraphics', min: '2,০০০', max: '3৫,০০০' },
        { id: 5, title: 'সোশ্যাল মিডিয়া মার্কেটিং', des: '🗸লোগো ডিজাইন🗸ফেসবুক কভার🗸সোস্যাল মিডিয়া ব্যানার🗸প্রিটিং ডিজাইন🗸ফটো এডিটিং', src: '/home/sGraphics', min: '1৫,০০০', max: '7৫,০০০' },
        { id: 6, title: 'ওয়েবসাইট মেইনটেনেন্স', des: '🗸লোগো ডিজাইন🗸ফেসবুক কভার🗸সোস্যাল মিডিয়া ব্যানার🗸প্রিটিং ডিজাইন🗸ফটো এডিটিং', src: '/home/sGraphics', min: '৫,০০০', max: '2৫,০০০' },
    ]
    const navigate = useNavigate()
    // service handler
    const serviceHandler = (title) => {
        navigate(`/home/${title}`);
    }
    return (
        <>
            <div className="home-container">
                <div className=" mb-8 py-[10px] text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">আমাদের সার্ভিস সমূহ</h2>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0">
                    {
                        services.map((service, index) =>
                            <div onClick={() => serviceHandler(service.title)} /* to={service.src} */ key={index} className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {service.title}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{service.des}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">সর্বনিম্ন {service.min}</div>
                                        <div className="badge badge-outline">সর্বোচ্চ {service.max} </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Home;