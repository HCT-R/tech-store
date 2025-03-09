import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { Product } from "../slices/productsSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-2"
      />
      <h3 className="mt-2 font-semibold flex-1">{product.name}</h3>
      <p className="mt-1 text-gray-700">{product.price} ₽</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        В корзину
      </button>
    </div>
  );
};

export default ProductCard;
