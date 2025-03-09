// src/components/Header.tsx
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { logoutUser } from "../slices/authSlice";
import { useTranslation } from "react-i18next";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const { t, i18n } = useTranslation();

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Логотип */}
        <Link to="/" className="text-xl font-bold">
          {t("storeName", "Tech Store")}
        </Link>

        {/* Переключатель языков */}
        <div className="space-x-2">
          <button onClick={() => handleLangChange("ru")}>RU</button>
          <button onClick={() => handleLangChange("en")}>EN</button>
          <button onClick={() => handleLangChange("kk")}>KK</button>
        </div>

        {/* Навигация и авторизация */}
        <nav className="flex space-x-4">
          <Link to="/catalog">{t("catalog", "Каталог")}</Link>
          <Link to="/cart">{t("cart", "Корзина")}</Link>
          {currentUser ? (
            <>
              <span>{t("greeting", "Привет")}, {currentUser.username}</span>
              <button onClick={() => dispatch(logoutUser())}>
                {t("logout", "Выйти")}
              </button>
            </>
          ) : (
            <>
              <Link to="/login">{t("login", "Вход")}</Link>
              <Link to="/register">{t("register", "Регистрация")}</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
