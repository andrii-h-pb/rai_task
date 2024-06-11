export interface IRawPokemon {
    abilities: IRawAbility[];
    base_experience: number;
    cries: IRawCries;
    forms: IRawDetails[];
    game_indices: IRawGameIndex[];
    height: number;
    id: number;
    is_default: boolean;
    moves: IRawMove[];
    name: string;
    order: number;
    species: IRawDetails;
    stats: IRawStat[];
    types: IRawType[];
    weight: number;
}

export interface IRawDetails {
    name: string;
    url: string;
}

interface IRawAbility {
    ability: IRawDetails;
    is_hidden: boolean;
    slot: number;
}

interface IRawCries {
    latest: string;
    legacy: string;
}

interface IRawGameIndex {
    game_index: number;
    version: IRawDetails;
}

interface IRawMove {
    move: IRawDetails;
    version_group_details: IRawVersionGroupDetail[];
}

interface IRawVersionGroupDetail {
    level_learned_at: number;
    move_learn_method: IRawDetails;
    version_group: IRawDetails;
}

interface IRawStat {
    base_stat: number;
    effort: number;
    stat: IRawDetails;
}

interface IRawType {
    slot: number;
    type: IRawDetails;
}
