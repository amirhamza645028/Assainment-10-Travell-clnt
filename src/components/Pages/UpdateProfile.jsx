import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Authcontext } from "../provider/Authprovider";
 
const UpdateProfile = () => {
  const { userCurrent, loader, updateUserProfile } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit } = useForm();

  if (loader) {
    return (
      <div className="container">
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </div>
    );
  }

  const fromEdit = location?.state || "/my-profile";

  const onSubmit = (data) => {
    const { name, image } = data;
    updateUserProfile(name, image).then(() => {
      navigate(fromEdit);
    });
  };

  if (userCurrent) {
    return (
      <div className="my-20">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Edit Profile </title>
        </Helmet>
        <div className="container mx-auto p-5 bg-white rounded-xl shadow-lg max-w-md">
          <h2 className="text-center text-2xl font-bold mb-6">
            Update Your Profile
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Photo URL</label>
              <input
                type="url"
                placeholder="Enter your photo URL"
                {...register("image", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full mt-4">
              Update Profile
            </button>
          </form>
          <Link to="/my-profile" className="btn btn-secondary w-full mt-4">
            Cancel
          </Link>
        </div>
      </div>
    );
  }

  return null;
};

export default UpdateProfile;
