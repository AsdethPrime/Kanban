import React from 'react'
import {
    AppBar,
    Typography,
    Paper, 
    Select,   
    Divider,
    Card,
    Button,
} from '@material-ui/core'
import { connect } from 'react-redux'
import {editTask} from '../actions'

const TASK_STATUSES = [ 'Unstarted', 'In Progress', 'Completed']

class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            option: this.props.task.status || ''
        }
    }

    selectChange = (event) => {
        this.setState({
            option: event.target.value
        })       
        
    }

    handleClick = (event) => {
        this.props.dispatch( editTask(this.props.task.id, this.state.option))
    }
    render(){
        return (
            <div className='Task' style={style}>
                <div className='Task-Header'>
                    <AppBar position='relative'>
                        <Typography variant='h5' align='center'>
                            {this.props.task.title}
                        </Typography>
                    </AppBar>
                </div>
                <Divider />
                <Card>
                <div className='Task-body'>
                    <Paper elevation={3}>
                        <Typography variant='body1'>
                            {this.props.task.description}                      
                            
                        </Typography>
                        <br />
                    </Paper>
                </div>
                <Divider />
                <div className='Selectbox'>
                    <Select value={this.state.option} onChange={this.selectChange} native={true}>
                        {TASK_STATUSES.map(status => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </Select>
                </div> 
                <Button onClick={this.handleClick} variant='contained' fullWidth color='secondary'>change </Button>           
                
                </Card>
                                      
            </div>
        )

    }
}



let style = {
    display: 'inline-block',
    margin: 20,
    padding: 20,         

}

export default connect()(Task)


