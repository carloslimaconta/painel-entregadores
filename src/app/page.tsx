import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Delivery App</h1>
          <Link href="/cart" className="text-xl">🛒</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to Fast Food Delivery</h2>
        <p className="text-xl text-muted-foreground mb-8">Order your favorite dishes now!</p>
        <Link href="/menu" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/80">
          View Menu
        </Link>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
              <p>Quick delivery to your doorstep</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Quality Food</h4>
              <p>Fresh ingredients and great taste</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Easy Payment</h4>
              <p>Cash or Card options available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}