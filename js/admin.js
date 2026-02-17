import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient("TU_URL", "TU_ANON_KEY");

const categorySelect = document.getElementById("categorySelect");
const categoryList = document.getElementById("categoryList");
const productList = document.getElementById("productList");

async function loadCategories() {
  const { data } = await supabase.from("categories").select("*");

  categorySelect.innerHTML = "";
  categoryList.innerHTML = "";

  data.forEach(cat => {
    categorySelect.innerHTML += `
      <option value="${cat.id}">${cat.name}</option>
    `;

    categoryList.innerHTML += `
      <div class="bg-zinc-900 p-3 rounded flex justify-between">
        <span>${cat.name}</span>
      </div>
    `;
  });
}

document.getElementById("createCategory").addEventListener("click", async () => {
  const name = document.getElementById("newCategory").value;

  if (!name) return;

  await supabase.from("categories").insert([{ name }]);

  document.getElementById("newCategory").value = "";
  loadCategories();
});

document.getElementById("productForm").addEventListener("submit", async e => {
  e.preventDefault();

  const name = e.target.name.value;
  const desc = e.target.description.value;
  const priceCriollo = e.target.price_criollo.value;
  const priceCasero = e.target.price_casero.value;
  const image = e.target.image.value;
  const category_id = e.target.category_id.value;

  await supabase.from("products").insert([{
    name,
    description: desc,
    price_criollo: priceCriollo,
    price_casero: priceCasero,
    image,
    category_id
  }]);

  e.target.reset();
  loadProducts();
});

async function loadProducts() {
  const { data } = await supabase
    .from("products")
    .select("*, categories(name)");

  productList.innerHTML = "";

  data.forEach(p => {
    productList.innerHTML += `
      <div class="bg-zinc-900 p-4 rounded">
        <h3 class="text-yellow-400">${p.name}</h3>
        <p class="text-sm text-gray-400">${p.categories.name}</p>
        <p>$${p.price_criollo}</p>
      </div>
    `;
  });
}

loadCategories();
loadProducts();
