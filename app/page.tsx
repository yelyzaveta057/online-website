import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/Carousel/Carousel";



export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
  <section className="py-10 sm:py-14">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* текст */}
        <div className="max-w-xl space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Welcome to My Website
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Discover the latest products at the best prices.
          </p>

          <div className="flex justify-center md:justify-start">
            <Button asChild size="lg" className="rounded-full shadow-md">
              <Link href="/Products">Browse All Products</Link>
            </Button>
          </div>
        </div>

        {/* картинка */}
        <div className="mx-auto w-full max-w-[520px]">
          <div className="aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg ring-1 ring-black/5 dark:border-slate-800 dark:bg-slate-900">
            {products?.data?.[0]?.images?.[0] ? (
              <Image
                alt="Hero Image"
                src={products.data[0].images[0]}
                width={900}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-neutral-400">
                No image
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
    <Carousel products={products.data} />
  </section>
</div>

  );
}