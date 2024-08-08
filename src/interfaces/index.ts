export interface Transaction {
    id: number
    value: number
    type: string
    date: Date
}

export interface DbTransacion {
    id: number
    value: number
    type: string
    date: string
}