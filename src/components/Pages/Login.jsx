import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Authcontext } from "../provider/Authprovider";


const Login = () => {
    const { loginUser, googleLogin, githubleLogin, facebookLogin } = useContext(Authcontext);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || "/";
    const handleSocialLogin = (socialProvider) => {
        socialProvider()
            .then((result) => {
                if (result.user) {
                    navigate(from);
                }
            });
    };

    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then((result) => {
                if (result.user) {
                    navigate(from);
                }
            })
            .catch((error) => {
                console.error("Login error:", error);
            });
    };

    return (
        <div className="mt-[100px] mb-[100px] max-w-[350px] mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
            </Helmet>
            <div className="container">
                <div className="bg-yellow-100 p-6 rounded-md">
                    <h3 className="text-center text-8xl title-text mb-[25px]">Log in</h3>


                    <div className="mt-5 login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" {...register("email", { required: "Email is required" })} className="input input-bordered " />
                                {errors.email && <p className="input input-bordered error">{errors.email.message}</p>}


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ?  "text" : "password"} placeholder="Password" {...register("password", { required: "Password is required" })} className="input input-bordered"  />
                                <p onClick={() => setShowPassword(!showPassword)} className="pass-eyes">
                                    <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i></p>
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {/* login with */}
                            <div className=" flex items-center gap-4 mb-2 px-10">
                                <hr className="w-6/12" />
                                <span className=" font-bold text-basicColor">Or</span>
                                <hr className="w-6/12" />
                            </div>
                            {/* copy kora */}
                            
                            
                            <div className="text-center space-x-3 mb-5">
                                <button onClick={() => handleSocialLogin(googleLogin)} className="social-login">
                                    <img src="https://auth.hostinger.com/assets/images/oauth/google.svg" alt="Google Login" />
                                </button>
                                <button onClick={() => handleSocialLogin(facebookLogin)} className="social-login bg-[#1877f2]">
                                    <img src="https://auth.hostinger.com/assets/images/oauth/facebook.svg" alt="Facebook Login" />
                                </button>
                                <button onClick={() => handleSocialLogin(githubleLogin)} className="social-login bg-[#2f363d]">
                                    <img src="https://auth.hostinger.com/assets/images/oauth/github.svg" alt="GitHub Login" />
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className="text-center mt-5">
                        <h3>Do not have an account? <Link className="underline  font-sans text-red-500 font-bold" to="/register">Register Now!</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;