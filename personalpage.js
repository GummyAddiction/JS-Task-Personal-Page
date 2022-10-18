const skillData = ["JavaScript", "Angular", "Java", "Spring Boot"];

let skill = document.querySelector("#skill");




const skillClicked = function (){
    //alert("Button clicked!");
    for(let i = 0; i < skillData.length; i++){
        skill.appendChild(createSkillList(skillData[i]));
        //alert(createSkillList[i]);
    }
}



function createSkillList(param){
    let li = document.createElement("li");
    li.textContent = param;
    return li;
}


const commentClicked = function(){
    //alert(document.querySelector("#commentTextBox").value);
    let commentSection = document.querySelector("#commentSection");
    let commentvalue = document.querySelector("#commentTextBox").value;

    let li = document.createElement("li");
    li.textContent = commentvalue;
    commentSection.appendChild(li);
    document.querySelector("#commentTextBox").value = "";


    //commentSection.createElement(document.querySelector("#commentTextBox").value);


}

