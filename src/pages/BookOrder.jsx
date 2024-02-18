
const BookOrder = () => {
    return (
        <>
            <div className="price-container mb-10">
                <div className=" mb-8 py-[10px] text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">অর্ডার বুক করুন</h2>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0">
                    <div className="google-form-container">
                        <iframe className="order-responsive" src="https://docs.google.com/forms/d/e/1FAIpQLScXMq7mhtaxg8lRR4-hYEhrEv0r8WiRf5X-Jw6M-caHbgyJ8Q/viewform?embedded=true" width="1200" height="1404" frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            scrolling="no">Loading…</iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookOrder;