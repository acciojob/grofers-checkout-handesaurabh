const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const price = document.querySelectorAll("td.price");
    let total = 0;
    price.forEach(p => total += p.textContent);
    const row = document.createElement("tr")
    row.innerHTML = `<td colspan="2">Total Price: Rs ${total}</td>`
    document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

