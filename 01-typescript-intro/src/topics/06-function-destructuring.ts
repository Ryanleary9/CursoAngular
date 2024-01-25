export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

interface TaxCaculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation(
  options: TaxCaculationOptions
): [number, number] {
  const { products, tax } = options;
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

// const shoppingCart = [phone, tablet];
// export const tax = 0.15;

// const [price, taxPrice] = taxCalculation({ products: shoppingCart, tax });

// console.log("Total", price);
// console.log("Total", taxPrice);
