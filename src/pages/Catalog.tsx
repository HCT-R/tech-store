import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/productsSlice";
import { RootState, AppDispatch } from "../store";
import ProductList from "../components/ProductList";

const Catalog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: products, status } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Каталог товаров</h2>
      {status === "loading" ? (
        <p>Загрузка...</p>
      ) : status === "failed" ? (
        <p>Ошибка загрузки товаров</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default Catalog;
