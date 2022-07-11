let taskAdd_Input = document.querySelector('input[name = "taskAdd"]');
let tasks_list = document.querySelector('.tasks_list');

//check
const checkTask = function (event) {

    if (event.target.tagName === "BUTTON") return;

    let numCurrentTask = event.target.id.substring(event.target.id.indexOf('_'));

    let curCheckbox = document.querySelector('#INPUT' + numCurrentTask);
    let curTaskDescription = document.querySelector('#SPAN' + numCurrentTask);

    curTaskDescription.classList.toggle('check_task');
    if (event.target.tagName !== "INPUT") curCheckbox.checked = !curCheckbox.checked;
}

//add
const taskAdd = function (event) {

    let taskText = taskAdd_Input.value;
    let tasks = document.querySelectorAll('.task');
    let numTask = tasks.length;

    if (event.keyCode === 13 && taskText.length > 0) {

        let task = document.createElement('div');
        task.setAttribute('id', task.tagName + '_' + numTask);
        task.classList.add('task');
        tasks_list.appendChild(task);

        task.addEventListener('click', checkTask);

        let checkbox = document.createElement('input');
        checkbox.setAttribute('id', checkbox.tagName + '_' + numTask);
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('task_checkbox');
        task.appendChild(checkbox);

        let taskDescription = document.createElement('span');
        taskDescription.setAttribute('id', taskDescription.tagName + '_' + numTask);
        taskDescription.innerHTML = taskAdd_Input.value;
        task.appendChild(taskDescription);

        let edit_btn = document.createElement('button');
        edit_btn.setAttribute('id', edit_btn.tagName + '_' + numTask);
        edit_btn.classList.add('edit_btn');
        task.appendChild(edit_btn);

        edit_btn.addEventListener('click', editTask);

        taskAdd_Input.value = '';
    }
}

taskAdd_Input.addEventListener('keyup', taskAdd);


//edit
const editTask = function (event) {

    let changeText = prompt();

    let numCurrentTask = event.target.id.substring(event.target.id.indexOf('_'));
    let curTaskDescription = document.querySelector('#SPAN' + numCurrentTask);
    let curTask = document.querySelector('#DIV' + numCurrentTask);

    if (changeText === '') {
        curTask.remove();
    } else if(changeText ) {
        curTaskDescription.innerHTML = changeText;
    }
}


//clear
let clearList_btn = document.querySelector('.clearList_btn');

const clearList = function () {
    let tasks = document.querySelectorAll('.task');
    tasks.forEach(task => tasks_list.removeChild(task));
}

clearList_btn.addEventListener('click', clearList);




