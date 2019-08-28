import { types } from 'mobx-state-tree';

let deleteArray = [];

const ToDo = types.model('ToDo', {
    id: types.identifier,
    title: types.string,
    done: types.boolean,
})

const ToDoStore = types.model('ToDos', {
    ToDos: types.array(ToDo),
})
.actions(self => ({
    addToDo(ToDo) {
        self.ToDos.push(ToDo)
    },
    deleteToDo(ToDo) {
        self.ToDos = self.ToDos.filter(todo => {
            return todo.id !== ToDo.id 
        })   
    },
    editToDo(ToDo, updateTodo) {
        self.ToDos.map(todo => {
            if (todo.id === ToDo.id){
                return todo.title = updateTodo
            }else{
                return todo.title
            } 
        });
    },
    onSelect(isChecked, ToDo) {
        if (isChecked !== true) {
            deleteArray.push(ToDo.id);
            console.log(deleteArray);
        } else {
            deleteArray = deleteArray.filter(t => {
                return (t !== ToDo.id && isChecked === true);
            });
            console.log(deleteArray);
        }
    },
    bulkDeleteToDo() {
        if (deleteArray.length > 0) {
            deleteArray.map(id => {
                self.ToDos = self.ToDos.filter(todo => {
                    return todo.id !== id;
                }) 
            });
        }
        deleteArray = [];
    },
    doneToDo(ToDo){
        console.log("doneToDo", ToDo)
        self.ToDos.map(todo => {
            if ( todo.id === ToDo.id) {
               return todo.done = true
            }else {
                return ToDo.id
            }
        });
        console.log("doneToDo", ToDo)
    }
}))
.create({
    ToDos: [
        {
            id: '23cn34024dbgb',
            title: 'Mediatate for an hour',
            done: false,
        },
        {
            id: '35on03494dfdr',
            title: 'Go to the gym for half an hour',
            done: false,
        },
        {
            id: '1344rf34wrf24',
            title: 'Learn Spanish',
            done: false,
        },
        {
            id: '1344btdbtette',
            title: 'Read a new book',
            done: false,
        },
    ]
});

export default ToDoStore;