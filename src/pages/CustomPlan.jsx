import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CustomPlan = () => {
    // state for all plan
    const [getGraphics, setGetGraphics] = useState(0)
    const [getFacebook, setGetFacebook] = useState(0)
    const [getWebsite, setGetWebsite] = useState(0)
    const [total, setTotal] = useState(0)
    // array count
    const graphics = [5, 10, 15, 20];
    const fbads = [2, 4, 6, 8];
    const website = ['Agency', 'E-Commerce', 'Business'];
    // button click event
    const [selectGraphics, setSelectGraphics] = useState(null);
    const [selectFacebook, SetSelectFacebook] = useState(null);
    const [selectWebsite, SetSelectWebsite] = useState(null);

    const handleButtonClick1 = (quantity) => { setSelectGraphics(quantity); setGetGraphics(quantity); };
    const handleButtonClick2 = (quantity) => { SetSelectFacebook(quantity); setGetFacebook(quantity); };
    const handleButtonClick3 = (quantity) => {
        SetSelectWebsite(quantity);
        if (quantity == 'Agency') {
            setGetWebsite(100);
        } else if (quantity == 'E-Commerce') {
            setGetWebsite(200);
        } else if (quantity == 'Business') {
            setGetWebsite(300);
        } else {
            setGetWebsite(quantity);
        }
    }
    // get tatal value
    const generateHandler = () => {
        const totalCount = (getGraphics * 2) + (getFacebook * 5) + getWebsite;
        setTotal(totalCount);
    }


    return (
        <>
            <div className='price-container'>
                <div className="py-[10px] text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">Customize Your Plan</h2>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th></th>
                                    <td>Graphic Design</td>
                                    <td>
                                        {graphics.map(item => (
                                            <button
                                                key={item}
                                                className={`btn btn-outline btn-secondary m-1 ${selectGraphics === item ? 'active-color' : ''}`}
                                                onClick={() => handleButtonClick1(item)}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th></th>
                                    <td>Facebook Ads</td>
                                    <td>
                                        {fbads.map(item => (
                                            <button
                                                key={item}
                                                className={`btn btn-outline btn-secondary m-1 ${selectFacebook === item ? 'active-color' : ''}`}
                                                onClick={() => handleButtonClick2(item)}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th></th>
                                    <td>Website</td>
                                    <td>
                                        {website.map(item => (
                                            <button
                                                key={item}
                                                className={`btn btn-outline btn-secondary m-1 ${selectWebsite === item ? 'active-color' : ''}`}
                                                onClick={() => handleButtonClick3(item)}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>Total</td>
                                    <td>
                                        <div role="alert" className="alert shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <div>
                                                <button onClick={generateHandler} className='btn btn-primary mr-5'>
                                                    Generate
                                                </button>
                                                <button className='btn btn-info'>
                                                    ৳ {total} Taka
                                                </button>
                                            </div>
                                            <Link to='/home/book' className="btn btn-sm btn-primary">Book Order</Link>
                                        </div>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomPlan;
