import { useState } from "react"
import { Card, Form, Heading, Input, Label, Select } from "./styles.tsx"
import { Button } from "../Button"
import { useRecoilValue } from "recoil"
import { transactionTypesState } from "../../recoil/atoms/transactionTypesAtom.ts"
import { useAddTransation } from "../../hooks/useAddTransaction.ts"

export const TransactionForm = () => {

    const [transactionType, setTransactionType] = useState('')
    const [transactionValue, setSetTransactionValue] = useState('')

    const addTransaction = useAddTransation()

    const transactionTypes = useRecoilValue(transactionTypesState)

    const createTransacion = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        addTransaction(transactionType, transactionValue)
    }

    return (
        <Card>
            <Heading>
                Nova transação
            </Heading>
            <Form onSubmit={createTransacion}>
                <Select     
                    value={transactionType} 
                    onChange={evt => setTransactionType(evt.target.value)}
                    required
                >
                    <option value="" disabled hidden>
                        Selecione o tipo de transação
                    </option>
                    {transactionTypes.map((type) => <option value={type} key={type}>{type}</option>)}
                </Select>
                <div>
                    <Label>
                        Valor
                    </Label>
                    <Input 
                        placeholder="00,00" 
                        type="number"
                        value={transactionValue}
                        onChange={evt => setSetTransactionValue(evt.target.value)}
                        required
                    />
                </div>
                <Button>
                    Concluir transação
                </Button>
            </Form>
        </Card>
    )
}