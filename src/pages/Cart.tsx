import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeFromCart, clearCart } from "../slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Корзина</h2>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>{(item.price * item.quantity).toFixed(2)} ₽</span>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500"
              >
                Удалить
              </button>
            </div>
          ))}
          <div className="mt-4 font-bold">
            Итого: {total.toFixed(2)} ₽
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Очистить корзину
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
