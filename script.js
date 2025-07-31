import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// 👇 Firebase config এখানে বসান
const firebaseConfig = 
  

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const linksRef = ref(database, 'links/');
const linkList = document.getElementById('link-list');

onValue(linksRef, (snapshot) => {
  const data = snapshot.val();
  linkList.innerHTML = '';
  for (let key in data) {
    const link = data[key];
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a>`;
    linkList.appendChild(li);
  }
});
