import {useUser} from '@clerk/clerk-react'
import { FinancialRecordForm } from './financial-record-form'
import { FinancialRecordList } from './financial-record-list';
import { useFinancialRecords } from '../../contexts/financial-record-context';
import { useMemo } from 'react';
//import cors from "cors"; 

export const Dashboard = () => {
    const {user} = useUser();
    const {records} = useFinancialRecords();

    const totalMonthly = useMemo(() => {
        let totalAmount = 0;
        records.forEach((record) => {
            totalAmount = totalAmount + record.amount; 
        });
        return totalAmount;

    }, [records]);
    return (
        <div>
            <h1>Welcome {user?.firstName}! here are your finances </h1>
            <FinancialRecordForm />
            <div>Total Monthly: ${totalMonthly}</div>
            <FinancialRecordList />


        </div>
    );
}