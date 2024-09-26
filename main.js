const vypocitat = () => {
	console.log("pocitam");
};

const darkModeSwitch = () => {
  const body = document.body;
  body.classList.toggle("dark-mode");
  localStorage.setItem("background", "black");
  }


const switcherBtn = document.getElementById("mode");
switcherBtn.addEventListener("click", darkModeSwitch);

const formatovaniDatumu = (date) => {
	const den = String(date.getDate()).padStart(2, "0");
	const mesic = String(date.getMonth() + 1).padStart(2, "0");
	const rok = date.getFullYear();
	return `${den}/${mesic}/${rok}`;
};
const dnesniDatum = new Date();
const formatDnes = formatovaniDatumu(dnesniDatum);
const addLine = (cena = "", denExpirace = "", denDnes = formatDnes) => {
	const form = document.getElementById("myForm");
	const newDiv = document.createElement("div");
	newDiv.classList.add("input-group", "my-4");
	newDiv.innerHTML = `
                <span class="input-group-text">Celková cena</span>
                <input type="number" aria-label="Celková cena" class="form-control cena" value="${cena}">
                <span class="input-group-text">Datum expirace</span>
                <input type="date" aria-label="Datum expirace" class="form-control" id="denExpirace" value="${denExpirace}">
                <span class="input-group-text">Dnešní datum</span>
                <input type="text" aria-label="Last name" class="form-control" id="denDnes" value="${formatDnes}" readonly>
                <button type="button" class="btn btn-danger remove-line">-</button>
              `;
	newDiv.querySelector(".remove-line").addEventListener("click", () => {
	newDiv.remove();

	});
	form.appendChild(newDiv);
};

 calculateResult = () => {
  let totalCena = 0;
  const cenaInputs = document.querySelectorAll(".cena");
  cenaInputs.forEach(input => {
    totalCena += parseFloat(input.value) || 0;
  })
  document.getElementById("result").innerHTML = totalCena;
};


const addNewLineBtn = document.getElementById("addNewLine");
addNewLineBtn.addEventListener("click", addLine);
const calculateBtn = document.querySelector(".btn-success");
calculateBtn.addEventListener("click", calculateResult);
addLine();
