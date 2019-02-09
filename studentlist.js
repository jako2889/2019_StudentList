"use strict";

window.addEventListener("DOMContentLoaded", init);

//GLOBALE VARIABLER -------------------------------

let allStudents;
let postTarget = document.querySelector(".target");
let postOutput = document.querySelector(".output");
let house = "alle";

function init() {
  console.log("init");

  getJson();

  // TODO: Load JSON, create clones, build list, add event listeners, show modal, find images, and other stuff ...
}

async function getJson() {
  console.log("getJson");

  let jsonObject = await fetch("http://petlatkea.dk/2019/students1991.json");

  allStudents = await jsonObject.json();

  document.querySelectorAll(".filter_knap").forEach(knap => {
    knap.addEventListener("click", filter);
  });

  console.log(allStudents);

  // NOTE: Maybe also call SortbyFirst the first time... Investigate
  filterList();
}
// Få data fra knap og send det videre til display
function filter() {
  house = this.getAttribute("data-house");

  console.log(house);

  postOutput.textContent = "";

  displayList();
}

function filterList() {
  console.log("filterList");

  displayList();
}
// Her vises eleverne i et loop (for each)
function displayList() {
  console.log("displayList");

  allStudents.forEach(student => {
    console.log("elsker mit liv");

    //filter udskriv ---------------------------------------

    if (house == "alle") {
      printPost(student);
    }

    if (house == student.house) {
      printPost(student);
      console.log("det virker");
    }

    //Udskriver fra template til output

    function printPost(student) {
      let klon = postTarget.cloneNode(true).content;

      klon.querySelector(".name").textContent = student.fullname;
      klon.querySelector(".house").textContent = student.house;

      postOutput.appendChild(klon);
    }
  });
}

function clickSortByFirst() {
  console.log("clickSortByFirst");
}

function sortByFirst() {
  console.log("sortByFirst");
}
