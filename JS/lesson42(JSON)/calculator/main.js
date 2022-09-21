// переменная, в которой хранится выбранное математическое действие
let op;
let count = document.querySelector(".count");

// события расчёта
count.addEventListener("click", () => {
  // переменная для результата
  let result;
  // получаем первое и второе число
  let num1 = +document.querySelector(".num1").value;
  let num2 = +document.querySelector(".num2").value;
  // смотрим, что было в переменной с действием, и действуем исходя из этого
  if (op == "+") {
    result = num1 + num2;
  } else if (op == "-") {
    result = num1 - num2;
  } else if (op == "*") {
    result = num1 * num2;
  } else if (op == "/") {
    result = num1 / num2;
  }
  // отправляем результат на страницу
  document.querySelector(".result").innerHTML = result;
});
