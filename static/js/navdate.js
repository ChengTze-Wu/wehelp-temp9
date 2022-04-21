const d = new Date();
let day = d.getDate();
let month = d.getMonth() + 1;
navdate__today_btn.textContent = `${month}/${day}`;
