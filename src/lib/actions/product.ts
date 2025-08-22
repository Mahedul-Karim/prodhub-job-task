"use server";

import { revalidateTag } from "next/cache";
import { ProductType } from "../data";
import { connectDB } from "../db";
import Product from "../models/product";

export const addProduct = async (data: ProductType) => {
  try {
    connectDB();

    await Product.create(data);

    revalidateTag("products");

    return {
      success: true,
    };
  } catch (error) {
    throw error;
  }
};

export const getProduct = async () => {
  connectDB();

  const products = await Product.find();

  return products;
};

export const getSingleProduct = async (id: string) => {
  connectDB();

  const product = await Product.findById(id);

  return product;
};
