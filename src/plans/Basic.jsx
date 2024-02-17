import { useEffect, useState } from 'react';
import mainData from '../../data/basic.json';
import { Link } from 'react-router-dom';

const Basic = () => {
    const [selectedPlan, setSelectedPlan] = useState('1');
    const [selectedMonths, setSelectedMonths] = useState(1);
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const selectedData = mainData.find(item => item.id === selectedPlan);
        if (selectedData) {
            console.log(total);
            const adjustedData = selectedData.items.map(item => ({
                ...item,
                value: parseInt(item.value) * selectedMonths
            }));
            // total data count
            const getTotal = selectedData.total;
            const totalData = parseInt(getTotal) * selectedMonths;

            setData(adjustedData);
            setTotal(totalData);

        }
    }, [selectedPlan, selectedMonths, total]);

    console.log(total);
    const handlePlanChange = (e) => {
        setSelectedPlan(e.target.value);
    };

    const handleMonthChange = (e) => {
        setSelectedMonths(parseInt(e.target.value));
    };

    return (
        <>
            <div className="py-[10px] text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">Choose a Basic Plan</h2>
            </div>
            <div className="flex justify-center mb-4">
                <select value={selectedPlan} onChange={handlePlanChange} className="select select-secondary w-full max-w-xs m-3">
                    {mainData.map(plan => (
                        <option key={plan.id} value={plan.id}>Plan {plan.id}</option>
                    ))}
                </select>
                <select value={selectedMonths} onChange={handleMonthChange} className="select select-secondary w-full max-w-xs m-3">
                    {[1, 2, 3, 4, 5, 6].map(month => (
                        <option key={month} value={month}>{month} Month(s)</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-4 gap-8 justify-items-center">
                {data.map((item, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl border">
                        <div className="card-body w-30">
                            <h2 className="card-title">
                                {item.name}
                                <div className="badge badge-secondary">{item.value}</div>
                            </h2>

                        </div>
                    </div>
                ))}
            </div>
            {/* Total Costing */}
            <div role="alert" className="alert alert-info shadow-lg mt-10 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h2>  <button className="btn btn-sm btn-danger">Total Cost : ৳ {total} </button>  </h2>
                <Link to='/home/book' className="btn btn-sm btn-danger">Book Order</Link>
            </div>
        </>
    );
};

export default Basic;
