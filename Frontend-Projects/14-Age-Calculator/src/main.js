import datepicker from "js-datepicker";
import { DateTime } from "luxon";

const button = document.querySelector("button[type='submit']");
const calender = document.querySelector("input[type='text']");
const result = document.querySelector(".result");

datepicker(".text", {
  formatter: (input, date) => {
    const value = date.toLocaleDateString();
    input.value = value;
  },
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  const regex = /(\d{2})\/(\d{2})\/(\d{4})/g;

  const dataHoje = DateTime.local();
  const dataNascimento = DateTime.fromISO(
    calender.value.replace(regex, "$3-$2-$1")
  );
  const diff = dataHoje
    .diff(dataNascimento, ["years", "months", "days"])
    .toObject();
  if (dataNascimento.diffNow().isValid) {
    result.innerText = `You are ${diff.years} years ${
      diff.months
    } months and ${Math.floor(diff.days)} days old`;
  }
});
