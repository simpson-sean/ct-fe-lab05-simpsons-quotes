export const getSimpsonsQuote = async () => {
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1');
    const [quote] = await res.json();

    return {
        image: quote.image,
        text: quote.quote,
        name: quote.character,
    };
};