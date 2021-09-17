import React, { useState } from 'react';
import { getSimpsonsQuote } from '../services/simpsonApi';
import Load from '../components/app/quote/Load';
import Quote from '../components/app/quote/Quote';

const SimpsonsQuoteContainer = () => {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);

        const getQuote = await getSimpsonsQuote();

        setQuote(getQuote);

        setLoading(false);
    }
   

    return(
        <>
        <Load onClick={handleClick} />
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            quote && (
                <Quote image={quote.image} name={quote.name} text={quote.text} /> 
            )
        )}
        </>
    );

};

export default SimpsonsQuoteContainer;
