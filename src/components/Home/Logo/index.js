import './index.scss'
import LogoK from '../../../assets/images/logo-k.png'

const Logo = () => {
    return (
        <div className="logo-container">
            <img className='solid-logo' src={LogoK} alt='K'/>
        </div>
    )
}

export default Logo;