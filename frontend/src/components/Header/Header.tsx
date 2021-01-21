import React from 'react';
import Logo from '../../assets/uziti_logo.png';
import Styles from './Header.scss';

const Header: React.FC = () => (
    <header className={Styles.header}>
        <h1 className={Styles.headerTitle}>Uziti Code Challenge</h1>
        <img className={Styles.logo} src={Logo} alt="uziti logo" />
    </header>
);

export default Header;