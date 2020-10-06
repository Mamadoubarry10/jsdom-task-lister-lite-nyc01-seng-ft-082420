document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const task = document.getElementById('new-task-description');
  const list = document.getElementById('tasks');
  const button = document.querySelector('input[type=submit]')
  
  button.addEventListener('click', function(e){         
    e.preventDefault()
    // console.log(task.value)
    let listItem = document.createElement('li');
    listItem.textContent = task.value
    list.append(listItem);

    task.value = ''
  });


});
