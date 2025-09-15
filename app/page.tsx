import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe"
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return <div>
    <section>
    <div>
      <div>
        <h2>Welcome to me WebSite</h2>
        <p> Discover the coolest pottery products at the best price.</p>
        <Button asChild variant="default">
          <Link href="/Products">Browse All Products </Link>
        </Button>
        </div> 
        <Image alt="Banner Image" width={450} height={450} src={products.data[0].images[0]}/>
        </div>
        </section>
        </div>
}
