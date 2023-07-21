const row = document.getElementById("row");

for (let i = 1; i <= 100; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  const numberView = document.createElement("p");
  numberView.classList.add("number-View");

  let number = i;
  if (i % 3 == 0 && i % 5 == 0) {
    number = "FizzBuzz";
    numberView.classList.add("bg-warning");
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
