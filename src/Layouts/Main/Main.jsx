import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/Home/NavBar";


const Main = () => {
    return (
        <div>
            <div className="bg-gray-200">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;