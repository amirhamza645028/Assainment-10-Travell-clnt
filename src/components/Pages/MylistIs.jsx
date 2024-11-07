import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Authcontext } from "../provider/Authprovider";
import MyPostCard from "../MypostCard";


const MylistIs = () => {
    const { currentuser } = useContext(Authcontext);
    const [item, setItem] = useState([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        // Change this URL to your localhost API endpoint
        fetch(`https://knowtheplace-server.vercel.app/all-tourist-spot/${currentuser?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            });
    }, [currentuser, Loading]);

    // Delete 

    const handleDeleteItem = (id) => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://knowtheplace-server.vercel.app/deleteItem/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.deletedCount > 0) {
                            setLoading(!Loading);
                            toast.success("Item Deleted");
                        } else {
                            toast.error("No items were updated");
                        }
                        console.log(data);
                    });
            } else {
                
                toast.info("Deletion cancelled");
            }
        });
    };
    

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My List | Toure-Travel</title>
            </Helmet>
            <div className="mt-[60px] lg:mt-[80px] animate__animated animate__fadeIn">
                <div className="container">
                    <div className="max-w-[750px] mx-auto text-center mb-[80px]">
                        <h2 className="text-4xl text-center font-bold tracking-tight sm:text-6xl">My Tourist </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
                        {
                            item?.map(itemSpot => (
                               <MyPostCard key={itemSpot._id} itemSpot={itemSpot} handleDeleteItem={handleDeleteItem}></MyPostCard>
                            ))
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MylistIs;