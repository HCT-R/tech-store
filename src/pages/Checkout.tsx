import { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Добавьте логику отправки данных на сервер
    setSubmitted(true);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Оформление заказа</h2>
      {submitted ? (
        <p>
          Спасибо за заказ, {form.name}! Мы свяжемся с вами в ближайшее время.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">
              Адрес доставки
            </label>
            <textarea
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border p-2"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Оформить заказ
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
