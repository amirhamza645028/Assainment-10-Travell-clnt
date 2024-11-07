import { Link } from "react-router-dom";

const MyPostCard = ({ itemSpot, handleDeleteItem, handleUpdate }) => {
    return (
        <div key={itemSpot._id} className="rounded-xl border border-gray-300 bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="mb-4 overflow-hidden rounded-t-xl">
                <img src={itemSpot.imgURLs} alt={itemSpot.touristSpotName} className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110" />
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800">{itemSpot.touristSpotName}</h2>
                <div className="space-y-2 text-gray-600 mt-2">
                    <p className="flex items-center"><span className="font-bold">Average Cost:</span> {itemSpot.avrCost}</p>
                    <p className="flex items-center"><span className="font-bold">Country:</span> {itemSpot.countryName}</p>
                    <p className="flex items-center"><span className="font-bold">Location:</span> {itemSpot.location}</p>
                    <p className="flex items-center"><span className="font-bold">Season:</span> {itemSpot.seasonName}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                <Link to={`/update/${itemSpot._id}`}>
    <button className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300">
        Edit
    </button>
</Link>           <button onClick={() => handleDeleteItem(itemSpot._id)} className="btn btn-warning w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition duration-300">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyPostCard;
