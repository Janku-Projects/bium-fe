import { Route, Routes } from "react-router-dom";
import Intro from "../pages/Home";
import Login from "../pages/Login";

const RoutesGroup = () => {

    const isAuthenticated = () => {

    };

    return (
        <Routes>
            <Route path={"/"} element={<Intro />}/>
            <Route path={"/login"} element={<Login/>}/>

        </Routes>
    );
};


export default RoutesGroup;