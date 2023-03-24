
$(function () {
 
  let hour9 = localStorage.getItem("hour-9");
  
  localStorage.getItem("hour-9");
  const date = new Date();
  
  //let is a keyword that declares variables,  hour is the variable, date is the object, getHours is the method, using the date.method to get the current hour and assign it to the hour var  
  let hour = date.getHours();
// let is declaring day, month and year are all variables, they all have the date object and a get method, using the date.get to get the current info and put it into the corisponding variables
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // let is declaring currentDate variable,  ${...} syntax is called a template literal and allows you to put the month/day/year 
  // together without the concat method
  let currentDate = `${month}-${day}-${year}`;
// creates a new variable currentDateP , and  document. just says go into the html document, 
// then getElementById, in this case its looking for currentDay and putting that into currentDateP variable
  const currentDateP = document.getElementById("currentDay");
  // innerText is going to have the currentDate placed in between the >< of teh P tag from currentDateP variable
  //  so it can be on the screen
  currentDateP.innerText = currentDate;
// this is creating the timeBlocks variable, document. means go into the html and find all the classNames "time-block" and 
// put them into the timeBlocks variable we just made
  const timeBlocks = document.getElementsByClassName("time-block");
// the for loop is going to go through our time-block elements that are stored in the timeBlocks variable, and determin if the hour is past/present/future and then
// assign the css styling to that based on where it is at that time, its also going to slice to the 5th place so it displays the hour only not hour-, 
  for (let timeBlock of timeBlocks){ 
    let timeBlockHour = timeBlock.id.slice(5);
 
  if (timeBlockHour < hour) {
    timeBlock.classList.add("past");
  } else if (timeBlockHour == hour) {
    timeBlock.classList.add("present");
  } else {
    timeBlock.classList.add("future");
    }
    // we had to traverse teh dom to find the sibling at index one 
 let textArea = timeBlock.children[1]
//  localStorage.getItem()
 let timeBlockId = timeBlock.id
 let localStorageValue = localStorage.getItem(timeBlockId)
 console.log(localStorageValue)
 textArea.value = localStorageValue
  }

// TRAVERSING/WALKING THE DOM to find the element trees or families

let saveBtns = document.querySelectorAll(".saveBtn");

for (let saveBtn of saveBtns){
//  above this line happens everytime , below only happens after button is clicked
  saveBtn.addEventListener("click", function(){

    //  selecting the time-block element that is the parent of the clicked button using parentElement and then selecting the value of the text
    //  area within that time-block element using querySelector(".time-block").value. This value is stored in the timeBlock variable.
    let textArea = this.previousElementSibling;
    let textAreaValue = textArea.value
    
  
    let hourId = this.parentElement.id;
  
   
    localStorage.setItem(hourId, textAreaValue);
  })
}


});
