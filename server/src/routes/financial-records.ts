import express, {Request, Response} from 'express'
import FinancialRecordModel from '../schema/financial-record'

const router = express.Router();


router.get('/getAllByUserID:userId', async (req: Request, res: Response) => {
    
    try {
        const userID = req.params.userID;
        const records = await FinancialRecordModel.find({userId : userID});

        if (records.length === 0) {
            return res.status(400).send("No records found");
        }
        res.status(200).send(records);
    }

    catch (err){
        res.status(500).send(err);
    }
})

router.post('/', async (req: Request , res: Response) => {
    try {
        const newRecordBody = req.body();
        const newRecord = new FinancialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();
        res.status(200).send(savedRecord);
    }
    catch (err) {
        res.status(500).send(err);

    }
})

router.put('/', async (req: Request , res: Response) => {
    try {
        const newRecordBody = req.body();
        const newRecord = new FinancialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();
        res.status(200).send(savedRecord);
    }
    catch (err) {
        res.status(500).send(err);

    }
})

router.delete('/', async (req: Request , res: Response) => {
    try {
        const newRecordBody = req.body();
        const newRecord = new FinancialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();
        res.status(200).send(savedRecord);
    }
    catch (err) {
        res.status(500).send(err);

    }
})
export default router;