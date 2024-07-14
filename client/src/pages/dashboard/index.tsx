import {useUser} from '@clerk/clerk-react'
import { FinancialRecordForm } from './financial-record-form'
import { FinancialRecordList } from './financial-record-list';
//import cors from "cors"; 

export const Dashboard = () => {
    const {user} = useUser()
    return (
        <div>
            <h1>Welcome {user?.firstName}! here are your finances </h1>
            <FinancialRecordForm />
            <FinancialRecordList />


        </div>
    );
}