import { supabase } from "./supabase.js";

const container = document.getElementById("cartItems");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(item => {
  total += item.price;
  container.innerHTML += `
    <div class="flex justify-between bg-zinc-900 p-3 rounded-lg">
      <span>$${item.price}</span>
    </div>
  `;
});

document.getElementById("total").innerText = "$" + total;

document.getElementById("confirm").addEventListener("click", async () => {
  const { data } = await supabase
    .from("orders")
    .insert([{ total }])
    .select()
    .single();

  for (const item of cart) {
    await supabase.from("order_items").insert([
      {
        order_id: data.id,
        product_id: item.id,
        quantity: 1,
        price: item.price
      }
    ]);
  }

  localStorage.removeItem("cart");
  alert("Pedido enviado a PACHI");
});
