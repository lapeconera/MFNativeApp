import { types } from 'mobx-state-tree';

let deleteArray = []

const ToDo = types.model('ToDo', {
    id: types.identifier,
    title: types.string,
    done: types.boolean
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
        console.log("3",self.ToDos )
    },
    selected(valid) {
        if (valid === true) {
            console.log(deleteArray);
        }
       
    },
    bulkDelete(deleteArray) {
        self.ToDos = deleteArray.map(id => {
            self.ToDos.filter(todo => {
                return todo.id !== id;
            })
        })
    },
    doneToDo(ToDo){
        console.log("doneToDO", ToDo)
        self.ToDos.map(todo => {
            if ( todo.id === ToDo.id) {
               return todo.done = true
            }else {
                return ToDo.id
            }
        });
        console.log("doneToDO", ToDo)
    }
}))
.create({
    ToDos: [
        {
            id: '23cn34024',
            title: 'Hey',
            done: false
        },
        {
            id: '35on03494',
            title: 'Hello',
            done: false
        },
        {
            id: '1344rf34wrf24',
            title: 'Whats Up!',
            done: false
        },
    ]
});

export default ToDoStore;