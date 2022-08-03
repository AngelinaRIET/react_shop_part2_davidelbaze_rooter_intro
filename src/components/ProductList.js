import ProductCard from "./ProductCard";
import { productDatabase } from "../lib/database";
function ProductList() {
  return productDatabase.map((product) => (
    <ProductCard
      key={product.productCode}
      productCode={product.productCode}
      description={product.description}
      unitPrice={product.unitPrice}
    />
  ));
}
export default ProductList;
