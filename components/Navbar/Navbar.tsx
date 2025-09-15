import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold hover:text-blue-600">
            My Website
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/Products" className="hover:text-blue-600">Products</Link>
            <Link href="/Checkout" className="hover:text-blue-600">Checkout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
