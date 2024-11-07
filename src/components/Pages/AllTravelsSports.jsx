import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import TouristSpotCard from "../TouristSpotCard";


 
const AllTravelsSports = () => {
    const AllTravelsSports = useLoaderData();

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Tourist Spot | Travel-toure</title>
            </Helmet>
            <div className="mt-10 lg:mt-20 animate__animated animate__fadeIn">
                <div className="container">
                    <div className="max-w-[750px] mx-auto text-center mb-10">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Explore All Tourist Spots</h2>
                        <p className="mt-4 text-gray-600">Discover amazing places to visit!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {AllTravelsSports?.map(itemSpot => (
                            <TouristSpotCard key={itemSpot._id} itemSpot={itemSpot}></TouristSpotCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTravelsSports;