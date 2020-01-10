import { uniqueId } from '../actions'


let mockTasks = [
    { id: uniqueId(), title: 'Title 1', description: 'Description 1', status: 'Completed'},
    { id: uniqueId(), title: 'Title 2', description: 'Description 2', status: 'In Progress'},
    { id: uniqueId(), title: 'Title 3', description: 'Description 3', status: 'In Progress'},
    { id: uniqueId(), title: 'Title 4', description: 'Description 4', status: 'In Progress'},
    { id: uniqueId(), title: 'Title 5', description: 'Description 5', status: 'In Progress'},
    { id: uniqueId(), title: 'Title 6', description: 'Description 6', status: 'Completed'},
    { id: uniqueId(), title: 'Title 7', description: 'Description 7', status: 'Completed'},
  ]
  

export function tasks( state ={ tasks: mockTasks }, action ) {   

    if ( action.type === 'CREATE_TASK' ) {
        let newTask = [...state.tasks]
       
        newTask.push({
            id: uniqueId(),
            title: action.payload.title,
            description: action.payload.description,
            status: 'Unstarted'
        })

        return {
            tasks: newTask,
        }
    }

    if (action.type === 'EDIT_TASK' ) {
        state.tasks.map( task => {
            
            if(task.id === action.payload.id ) {
                let newTask = {
                    id: task.id,
                    title: task.title,
                    description: task.description,
                    status: action.payload.status,

                }                
                return newTask
            } else {
                return task
            }            
        })
    }
    return state
}