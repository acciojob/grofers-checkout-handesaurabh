const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
 const prices = document.querySelectorAll(".price");
  let total = 0;
  prices.forEach(p => total += +p.textContent);
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.setAttribute("colspan", "2");
  cell.id = "ans"; 
  cell.style.textAlign = "center";
  cell.textContent = total;
  row.appendChild(cell);
  document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

