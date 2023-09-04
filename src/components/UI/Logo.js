import LogoFile from './logo.svg';

import './Logo.scss';

const Logo = (props) => {
    const classes = props.className;
    
    return (
        <div className={classes}>
            <img src={LogoFile} alt="AEHCh" />
        </div>
    );
}

export default Logo;