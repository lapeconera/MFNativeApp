import { types } from 'mobx-state-tree';

const ToDo = types.model('ToDo', {
    id: types.identifier,
    title: types.string,
    done: types.boolean
})

const ToDoStore = types.model('ToDos', {
    ToDos: types.array(ToDo)
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
    doneToDo(ToDo){
     
        self.ToDos.map(todo => {
            if ( todo.id === ToDo.id) {
               return todo.done = true
               
            }else {
                return ToDo.id
            }
        });
        console.log("doneToDO",ToDo)
    }
       

}))

.create({
    ToDos: [
        {
            id: '123456',
            title: 'Hey',
            done: false
        }
    ],

});

export default ToDoStore;