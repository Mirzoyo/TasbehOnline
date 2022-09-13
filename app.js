const span_subhanallah = document.getElementById("span_subhanallah");
const span_alhamdulillah = document.getElementById("span_alhamdulillah");
const span_allohu_akbar = document.getElementById("span_allohu_akbar");
const reset_btn = document.getElementById("reset");

const btn_1 = document.getElementById("btn_1");
const btn_2 = document.getElementById("btn_2");
const btn_3 = document.getElementById("btn_3");

let subhanalloh_count = 0;
let alhamdulillah_count = 0;
let allohu_akbar_count = 0;

if (localStorage.length !== 0) {
  span_subhanallah.textContent = localStorage.getItem("s_count");
  span_alhamdulillah.textContent = localStorage.getItem("a_count");
  span_allohu_akbar.textContent = localStorage.getItem("allohu_akbar_count");
} else {
  localStorage.setItem("s_count", subhanalloh_count);
  localStorage.setItem("a_count", alhamdulillah_count);
  localStorage.setItem("allohu_akbar_count", allohu_akbar_count);
}

btn_1.addEventListener("click", () => {
  subhanalloh_count++;
  localStorage.setItem("s_count", subhanalloh_count);
  span_subhanallah.textContent = localStorage.getItem("s_count");
});




btn_2.addEventListener("click", () => {
  alhamdulillah_count++;
  localStorage.setItem("a_count", alhamdulillah_count);
  span_alhamdulillah.textContent = localStorage.getItem("a_count");  
});
  // if ("a_count" === alhamdulillah_count){
  //   alhamdulillah_count++;
  // }



btn_3.addEventListener("click", () => {
  allohu_akbar_count++;
  localStorage.setItem("allohu_akbar_count", allohu_akbar_count);
  span_allohu_akbar.textContent = localStorage.getItem("allohu_akbar_count");
});

reset_btn.addEventListener("click", () => {
  subhanalloh_count = 0;
  alhamdulillah_count = 0;
  allohu_akbar_count = 0;

  span_subhanallah.textContent = subhanalloh_count;
  span_alhamdulillah.textContent = alhamdulillah_count;
  span_allohu_akbar.textContent = allohu_akbar_count;

  localStorage.setItem("s_count", 0);
  localStorage.setItem("a_count", 0);
  localStorage.setItem("allohu_akbar_count", 0);
});