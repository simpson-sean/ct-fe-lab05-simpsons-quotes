import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ image, text, name }) => (
    <figure>
        <img src={image} alt={name} />
        <figcaption>
            {text} - {name}
        </figcaption>
    </figure>
);

Quote.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Quote;