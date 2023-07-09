import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    })
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
                'service_f6k6x8r',
                'template_ypdevxh',
                form.current,
                'L126rraU3KnImB02D'
            )
            .then(
                () => {
                    alert('Message sent successfully!');
                    window.location.reload(false);
                },
                (err) => {
                    console.log(err);
                    alert('Failed to send the message, please try again.');
                }
            )
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                            index={15}
                        />
                    </h1>
                    <p>
                        Thank you for visiting my portfolio website! I'm thrilled to have 
                        the opportunity to connect with you. I'm open to freelance 
                        opportunities, particularly those involving ambitious and large 
                        projects. If you have any questions, collaborations, or freelance 
                        opportunities you'd like to discuss, please don't hesitate to 
                        reach out using the contact form. I look forward to exploring 
                        potential collaborations!
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                        type='text' 
                                        name='name' 
                                        placeholder='Name' 
                                        required 
                                    />
                                </li>
                                <li className='half'>
                                    <input 
                                        type='email' 
                                        name='email' 
                                        placeholder='Email'
                                        required 
                                    />
                                </li>
                                <li>
                                    <input 
                                        placeholder='Subject'
                                        type='text'
                                        name='subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea 
                                        placeholder='Message' 
                                        name='message' 
                                        required
                                    />
                                </li>
                                <li>
                                    <input 
                                        type='submit' 
                                        className='flat-button' 
                                        value='SEND' 
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Kshitij,
                    <br />
                    India,
                    <br />
                    Street No - 9, Sadh Nagar, Palam
                    <br />
                    New Delhi
                    <br />
                    <span>kjangra1557@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[28.587922883512142, 77.09408573970855]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[28.587922883512142, 77.09408573970855]}>
                            <Popup>Kshitij lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;