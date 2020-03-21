import { Document, Schema, Model, model, Types } from 'mongoose';
import { CollectionsNames } from "../utils/consts";


export interface IPayment extends Document {
    _id: Types.ObjectId,
    debtId: Types.ObjectId,
    date: Date,
    value: number,
    type: number
}

const PaymentSchema: Schema<IPayment> = new Schema<IPayment>({
    _id: { type: Schema.Types.ObjectId },
    debtId: { type: Schema.Types.ObjectId },
    date: { type: Schema.Types.Date },
    value: { type: Number },
    type: { type: Number },
}, 
{ collection: CollectionsNames.Payment });

/* pre functions */
PaymentSchema.pre<IPayment>('save', async function(next) {
    try {
        // Use any model controller for doing some stuff before save this document
        next()
    } catch(ex) {
        return next(ex);
    }
});

export const PaymentModel: Model<IPayment> = model<IPayment>(CollectionsNames.Payment, PaymentSchema);
