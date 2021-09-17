import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import SimpsonsQuoteContainer from './SimpsonsQuotesContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get(
        'https://thesimpsonsquoteapi.glitch.me/quotes',
        (req, res, ctx) => {
            return res(
                ctx.json([
                {
                    image: 'https://example.com/homer.jpg',
                    character: 'Homer Simpson',
                    quote: 'Stupid sexy Flanders',
                },
             ])
          );
       }       
    )
);

describe('Simpsons Quote Container', () => {
    beforeAll( () => server.listen() );
    afterAll( () => server.close() );

    it('uses a button to get quotes', async () => {
        render(<SimpsonsQuoteContainer />)

        const quoteButton = screen.getByRole('button', {name: 'Get Quote'});
        fireEvent.click(quoteButton);

        return waitFor(() => {
            screen.getByText('Stupid sexy Flanders - Homer Simpson');
        });
    });
});