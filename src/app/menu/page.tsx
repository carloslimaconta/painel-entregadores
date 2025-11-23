"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data - replace with Supabase later
const products = [
  {
    id: 1,
    name: "Burger",
    description: "Delicious beef burger",
    price: 12.99,
    image: "/placeholder.jpg" // Add actual images later
  },
  {
    id: 2,
    name: "Pizza",
    description: "Cheesy pizza",
    price: 15.99,
    image: "/placeholder.jpg"
  },
  {
    id: 3,
    name: "Fries",
    description: "Crispy fries",
    price: 5.99,
    image: "/placeholder.jpg"
  }
];

export default function Menu() {
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl">← Back</Link>
          <h1 className="text-2xl font-bold">Menu</h1>
          <Link href="/cart" className="text-xl relative">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Menu Items */}
      <main className="container mx-auto p-4">
        <div className="grid gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-card rounded-lg p-4 flex gap-4">
              <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-muted-foreground mb-2">{product.description}</p>
                <p className="text-2xl font-bold text-primary">£{product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product.id)}
                className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}