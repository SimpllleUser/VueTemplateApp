import {ADD_TODO, DELETE_TODO} from "./types"
export default {
    [ADD_TODO](state, todo) {
        state.todos = [...state.todos, todo]
    },
    [DELETE_TODO](state, todoId) {
        state.todos = state.todos.filter((todo) => (todo.id !== todoId))
    },
}
