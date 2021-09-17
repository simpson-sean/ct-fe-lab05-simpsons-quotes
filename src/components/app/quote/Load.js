import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
    <button onClick={onClick} aria-label="Get Quote">
        Get Quote
    </button>
);

Load.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Load;