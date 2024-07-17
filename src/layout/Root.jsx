import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-rancho">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;