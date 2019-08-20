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