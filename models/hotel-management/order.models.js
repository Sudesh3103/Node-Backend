import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
});

const orderItemSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    Customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orderItems: {
        type: [orderSchema],
        required: true
    },
    address:{
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "shipped", "delivered", "cancelled"],
        default: "pending"
    }
}, {timestamps:true}
      
);

export const Order = mongoose.model("Order", orderSchema);