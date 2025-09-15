import Link from "next/link"

export const Navbar = () => {
    return (
    <nav>
       
        <div>
            <Link href="/">My WebSite</Link>
        </div>
        <div>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/checkout">Checkout</Link>
        </div>
    </nav>
    );
};