import { Link } from "react-router-dom";

const categories = ["Ноутбуки", "Компьютеры", "Комплектующие", "Периферия"];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl mb-4">Категории</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <Link
              to={`/catalog?category=${encodeURIComponent(category)}`}
              className="text-blue-600 hover:underline"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
