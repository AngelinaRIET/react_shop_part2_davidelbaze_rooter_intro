import { useParams } from "react-router-dom";
function ProductSheet() {
  let params = useParams(); // {productCode: <valeur>}
  return <div>Fiche produit {params.productCode}</div>;
}

export default ProductSheet;
