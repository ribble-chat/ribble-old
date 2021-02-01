export type Group = {
    name: string,
    picture: string
}

export type Msg = {
    from: string,
    to: string,
    content: string,
    time?: number
}