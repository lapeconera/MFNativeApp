import { types } from 'mobx-state-tree';

const ToDo = types.model('ToDo', {
    title: types.string,
})

const ToDoStore = types.model('ToDos', {
    ToDos: types.array(ToDo)
})
.actions(self => ({
    addToDo(ToDo) {
        self.ToDos.push(ToDo)
    }
}))
.create({
    ToDos: [{ title: "Hello there" }]
});

export default ToDoStore;