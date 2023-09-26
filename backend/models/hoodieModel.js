import mongoose from "mongoose";

const hoodieSchema = mongoose.Schema(
    {
        imageUrl: {
            type: String,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true,
            trim: true
        },
        size: {
            type: String,
            required: true,
            enum: ['S', 'M', 'L'],
            required: true
        }
    }
);

export const Hoodie = mongoose.model('Hoodie', hoodieSchema);