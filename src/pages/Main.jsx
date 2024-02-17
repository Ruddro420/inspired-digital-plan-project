import { Outlet } from "react-router-dom";
import BootomNav from "../components/BootomNav";

const Main = () => {
    return (
        <div>
            <Outlet />
            <BootomNav />
        </div>
    );
};

export default Main;