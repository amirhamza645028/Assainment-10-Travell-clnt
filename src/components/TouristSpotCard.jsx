import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';


const customIcon = new L.Icon({
    iconUrl: 'https://i.ibb.co/g6c7C7T/marker-icon.png',
    iconSize: [30, 45],
    iconAnchor: [15, 45],
    popupAnchor: [0, -45],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', 
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
});

const TouristSpotCard = ({ itemSpot }) => {
    
    const defaultCoordinates = [23.8103, 90.4125];

    return (
        <div
            key={itemSpot._id}
            className="rounded-lg border border-gray-200 shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-white"
        >
            <div className="relative">
                <img
                    src={itemSpot.imgURLs}
                    alt={itemSpot.touristSpotName}
                    className="w-full h-48 object-cover transition duration-500 hover:opacity-80"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h2 className="text-xl font-semibold text-white">{itemSpot.touristSpotName}</h2>
                </div>
            </div>
            <div className="p-4">
                <div className="space-y-2">
                    <p className="text-gray-700 flex items-center"><i className="fa-solid fa-money-bill-wave mr-1"></i> {itemSpot.avrCost}</p>
                    <p className="text-gray-700 flex items-center"><i className="fa-solid fa-earth-americas mr-1"></i> {itemSpot.countryName}</p>
                    <p className="text-gray-700 flex items-center"><i className="fa-solid fa-location-dot mr-1"></i> {itemSpot.location}</p>
                    <p className="text-gray-700 flex items-center"><i className="fa-solid fa-tree mr-1"></i> {itemSpot.seasonName}</p>
                </div>

                
                <div className="mt-4 h-48 rounded-lg overflow-hidden">
                    <MapContainer center={defaultCoordinates} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />
                        <Marker position={defaultCoordinates} icon={customIcon}>
                            <Popup>
                                {itemSpot.touristSpotName} - {itemSpot.location}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

                <div className="mt-4">
                    <Link to={`/details/${itemSpot._id}`}>
                        <button className="btn btn-primary w-full py-2 rounded-lg transition duration-300 hover:bg-indigo-700">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotCard;
