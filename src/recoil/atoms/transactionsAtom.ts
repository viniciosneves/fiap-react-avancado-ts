import { atom } from "recoil";
import { Transaction } from "../../interfaces";

export const transactionsState = atom<Transaction[]>({
    key: 'transactions',
    default: []
})