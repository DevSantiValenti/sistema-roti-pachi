// js/storage.js

// const DB_KEY = "lyl_db";

// export function getDB() {
//   const db = localStorage.getItem(DB_KEY);
//   return db ? JSON.parse(db) : initDB();
// }

// export function saveDB(data) {
//   localStorage.setItem(DB_KEY, JSON.stringify(data));
// }

// function initDB() {
//   const initial = {
//     products: [
//       {
//         id: crypto.randomUUID(),
//         name: "Completa",
//         description: "Carne, queso, huevo...",
//         priceCriollo: 4300,
//         priceCasero: 4500,
//         category: "hamburguesas",
//         image: ""
//       }
//     ],
//     promos: [],
//     users: [
//       {
//         id: 1,
//         username: "admin",
//         password: "1234"
//       }
//     ]
//   };

//   localStorage.setItem(DB_KEY, JSON.stringify(initial));
//   return initial;
// }
