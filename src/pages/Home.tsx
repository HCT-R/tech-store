import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/productsSlice";
import { RootState, AppDispatch } from "../store";
import ProductList from "../components/ProductList";
import { useTranslation } from "react-i18next";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: products, status } = useSelector(
    (state: RootState) => state.products
  );
  const { t } = useTranslation();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <div className="p-4">
      <section className="mb-8">
        <img
          src="https://via.placeholder.com/1200x300?text=Tech+Store+Banner"
          alt={t("bannerAlt", "Banner")}
          className="w-full"
        />
      </section>
      <section className="mb-8 flex space-x-4">
        <div className="flex-1 bg-blue-200 p-4 text-center">
          {t("promo1", "Акция 1")}
        </div>
        <div className="flex-1 bg-green-200 p-4 text-center">
          {t("promo2", "Акция 2")}
        </div>
      </section>
      <h2 className="text-2xl font-bold mb-4">
        {t("popularProducts", "Популярные товары")}
      </h2>
      {status === "loading" ? (
        <p>{t("loading", "Загрузка...")}</p>
      ) : status === "failed" ? (
        <p>{t("errorLoading", "Ошибка загрузки товаров")}</p>
      ) : (
        <ProductList products={products.slice(0, 8)} />
      )}
    </div>
  );
};

export default Home;
