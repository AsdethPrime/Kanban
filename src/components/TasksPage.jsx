import React, { Component } from 'react'
import TaskList from './TaskList'

import {
    Paper,
    Button,
    TextField,
    Typography,
    Divider,
 } from '@material-ui/core'

const TASK_STATUSES = [ 'Unstarted', 'In Progress', 'Completed']

export default class TasksPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showNewCardForm: false, 
            title: '',
            description: '',
        }
    }

    onTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    
    onDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    onCreateTask = (e) => {
        e.preventDefault()
        this.props.onCreateTask({
            title: this.state.title,
            description: this.state.description,
        })
        this.resetForm()
    }

    toggleForm = () => {
        this.setState({
            showNewCardForm: !this.state.showNewCardForm
        })
    }

    renderTaskList() {
        const { tasks } = this.props
        return TASK_STATUSES.map( status => {
            const statusTasks = tasks.filter( task => task.status === status )
            return <TaskList key={status} status={status} tasks={statusTasks} onStatusChange={this.props.onStatusChange}/>
        })
    }

    resetForm = () => {
        this.setState({
            showNewCardForm: false,
            title: '',
            description: '',
        })
    }
    render() {
        return (
            <div className='TasksPage'>
                <section className='AddTask'>
                    <Button onClick={this.toggleForm} color='primary' fullWidth variant='contained'>
                        New Task
                    </Button>
                </section> 
                <Divider />
                <section className='NewTaskForm'>
                    {this.state.showNewCardForm && (
                        <form onSubmit={this.onCreateTask}>
                            <label>
                                <Typography variant='body1'>
                                    Title:
                                </Typography>
                                <TextField onChange={this.onTitleChange} value={this.state.title} fullWidth />
                            </label>
                            <Divider />
                            <label>
                                <Typography variant='body1'>
                                    Description: 
                                </Typography>
                                <TextField onChange={this.onDescriptionChange} value={this.state.description} fullWidth />
                            </label>
                            <Divider />
                            <Button type='submit' fullWidth variant='contained' color='inherit'>
                                Save
                            </Button>
                        </form>
                    )}
                </section> 
                <Divider />
                <section className='TaskList'>
                    <Paper>
                        {this.renderTaskList()}
                    </Paper>
                </section>          
            </div>
        )
    }
}
