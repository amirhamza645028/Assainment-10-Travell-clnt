import { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../firebase/AuthProvider";

const MyProfile = () => {

    const { userCurrent: currentuser, loader } = useContext(AuthContext);

    if (loader) {
        return <div className="container">
            <div className="text-center flex justify-center items-center">
                <span className="loading loading-dots loading-lg "></span>
            </div>
        </div>
    }

    if (currentuser) {

        return (
            <div className="my-20">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Profile | Furry Travel</title>
                </Helmet>
                <div className="container">
                    <div className="rounded-2xl p-10 mx-auto max-w-[500px] shadow-xl">
                        <div>
                            <h2 className="text-center text-2xl">Hi {currentuser.displayName}, welcome back!</h2>
                        </div>
                        <div className="max-w-[190px] h-[190px] overflow-hidden mx-auto rounded-full flex justify-center items-center mt-5 my-image-profile">
                            <img src={currentuser.photoURL} />
                        </div>
                        <div className="text-center mt-5">
                            <p>Name: {currentuser.displayName}</p>
                            <p>Email: {currentuser.email}</p>
                            <Link to="/edit-profile" className="btn btn-primary mt-5">Edit Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MyProfile;
