export interface FilterW {
    q: string,
    lang: string,
    units: string
}

export interface FilterCity {
    id: string,
    lang: string,
    units: string
}

export type CardType = {
    title: string,
    code: number,
    units: string,
    content: void,
    icon: string
}
