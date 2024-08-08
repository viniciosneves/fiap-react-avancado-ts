import { useRecoilValue } from "recoil";
import { Transaction } from "../Transaction";
import { Container, Heading, TransactionsList } from "./styles";
import { transactionsSelector } from "../../recoil/selectors/transactionsSelector";

export const Statement = () => {
    const transactions = useRecoilValue(transactionsSelector)
    return (<Container>
        <Heading>
            Extrato
        </Heading>
        <TransactionsList>
            {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)}
        </TransactionsList>
    </Container>)
}