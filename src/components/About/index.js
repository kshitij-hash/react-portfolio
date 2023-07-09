import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    })
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            index={15}
                        />
                    </h1>
                    <p>
                        I'm a full-stack web developer with a passion for learning.
                        I'm currently working on a few projects, including this
                        portfolio site, and I'm always looking for new opportunities to
                        learn and grow.
                    </p>
                    <p>
                        I'm an undergraduate student at Netaji Subhas University of
                        Technology, New Delhi, pursuing a Bachelor's degree in Computer
                        Science and Engineering, specializing in Mathematics and Computing.
                        I'm a self-taught developer with a keen interest in web development,
                        web3.0 technologies and cybersecurity.
                    </p>
                    <p>
                        If I need to describe myself in one word, it would be
                        <span className='highlight'> curious</span>. I'm always looking to learn new things and explore new technologies. I'm a quick learner and a team player.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cube-spinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faNode} color='#6cc24a' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About;