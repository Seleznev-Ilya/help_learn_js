// test
let sub = document.querySelector(".sub");

text1.value = "Петя"; // как добавить свойсво инпутов (содержимого)
textarea1.value = "Тут много описания";

sub.addEventListener("click", function () {
  const a = text1.value; //TODO: как брать свойсво инпутов (содержимого) объектоно подобно
  //TODO: -> https://learn.javascript.ru/object (а именно )-> https://plnkr.co/edit/?p=preview&preview
  const b = textarea1.value;

  //TODO:  Структура по созданию HTML -  на примере встплывающего pop-up
  //TODO:  https://learn.javascript.ru/document (нужно знать)
  //TODO:  https://learn.javascript.ru/ui (непосредственно тема)

  /* <div> */ let div = document.createElement("div"); // TODO:
  div.classList.add("pop_up");

  /* <div> */ let divWithText = document.createElement("div");
  divWithText.classList.add("pop_up_text");

  /* <p1> */ let p1 = document.createElement("p");
  p1.classList.add("pop_up_text-p");
  p1.innerText = `Ваше имя: ${a}`;

  /* </p1> */ divWithText.append(p1);

  /* <p2> */ let p2 = document.createElement("p");
  p2.classList.add("pop_up_text-p");
  p2.innerText = `Ваш текст: ${b} `;

  /* </p2> */ divWithText.append(p2);

  /* </div> */ div.append(divWithText);

  /* </div> */ document.body.append(div);
});

const arr = [
  //TODO: Это было читсо для примера работы с массивом объектов
  {
    name: "Vasy",
    text: "How I read on book about my life",
  },
  {
    name: "Pety",
    text: "I read on book read on book ab about my lifeorem19",
  },
];

function onClick() {
  // HTML запускать хорошо, но лучше это добавить в слушатель событий ( className + addEventListener )
  container.innerHTML = ""; //TODO:  для очестки обертки от содержимых внутри элементов

  fetch("https://jordan.ashton.fashion/api/goods/30/comments") //TODO: для тех кто в танке https://learn.javascript.ru/async + https://learn.javascript.ru/network
    .then((res) => res.json())
    .then((res) => {
      //    console.log( res.next_page_url);
      //    const mainURL = 'https://jordan.ashton.fashion/api/goods/30/comments?page='+`${4}`
      res.data.forEach((item) => {
        // container.innerHTML += `<li>Мое имя: ${item.name}</li> <br>`;  TODO: один из вариантов добавления элементов в какуй-то обертку

        let li = document.createElement("li");
        li.append(item.id);
        li.classList.add("ХУЙ");
        container.append(li);
      });
    });
}
