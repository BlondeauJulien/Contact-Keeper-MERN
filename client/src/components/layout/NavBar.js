import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ( {title, icon }) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
        </div>
    )
}

NavBar.propTypes =  {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

NavBar.defaultProps = {
    title: "Contact Keeper",
    icon: 'fas fa-id-card-alt'
}

export default NavBar
