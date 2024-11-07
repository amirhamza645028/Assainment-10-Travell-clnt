import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SportsDetails = () => {
    const { id } = useParams();
    const [touristSpot, setTouristSpot] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTouristSpot = async () => {
            try {
                const response = await fetch(`https://knowtheplace-server.vercel.app/singleSpot/${id}`);
                const data = await response.json();
                setTouristSpot(data);
                console.log('Tourist Spot:', data);
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error("Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchTouristSpot();
    }, [id]);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (!touristSpot) {
        return <div className="text-center">No details available for this spot.</div>;
    }

    return (
        <div className="container mx-auto my-10">
            <div className="max-w-[600px] mx-auto border rounded-lg shadow-lg p-5 bg-white">
                <h1 className="text-center text-3xl font-bold mb-5">{touristSpot.touristSpotName}</h1>
                <img src={touristSpot.imgURLs} alt={touristSpot.touristSpotName} className="w-full h-48 object-cover rounded-lg mb-5" />
                <div className="space-y-3">
                    <p><strong>Country:</strong> {touristSpot.countryName}</p>
                    <p><strong>Location:</strong> {touristSpot.location}</p>
                    <p><strong>Average Cost:</strong> {touristSpot.avrCost}</p>
                    <p><strong>Season:</strong> {touristSpot.seasonName}</p>
                    <p><strong>Travel Time:</strong> {touristSpot.travelTime} days</p>
                    <p><strong>Total Visitors Per Year:</strong> {touristSpot.totalVisitors}</p>
                    <p><strong>Description:</strong> {touristSpot.shortDescription}</p>
                </div>
                <div className="text-center mt-5">
                    <button className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300">
                        Back to List
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SportsDetails;