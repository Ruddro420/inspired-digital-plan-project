
const Home = () => {
    const features = [
        { id: 1, title: '১৭ সপ্তাহে ১০ টি মডিউল', des: 'ধাপে ধাপে শেখার জন্য কোর্সটি ১৭ সপ্তাহে  ১২টি মডিউল  ভাগ করে সাজানো হয়েছে এবং ডকুমেন্টেশন ধরে ধরে শিখানো হবে । ', src: '/img/features/learning.png' },
        { id: 2, title: 'সাবক্ষনিক লাইভ সার্পোট', des: 'ইন্সপায়ার্ড আইটি এই কোর্স এ থাকছে লাইভ কোডিং ক্লাস এর পাশাপাশি গুগল মিট ওয়ান অন ওয়ান সাপোর্ট সিস্টেম, তাই যে কেও কোনো সমস্যায় পড়লেই সাপোর্ট নিয়ে এগিয়ে যেতে পারবে । ', src: '/img/features/support.png' },
        { id: 3, title: 'মার্কেটপ্লেস এবং ইন্টারভিউ', des: 'কোর্স এর সাথে থাকছে, ফাইভার ও আপওয়ার্ক ক্র্যাশ প্রোগ্রাম। এছাড়াও ইন্টারভিউ ও বিভিন্ন মার্কেটপ্লেসে কিভাবে নিজেকে প্রেজেন্ট করতে পারবেন তা দেখানো হবে । ', src: '/img/features/marketplace.png' },
    ]
    return (
        <>
            <div>
                <section>
                    <div className="">
                        <div className=" mb-8 lg:mb-16 text-center">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">আমাদের সার্ভিস সমূহ</h2>
                        </div>
                        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0">
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        গ্রাফিক ডিজাইন
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>🗸লোগো ডিজাইন🗸ফেসবুক কভার🗸সোস্যাল মিডিয়া ব্যানার🗸প্রিটিং ডিজাইন🗸ফটো এডিটিং</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">সর্বনিম্ন ৫,০০০</div>
                                        <div className="badge badge-outline">সর্বোচ্চ ২৫,০০০ </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default Home;