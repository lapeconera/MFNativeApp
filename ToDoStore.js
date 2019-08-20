import { types } from 'mobx-state-tree';

const ToDo = types.model('ToDo', {
    id: types.identifier,
    title: types.string,
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
    editToDo(ToDo,updateTodo,) {
        self.ToDos.map(todo => {
            console.log("1",todo.title )
            console.log("2",ToDo )
            if ( todo.title === updateTodo){
                return "Hello";
            }else{
                return todo.title = updateTodo  
            } 
        });
        console.log("3",self.ToDos )
    }
   

}))

.create({
    ToDos: [
        {
            id: '123456',
            title: 'Hey'
        }
    ]
});

export default ToDoStore;