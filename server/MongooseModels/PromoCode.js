import mongoose from 'mongoose';

const promoCodeSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    discountPercentage: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
});

const PromoCode = mongoose.model('PromoCode', promoCodeSchema);

export default PromoCode;