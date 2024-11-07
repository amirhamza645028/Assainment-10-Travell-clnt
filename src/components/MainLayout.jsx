import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footeer from "./header/Footeer";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footeer></Footeer>
        </div>
    );
};

export default MainLayout;