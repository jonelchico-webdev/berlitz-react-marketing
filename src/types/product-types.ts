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

type ProductDetailType = {
  driverType: String;
  driverSize: Number;
  headphoneType: String;
  impedance: Number;
  sensitivity: Number;
  frequencyResponse: String;
  maximumInputPower: Number;
  headphoneConnector: String;
  weight: Number;
}

type ProductColorDetailType = {
  color: String;
  image: String;
}
