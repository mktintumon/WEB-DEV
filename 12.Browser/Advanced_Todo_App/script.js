let addBtn = document.querySelector(".add-btn")
let addFlag = false;

let removeBtn = document.querySelector(".remove-btn")
let removeFlag = false

let modalCont = document.querySelector(".modal-cont")

let mainCont = document.querySelector(".main-cont")

let colors = ["lightpink", "lightblue", "lightgreen", "black"]
let modalPriorityColor = colors[colors.length - 1]; // set to black

let allPriorityColors = document.querySelectorAll(".priority-color");

let taskAreaCont = document.querySelector('.textarea-cont')


//Display the Modal
addBtn.addEventListener("click", function (e) {

  // addFlag , true - Modal Display
  //addFlag , false - Modal Hide

  addFlag = !addFlag;

  if (addFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});


//Changing Priority Colors
allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function (e) {
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });
    colorElem.classList.add("active");

    modalPriorityColor = colorElem.classList[0];
  });
});


// Generating a Ticket
modalCont.addEventListener("keydown", function (e) {
  let key = e.key;

  if (key == "Shift") {
    createTicket(modalPriorityColor , taskAreaCont.value); 
    modalCont.style.display = "none";
    addFlag = false;
    taskAreaCont.value = ''
  }
});

function createTicket(ticketColorClass , task) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color ${ticketColorClass} "></div>
  <div class="ticket-id"></div>
  <div class="task-area">${task}</div>`;

  mainCont.appendChild(ticketCont);

  handleRemove(ticketCont)
}


removeBtn.addEventListener('click' , function(e){
      removeFlag = !removeFlag

      if(removeFlag == true){
         removeBtn.style.color = 'red'
      }
      else{
         removeBtn.style.color = 'white'
      }
})

function handleRemove(ticket){
      ticket.addEventListener('click' , function(e){
            if(removeFlag == true){
                  ticket.remove()
            }
      })
}