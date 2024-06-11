'use client';

import { useQuery } from '@tanstack/react-query';
import { IRawDetails, IRawPokemon } from 'interfaces';
import { v4 as uuidv4 } from 'uuid';

export const usePokemons = () => {
    return useQuery({
        queryKey: ['pokemons'],
        queryFn: async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const { results } = await response.json();
            const pokemons = await Promise.all<IRawPokemon>(
                (results as IRawDetails[]).map(({ url }) =>
                    fetch(url).then((res) => res.json())
                )
            );

            return pokemons.map(({ name, height, stats, weight }) => ({
                id: uuidv4(),
                cells: [
                    {
                        id: uuidv4(),
                        name: 'name',
                        type: 'string',
                        value: name,
                    },
                    {
                        id: uuidv4(),
                        name: 'height',
                        type: 'number',
                        value: height,
                    },
                    {
                        id: uuidv4(),
                        name: 'weight',
                        type: 'number',
                        value: weight,
                    },
                    {
                        id: uuidv4(),
                        name: 'main-stat',
                        type: 'dropdown',
                        value: stats[0].stat.name,
                        options: stats.map(({ stat: { name } }) => name),
                    },
                ],
            }));
        },
    });
};
