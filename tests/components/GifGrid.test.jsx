import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en < GifGrid />', () => {

    const category = 'KillJoy';

    test('Debe de mostrar el loading incialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={category} />);
        expect( screen.getAllByText('Cargando...'));
        expect( screen.getAllByText(category));

    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'KillJoy',
                url: 'https://localhost/killjoy.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg' 
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });


        render( <GifGrid category={category} />);
        expect( screen.getAllByRole('img'). length ).toBe(2);

    });

});