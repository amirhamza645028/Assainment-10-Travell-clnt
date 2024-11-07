import { Link } from "react-router-dom";

const AnyQuestion = () => {
    return (
        <div className="mt-[60px] lg:mt-[80px] animate__animated animate__fadeIn">
            <div className="container">
                <div className="max-w-[750px] mx-auto text-center mb-[80px]">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">you Have Questions? Get in Touch!</h2>
                    <p className="lg:text-xl max-w-[650px] mx-auto mt-6 text-lg leading-8">
                        Whether booking assistance, or travel tips, our team 
                        Contact us today to start your journey!
                    </p>
                    <Link to="/contact-us" className="mt-5 btn btn-primary px-8"> Touch</Link> 
                </div>
            </div>
            <div className="text-center w-full">
                <img 
                    src="https://i.ibb.co/1dvVzV0/building.png" 
                    
                    className="w-full h-auto max-w-[800px] mx-auto transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>
    );
};

export default AnyQuestion;
