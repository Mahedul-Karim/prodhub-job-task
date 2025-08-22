import { getSingleProduct } from "@/lib/actions/product";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Share,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product = await getSingleProduct(id);

  return (
    <div className="min-h-screen bg-background">
      <div className="l-container px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link
            href="/products"
            className="hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <span>/</span>
          <span className="text-foreground">{product?.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-secondary/20">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center text-yellow-500">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-foreground ml-2 font-medium">4.8</span>
                </div>
                <span className="text-muted-foreground">(128 reviews)</span>
              </div>

              <div className="text-3xl font-bold text-primary mb-6">
                ${product?.price}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product?.description}
              </p>
            </div>

            <Button variant="outline" className="w-full" size="lg">
              Buy Now
            </Button>
          </div>

          <div className="border-t border-border pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">
                    On orders over $50
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Warranty</p>
                  <p className="text-xs text-muted-foreground">
                    2 year coverage
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <RotateCcw className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Returns</p>
                  <p className="text-xs text-muted-foreground">30 day policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Product Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Category:</span>
                <span className="ml-2 font-medium">{product?.category}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Stock:</span>
                <span className="ml-2 font-medium">{product?.stock} units</span>
              </div>
             
              <div>
                <span className="text-muted-foreground">Weight:</span>
                <span className="ml-2 font-medium">2.5 lbs</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Button variant="outline" asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
