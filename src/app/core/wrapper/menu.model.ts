export interface Menu {
    type: Type,
    label: string,
    icon?: string,
    state?: { to: string, params: {} },
    active?: boolean
}

export enum Type {
    TITLE,
    LINK,
    HASSUBLINK
}