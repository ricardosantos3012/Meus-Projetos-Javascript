class TodoList {
    constructor() {
        this.task = document.querySelector('#tarefas');
        this.ul = document.querySelector('.task-list');
        
    }

    generateTask(p, list, confirm, cancel, div) {
        if(this.task.value === '') {
            alert('Insira um título para a tarefa');
            this.task.focus();
        } else {
            confirm.src = './icons/verificar.png';
            cancel.src = './icons/cancelar.png';
            confirm.classList.add('finalizar');
            cancel.classList.add('delete');
            div.classList.add('title');
            this.ul.appendChild(list);
            list.appendChild(confirm);
            list.appendChild(div);
            div.appendChild(p);
            list.appendChild(cancel);

            p.innerText = this.task.value;
            this.task.value = '';
        }
    }

    recordTask() {
        document.addEventListener('click', (event) => {
            const element = event.target;
            const parentEl = element.closest('li');

            const div = document.createElement('div');
            const list = document.createElement('li');
            const p = document.createElement('p');
            const confirm = document.createElement('img');
            const cancel = document.createElement('img');
            
            if(element.classList.contains('record')) {
               this.generateTask(p, list, confirm, cancel, div);
            }

            if(element.classList.contains('finalizar')) {
                parentEl.style = 'background-color: #0ddd8d41;';
            }
            if(element.classList.contains('delete')) {
                parentEl.remove();
            }
        })
    }
}

const newTask = new TodoList();

newTask.recordTask();