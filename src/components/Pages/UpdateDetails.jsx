import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateDetails = () => {
     // Use useLoaderData to retrieve the loaded data
     const touristSpot = useLoaderData(); // Fetch the data using the loader
     console.log(touristSpot); // Check if data is loaded correctly
 
     const handleUpdateSpot = (e) => {
         e.preventDefault(); // Prevent the default form submission
 
 
         // Collect the form data
         const imgURLs = e.target.imgURL.value;
         const touristSpotName = e.target.spotName.value;
         const countryName = e.target.countryName.value;
         const location = e.target.location.value;
         const shortDescription = e.target.shortDes.value;
         const seasonName = e.target.season.value;
         const avrCost = e.target.averageCost.value;
         const travelTime = e.target.travelTime.value;
         const totalVisitors = e.target.totalVPY.value;
 
         const allData = {
             imgURLs,
             touristSpotName,
             countryName,
             location,
             shortDescription,
             seasonName,
             avrCost,
             travelTime,
             totalVisitors,
         };
         console.log("Data to update:");
 
         // Update the data using PUT request
         fetch(`https://knowtheplace-server.vercel.app/updateSpot/${touristSpot._id}`, {
             method: "PUT",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(allData),
         })
             .then(res => res.json())
             .then(data => {
                 console.log("Backend response:", data);
                 if (data.modifiedCount > 0) {
                     toast.success("Item updated successfully!");
                 } else {
                     toast.error("No changes made.");
                 }
             })
             .catch(error => console.error("Error updating item:", error));
         
     };
 
     return (
         <div className="container">
             <div className="max-w-[600px] mx-auto my-10 border p-10 rounded-lg">
                 <h1 className="text-center text-3xl font-bold mb-5">Edit Tourist Details</h1>
                 <form onSubmit={handleUpdateSpot}>
                     <div className="grid grid-cols-1 gap-5">
                         <div className="text-black space-y-1">
                             <label>Add an image URL</label>
                             <input type="text" required name="imgURL" defaultValue={touristSpot.imgURLs} className="input input-bordered w-full" />
                         </div>
                         <div className="text-black space-y-1">
                             <label>Tourist  Name</label>
                             <input type="text" required name="spotName" defaultValue={touristSpot.touristSpotName} className="input input-bordered w-full" />
                         </div>
                         <div className="text-black space-y-1">
                             <label>Country Name</label>
                             <input type="text" required name="countryName" defaultValue={touristSpot.countryName} className="input input-bordered w-full" />
                         </div>
                         <div className="text-black space-y-1">
                             <label>Location</label>
                             <input type="text" required name="location" defaultValue={touristSpot.location} className="input input-bordered w-full" />
                         </div>
                         <div className="text-black space-y-1">
                             <label>Short Description</label>
                             <textarea name="shortDes" required defaultValue={touristSpot.shortDescription} className="input input-bordered w-full"></textarea>
                         </div>
                         <div className="text-black space-y-1">
                             <label>Average Cost</label>
                             <input type="number" required name="averageCost" defaultValue={touristSpot.avrCost} className="input input-bordered w-full" />
                         </div>
                         <div className="text-black space-y-1">
                             <label>Season</label>
                             <input type="text" required name="season" defaultValue={touristSpot.seasonName} className="input input-bordered w-full" />
                         </div>
                         <div className="text-black space-y-1">
                             <label>Travel Time (days)</label>
                             <input type="number" required name="travelTime" defaultValue={touristSpot.travelTime} className="input input-bordered w-full" />
                         </div>
                         <div className="text-black space-y-1">
                             <label>Total Visitors Per Year</label>
                             <input type="number" required name="totalVPY" defaultValue={touristSpot.totalVisitors} className="input input-bordered w-full" />
                         </div>
                         <div>
                             <button className="btn btn-primary w-full">Update </button>
                         </div>
                     </div>
                 </form>
             </div>
         </div>
     );
};

export default UpdateDetails;