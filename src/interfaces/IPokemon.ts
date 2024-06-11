interface IPokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    stats: string[];
    stat: string;
}

interface IStat {
    base_stat: number;
    effort: number;
    name: string;
}