import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://leads-tracker-app-3f2fe-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log(database);

// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");
// const deleteBtn = document.getElementById("delete-btn");

// function render(leads) {
//   let listItems = "";
//   for (let i = 0; i < leads.length; i++) {
//     listItems += `
//             <li>
//                 <a target='_blank' href='${leads[i]}'>
//                     ${leads[i]}
//                 </a>
//             </li>
//         `;
//   }
//   ulEl.innerHTML = listItems;
// }

// deleteBtn.addEventListener("dblclick", function () {
// });

// inputBtn.addEventListener("click", function () {
//   console.log(inputEl.value);
//   inputEl.value = "";
// });
