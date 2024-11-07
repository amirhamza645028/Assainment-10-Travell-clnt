import { FaTelegramPlane, FaWhatsappSquare } from 'react-icons/fa';
import contact from '../assets/contact.jpg'
import { FaFacebook } from 'react-icons/fa6';
import { Helmet } from 'react-helmet';


const ContactCard = () => {
    return (
        <div className='w-11/12 mx-auto'>
        <Helmet><title>Rx_Property | Contact</title></Helmet>
        <div className="card p-2 mt-4 lg:ml-96 bg-base-100 w-96 shadow-xl">
            <figure>
                <img className='h-96 w-80 rounded-lg'
                    src={contact}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl"> Fund us</h2>
                <h2 className="card-title"> <span className='text-green-600'>< FaWhatsappSquare /></span><a className='underline text-red-500' href='https://web.whatsapp.com/'>01729007747</a></h2>
                <h2 className="card-title"> <FaTelegramPlane /> <a className='underline text-red-500' href='https://www.instagram.com/'>01729007747</a> </h2>
                
                <h2 className="card-title"> <span className='text-cyan-400'><FaFacebook /></span><a href='https://www.facebook.com/profile.php?id=100081753585668&mibextid=ZbWKwL' className='underline text-green-500'> Our Facebook id</a></h2>
                <p> If a dog chews shoes quia asperiores quasi harum in, excepturi beatae quidem ullam cupiditate iste repellendus. shoes does he choose?</p>
               
            </div>
        </div>
    </div>
    );
};

export default ContactCard;
