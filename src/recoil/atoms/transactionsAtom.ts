import { atom } from "recoil";
import { DbTransacion } from "../../interfaces";

export const transactionsState = atom<DbTransacion[]>({
    key: 'transactions',
    default: []
})