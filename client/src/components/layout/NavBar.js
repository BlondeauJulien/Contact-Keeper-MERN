import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import About from '../pages/About'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ConctactContext from '../../context/contact/contactContext';

const NavBar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ConctactContext);

	const { isAuthenticated, user, logout } = authContext;
	const { clearContacts } = contactContext;
    
    const onLogout = () => {
		logout();
		clearContacts();
    }

	const authLinks = (
		<Fragment>
			<li>Hello {user && user.name}</li>
			<li>
				<a onClick={onLogout} href="#!">
					<i className="fas fa-sign-out-alt" /> <span className="hide-sm">Logout</span>
				</a>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
		</Fragment>
	);

	return (
		<div className="navbar bg-primary">
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				{/* 				<li>
					<Link to="/"> Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li> */}
				{isAuthenticated ? authLinks : guestLinks}
			</ul>
		</div>
	);
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string
};

NavBar.defaultProps = {
	title: 'Contact Keeper',
	icon: 'fas fa-id-card-alt'
};

export default NavBar;
