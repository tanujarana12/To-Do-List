let listOfItems = document.getElementsByClassName('listOfItems1');
console.log(listOfItems);
// listOfItems[0].innerText="Hello";
// listOfItems[1].querySelector("label").innerText = "Hello";
let inputSearchBox = document.getElementById('inputField');


// let inputCheckbox = document.createElement("input");
// inputCheckbox.type="checkbox";
// inputCheckbox.id="text1";
// inputCheckbox.classList.add("checkbox");

// let labelForInput=document.createElement("label");
// labelForInput.setAttribute("for", "text1");
// labelForInput.innerText="Work";

// let spanForList= document.createElement("span");
// spanForList.appendChild(inputCheckbox);
// spanForList.appendChild(labelForInput);
// let listofItemDiv = document.createElement("div");
// listofItemDiv.appendChild(spanForList)

// const listOfTasksDiv = document.getElementById('listOfTasks');
// listOfTasksDiv.appendChild(listofItemDiv)


console.log(inputSearchBox, "searchbox")
// listOfItems[2].querySelector("p").innerText= inputSearchBox[0].innerText


let newListAddButton = document.getElementById('addButton');
console.log(newListAddButton)

function newItem(inputSearchBox) {
    if (inputSearchBox.trim() === "") {     ////inputSearchBox doesn't retuens the value ..it returns the empty string if nothing is entered
        alert("Please enter a task to add");
    }
    // else if (listOfItems.length > 1) {
    //     listOfItems[2].querySelector("label").innerText = inputSearchBox;
    // } 
    // else {
    //     console.error("listOfItems[2] does not exist!");
    // }

    // listOfItems[2].querySelector("p").innerText= inputSearchBox.value;
    else {
        const listOfTasksDiv = document.getElementById('listOfTasks');
        let checkBoxId = "text" + listOfTasksDiv.children.length;
        let listOfItemsId ="Div" + listOfTasksDiv.children.length;

        let inputCheckbox = document.createElement("input");
        inputCheckbox.type = "checkbox";
        inputCheckbox.id = checkBoxId;
        inputCheckbox.classList.add("checkbox");
        console.dir(inputCheckbox);

        inputCheckbox.addEventListener("change", function(){
            console.dir(inputCheckbox);
        });

        let labelForInput = document.createElement("label");
        labelForInput.setAttribute("for", checkBoxId);
        labelForInput.classList.add("textDecor");
        labelForInput.innerText = inputSearchBox;

        let spanForList = document.createElement("span");
        spanForList.appendChild(inputCheckbox);
        spanForList.appendChild(labelForInput);
        let listofItemDiv = document.createElement("div");
        listofItemDiv.classList.add("listOfItems1");
        console.log(listofItemDiv,"DivClass");
        listofItemDiv.id=listOfItemsId;
        listofItemDiv.appendChild(spanForList)

        let buttonElement= document.createElement("button");
        buttonElement.classList.add("button");
        let imageElement=document.createElement("img");
        imageElement.setAttribute("src","close.png");
        let spanForCloseButton = document.createElement("span");
        buttonElement.appendChild(imageElement);
        spanForCloseButton.appendChild(buttonElement);
        
        listofItemDiv.appendChild(spanForCloseButton)
        listOfTasksDiv.appendChild(listofItemDiv);

        inputCheckbox.addEventListener("change", function(){
            if(inputCheckbox.checked=== true){
                labelForInput.style.textDecoration="line-through"
            }
            else{
                labelForInput.style.textDecoration="none"
            }
        })
        console.dir(inputCheckbox,"afterInput");

        buttonElement.addEventListener("click", ()=>{
            listofItemDiv.remove();
           

        })
        
       
}
    
}


// addEventListener("change", myTest);

// function myTest(){
//     console.log("kdsfkjdskf");
// }


// function joBoloVoKru(callback){
//     callback();
// }

// joBoloVoKru(myTest);


newListAddButton.addEventListener("click", () => {
    newItem(inputSearchBox.value)
    inputSearchBox.value= ""
})



//ADDING THEMES


var selectTheme = document.getElementById("themes");
// // var selectTheme = document.getElementById("themes");
// console.log(selectTheme,"theme")
var bodyTheme = document.getElementById("header")
// console.log(bodyTheme,"header")

// if (selectTheme.value==="darkMode"){
//     bodyTheme.style.background="linear-gradient(135deg, rgb(23, 21, 65), rgb(21, 29, 96))"
// }
// else if (selectTheme.value==="themeGreenForest"){
//     bodyTheme.style.background="linear-gradient(135deg, rgb(185, 231 ,202), rgb(8, 44, 10))";
// }

// document.addEventListener("DOMContentLoaded", function () {
//     var selectTheme = document.getElementById("themes");
//     var bodyTheme = document.getElementById("header");

// console.log(selectTheme, "theme");
// console.log(bodyTheme, "header");


// function myTest(){
//     if (selectTheme.value === "theme1") {
//         bodyTheme.style.background = "linear-gradient(135deg, rgb(195, 123, 134), rgb(54, 3, 13))";
//     }
//     else if (selectTheme.value === "theme2") {
//         bodyTheme.style.background = "linear-gradient(135deg, rgb(23, 21, 65), rgb(21, 29, 96))";
//     }
// }

selectTheme.addEventListener("change", function () {
    if (selectTheme.value === "theme1") {
        bodyTheme.style.background = "linear-gradient(135deg, rgb(195, 123, 134), rgb(54, 3, 13))";
    }
    else if (selectTheme.value === "theme2") {
        bodyTheme.style.background = "linear-gradient(135deg, rgb(23, 21, 65), rgb(21, 29, 96))";
    }
    else if (selectTheme.value === "theme3") {
        bodyTheme.style.background = "linear-gradient(135deg, rgb(185, 231 ,202), rgb(8, 44, 10))";
    }
    else if (selectTheme.value === "theme4") {
        bodyTheme.style.background = "linear-gradient(135deg, rgb(208, 148, 191), rgb(80, 36, 66))";
    }
    else if (selectTheme.value === "theme5") {
        bodyTheme.style.background = "linear-gradient(135deg, #FFEB3B, #FF5722)";
    }
    else if (selectTheme.value === "theme6") {
        bodyTheme.style.background = "linear-gradient(135deg, rgb(57 ,119, 73), rgb(96, 53, 61))";
    }
    else if (selectTheme.value === "theme7") {
        bodyTheme.style.background = "linear-gradient(135deg, rgb(9, 2, 121), rgb(64, 113, 21))";
    }

});
// });

//Adding text-decoration= line through
var taskComplete = document.getElementsByClassName('checkbox')
console.log(taskComplete)



// Adding Input list


