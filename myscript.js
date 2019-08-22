var list_of_tasks = [];
list_of_tasks = document.getElementsByClassName("item");

for(var i=0;i<list_of_tasks.length;i++)
{
    var edit = document.createElement("button");
    edit.appendChild(document.createTextNode("edit"));
    list_of_tasks[i].appendChild(edit);

    var remove = document.createElement("button");
    remove.appendChild(document.createTextNode("remove"));
    list_of_tasks[i].appendChild(remove);
}

function GetContent(content) {
    var i = 0;
    var x = document.getElementsByClassName("content_type");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(content).style.display = "block";
}

function SubmitData(){
    var user = document.getElementById("username");
    var password = document.getElementById("password");

    if(user.value == "animesh" && password.value == "animesh"){
        window.alert("Login Successful");
    }
}
function AddTask(){
    var ol = document.getElementById("todo_list");
    var task = document.getElementById("task");

    if(task.value == null || task.value == ""){
        return;
    }

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task.value));
    var edit = document.createElement("input");
    edit.type = "button"
    edit.value = "edit";
    edit.addEventListener("click",function(){EditItem(event);});
    edit.className = "edit";
    li.appendChild(edit);
    var remove = document.createElement("input");
    remove.type = "button";
    remove.value = "remove";
    remove.addEventListener("click",function(){RemoveItem(event);});
    remove.className = "remove";
    li.appendChild(remove);
    li.className = "item";
    ol.appendChild(li);
    task.value="";
}
function SearchTask(){
  var searchTextBox=document.getElementById("SearchTextBox");
   var tasksToSearch=searchTextBox.value;
   searchTextBox.value="";
   var matchedTasks=[" "];
   matchedTasks.shift();
   var flag=0;
   for(var i=0;i<list_of_tasks.length;i++){
       if(((list_of_tasks[i].toLocaleLowerCase()).indexOf(tasksToSearch.toLowerCase()))>-1){
           matchedTasks.push(list_of_tasks[i]);
           flag=1;
       }
   }
   updateTaskTable(matchedTasks);
   if(flag==0){
       alert("task doesn't exist");
   }
}

function RemoveItem(event){
    var ol = document.getElementById("todo_list");
    ol.removeChild(event.currentTarget.parentElement);
}


function EditItem(event){
    var li = event.currentTarget.parentElement;
    var newValue = prompt("Enter task");
    li.innerHTML = newValue + "<input type='button' value='edit' onclick='EditItem(event);'><input type='button' value='remove' onclick='RemoveItem(event);'>";
}
