import React from 'react'
import Task from './Task'

import {
    AppBar,
    Typography,
    Paper,

} from '@material-ui/core'

export default function TaskList({status, tasks, onStatusChange}) {
    return (
        <div className='TaskList' style={style}>
            <section className='TaskList-Header'>
                <AppBar color='secondary' position='relative'>
                    <Typography variant='h4' align='center'>
                        {status}
                    </Typography>
                </AppBar>
            </section>

            <section className='TaskList-Body'>
                <Paper elevation={3}>
                    {tasks.map( task => <Task key={task.id} task={task} onStatusChange={onStatusChange}/>)}
                </Paper>
            </section>            
        </div>
    )
}

let style = {
    margin: 10,
    padding: 10,    
}
