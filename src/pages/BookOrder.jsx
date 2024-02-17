
const BookOrder = () => {
    return (
        <>
            <div className="">
                <div className=" mb-8 py-[10px] text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">অর্ডার বুক করুন</h2>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0">
                    <div className="google-form-container">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfNLMPbEPZrq2ALP_8QV3DrgCpk6eSeXPTFg6sw-dSK3wtqjg/viewform?embedded=true" width="1180px" height="1318" >Loading…</iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookOrder;