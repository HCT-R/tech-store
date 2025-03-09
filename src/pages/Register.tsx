import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../slices/authSlice";

const Register = () => {
  const dispatch = useDispatch();

  // Локальное состояние формы
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Обработка изменений в полях
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Отправка формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Вызываем экшен registerUser
    dispatch(registerUser(form));
    // Можно сделать редирект на главную или страницу логина
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Регистрация</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
      <div className="mb-4">
  {/* Имя пользователя */}
  <label htmlFor="username" className="block mb-1">Имя пользователя</label>
  <input
    id="username"
    type="text"
    name="username"
    placeholder="Введите имя пользователя"
    value={form.username}
    onChange={handleChange}
    className="w-full border p-2"
    required
  />
</div>

<div className="mb-4">
  {/* Email */}
  <label htmlFor="email" className="block mb-1">Email</label>
  <input
    id="email"
    type="email"
    name="email"
    placeholder="Введите ваш email"
    value={form.email}
    onChange={handleChange}
    className="w-full border p-2"
    required
  />
</div>

<div className="mb-4">
  {/* Пароль */}
  <label htmlFor="password" className="block mb-1">Пароль</label>
  <input
    id="password"
    type="password"
    name="password"
    placeholder="Введите пароль"
    value={form.password}
    onChange={handleChange}
    className="w-full border p-2"
    required
  />
</div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default Register;
