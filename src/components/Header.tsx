import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";
import NavAction from "./NavAction";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8 l-container flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">ProdHub</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/products"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
        </div>
        <NavAction />
      </div>
    </header>
  );
};

export default Header;
