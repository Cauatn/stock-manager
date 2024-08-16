export type Product = {
  id: string;
  image: React.ReactNode;
  amount: number;
  status: string | React.ReactElement;
  productName: string;
  price: GLfloat;
};
