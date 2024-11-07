import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import { Authcontext } from "../provider/Authprovider";
// import { AuthContext } from "../firebase/AuthProvider";

const AddTreavelsSpot = () => {
    const { userCurrent: currentuser } = useContext(Authcontext); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const imgURLs = e.target.imgURL.value;
        const touristSpotName = e.target.spotName.value;
        const countryName = e.target.countryName.value;
        const location = e.target.location.value;
        const shortDescription = e.target.shortDes.value;
        const seasonName = e.target.season.value;
        const avrCost = e.target.averageCost.value;
        const travelTime = e.target.travelTime.value;
        const totalVisitors = e.target.totalVPY.value;

        // User Data
        const userEmail = currentuser.email;
        const userName = currentuser.displayName;

        const allturisData = { imgURLs, touristSpotName, countryName, location, shortDescription, seasonName, avrCost, travelTime, totalVisitors, userEmail, userName };

        try {
            const response = await fetch('https://knowtheplace-server.vercel.app/add-tourist-spot', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(allturisData),
            });
            const data = await response.json();
            if (data?.insertedId) {
                toast("Item Added, Thank you");
            } else {
                toast.error("Failed to add the tourist spot.");
            }
        } catch (error) {
            console.error("Error adding tourist spot:", error);
            toast.error("An error occurred while adding the tourist spot.");
        }
    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
            <ToastContainer />
            <div className="container max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Add a New Item | Travel-toure</title>
                </Helmet>
                <h1 className="text-center text-3xl font-bold mb-5">Add Tourist Spot</h1>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        {[
                            { label: "Add an image URL", name: "imgURL", type: "text", required: true },
                            { label: "Tourist Spot Name", name: "spotName", type: "text", required: true },
                            { label: "Country Name", name: "countryName", type: "text", required: true },
                            { label: "Location", name: "location", type: "text", required: true },
                            { label: "Short Description", name: "shortDes", type: "textarea", required: true },
                            { label: "Average Cost", name: "averageCost", type: "number", required: true },
                            { label: "Season", name: "season", type: "text", placeholder: "e.g. Winter, Summer", required: true },
                            { label: "Travel Time (in days)", name: "travelTime", type: "number", required: true },
                            { label: "Total Visitors Per Year", name: "totalVPY", type: "number", required: true },
                        ].map(({ label, name, type, placeholder, required }) => (
                            <div key={name} className="text-gray-700">
                                <label className="block mb-1">{label} {required && <span className="text-red-500">*</span>}</label>
                                {type === "textarea" ? (
                                    <textarea name={name} required className="input input-bordered w-full border-gray-300 rounded-md p-2" />
                                ) : (
                                    <input type={type} name={name} placeholder={placeholder} required className="input input-bordered w-full border-gray-300 rounded-md p-2" />
                                )}
                            </div>
                        ))}
                        <div>
                            <button className="btn btn-primary w-full py-2">Add </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTreavelsSpot;