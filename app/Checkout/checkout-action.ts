import { stripe } from "@/lib/stripe";
import { CartItem } from "@/store/cart-store";

export const checkoutActrion = async (formData: FormData): Promise<void> => {

    const itemsJson = formData.get("items") as string
    const items = JSON.parse(itemsJson)
    const line_items = items.map((item:CartItem) => ({
        price_data: {
            currency: "cad",
            product_data: {name: item.name},
            unit_amount: item.price
        },
        quantity: item.quantity,

    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: 
    })
};