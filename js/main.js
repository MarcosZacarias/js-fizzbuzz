const row = document.getElementById("row");

for (let i = 1; i <= 100; i++) {
  const box = document.createElement("div");
  box.style.width = "calc(100% / 7)";
  const numberView = document.createElement("p");
  numberView.classList.add("bg-primary", "d-flex", "p-2");
  numberView.style.aspectRatio = "1";
  numberView.style.justifyContent = "center";
  numberView.style.alignItems = "center";
  numberView.style.backgroundColor = "bg-primary";

  let number = i;
  if (i % 3 == 0 && i % 5 == 0) {
    number = "FizzBuzz";
    numberView.classList.add("bg-danger");
  } else if (i % 3 == 0) {
    number = "Fizz";
    numberView.classList.add("bg-success");
  } else if (i % 5 == 0) {
    number = "Buzz";
    numberView.classList.add("bg-warning");
  }
  console.log(number);

  numberView.innerHTML = number;

  box.appendChild(numberView);
  row.appendChild(box);
}
