import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";
import { getProduct } from "@/lib/actions/product";

const Page = async () => {
  const products = await getProduct();

  return (
    <div className="l-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12">
      {products.map((product: any) => (
        <Card
          key={product.id}
          className="group hover:shadow-medium transition-all duration-300 border-0 bg-card pt-0"
        >
          <div className="relative aspect-square overflow-hidden rounded-t-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <CardTitle className="text-lg line-clamp-1">
                {product.name}
              </CardTitle>
              <div className="flex items-center text-yellow-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-xs text-muted-foreground ml-1">4.8</span>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-primary">
                ${product.price}
              </span>
            </div>

            <div className="flex gap-2">
              <Button asChild className="flex-1">
                <Link href={`/products/${product._id}`}>View Details</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Page;
