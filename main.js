// const fs = require("node:fs/promises");
import data from "./data.json";
console.log(data);

let questionIndex = 0;
let listAnswer = {};

const redirectToNewPage = (new_page) => {
  window.location.href = new_page;
};

const addQuestion = () => {
  const newQuestionBox = document.createElement("div");
  const newQuestion = {
    topic: "",
    listAnswer: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
    correctAnswer: "A",
  };

  newQuestionBox.classList.add("question-box");
  newQuestionBox.id = questionIndex;

  const answerContainer = document.createElement("div");
  answerContainer.innerHTML = `
    <span
      >Câu 1: Nguyễn Ái Quốc gởi bản “Yêu sách của nhân
      dân An Nam” tới Hội nghị Vecxay vào ngày tháng năm
      nào?</span
    >
    <div class="topic">
      <label class="answer">
        <input type="radio" name="answer" value="A" /> A.
        Donald Trump
      </label>
      <label class="answer">
        <input type="radio" name="answer" value="B" /> B.
        Joe Biden
      </label>
      <label class="answer">
        <input type="radio" name="answer" value="C" /> C.
        Barack Obama
      </label>
      <label class="answer">
        <input type="radio" name="answer" value="D" /> D.
        George Washington
      </label>
    </div>
  `;
  newQuestionBox.appendChild(answerContainer);

  document.getElementById("list-question-box").appendChild(newQuestionBox);

  newQuestion["topic"] =
    "Nguyễn Ái Quốc gởi bản “Yêu sách của nhân dân An Nam” tới Hội nghị Vecxay vào ngày tháng năm nào";
  newQuestion["listAnswer"]["A"] = "Donald Trump";
  newQuestion["listAnswer"]["B"] = "Joe Biden";
  newQuestion["listAnswer"]["C"] = "Barack Obama";
  newQuestion["listAnswer"]["D"] = "George Washington";

  listAnswer[questionIndex] = newQuestion;

  questionIndex += 1;
};

const saveNewExam = () => {
  const dateNow = Date.now();
  fetch("exam.json")
    .then((response) => response.json())
    .then((products) => {
      // Hiển thị thông tin sản phẩm
      products.forEach((product) => {
        console.log(product.name);
        console.log(product.price);
        // ...
      });
      // ...
    })
    .catch((error) => {
      console.error("Lỗi khi đọc file JSON:", error);
    });
};

// document.getElementById("")
