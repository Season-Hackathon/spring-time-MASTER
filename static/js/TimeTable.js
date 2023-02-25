const user1Task = document.getElementById('user1');
const user2Task = document.getElementById('user2');
const user3Task = document.getElementById('user3');
const user4Task = document.getElementById('user4');
const user5Task = document.getElementById('user5');
const user6Task = document.getElementById('user6');
const deselectBtn = document.getElementById('deselect');
const taskContainer = document.querySelector('.task_container');
const scheduleContainer = document.querySelector('.schedule_container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up_container');
const noBtn = document.getElementById('btn_no');
const yesBtn = document.getElementById('btn_yes');

let selectedColor, active;

//Event Listeners
taskContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);
resetBtn.addEventListener('click',openPopup);
resetBtn.addEventListener('click',resetTasks);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteTasks);

// Tasks click  (3)
function selectTask (e){
    resetTasks()

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'user1':
            activeTask(user1Task, taskColor);
            break
        case 'user2':
            activeTask(user2Task, taskColor);
            break
        case 'user3':
            activeTask(user3Task, taskColor);
            break
        case 'user4':
            activeTask(user4Task, taskColor);
            break
        case 'user5':
            activeTask(user5Task, taskColor);
            break
        case 'user6':
            activeTask(user6Task, taskColor);
            break
    }

};

// Set colors for schedule (4)
function setColors (e){
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        e.target.parentElement.innerHTML = icon;
    }
};

// Active task (1)
function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

// Reset tasks (2)
function resetTasks(){
    const allTasks = document.querySelectorAll('.task_name');

    allTasks.forEach((item)=>{
        item.className = 'task_name';
    })
}

// Delete tasks
function deleteTasks(){
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

// Open Pop-up
function openPopup(){
    popUp.style.display = 'flex';
}

// Close Pop-up
function closePopup(){
    popUp.style.display = 'none';
}