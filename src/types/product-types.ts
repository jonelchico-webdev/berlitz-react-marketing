export type ProductType = {
  brand: String;
  name: String;
  award: String;
  description: String;
  details: ProductDetailType;
  price: Number;
  priceBefore: Number;
  colors: ProductColorDetailType[];
}

export type ProductDetailType = {
  type: String;
  driver: Number;
  frequency: String;
  maximumInputPower: String;
  sensitivity: String;
}

type ProductColorDetailType = {
  color: String;
}
