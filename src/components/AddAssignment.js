import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import {DataGrid} from '@mui/x-data-grid';
import {SERVER_URL} from '../constants.js';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


// NOTE:  for OAuth security, http request must have
//   credentials: 'include' 
//

class AddAssignment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {open: false, name:'', due_date:'',course_id:''};
    };
    handleClickOpen = () => {
        this.setState( { open:true});
    };

    handleClose = () => {
        this.setState( {open:false});
    };

    handleSubmit = () => {
        //const{name,due_date,course_id} = this.state;
        //this.props.submit(name.trim(),due_date.trim(),course_id.trim()) 
        const assignment = {name: this.state.name,
                            due_date: this.state.due_date,
                            course_id: this.state.course_id}
        this.props.add(assignment);
        this.handleClose();
    
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
 
   render() {
    return(
        <div>
            <Button variant = "outlined" color = 'primary' onClick = {this.handleClickOpen}>Add New Assignment</Button>

            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>New Assignment</DialogTitle>
                <DialogContent  style={{paddingTop: 20}} >

        <Grid container>
            <Grid item>
            <TextField style = {{width:200}} label = 'name' name = 'name' onChange = {this.handleChange} value = {this.state.name} />

            </Grid>
            <Grid item>
            <TextField style = {{width:200}} label = 'due date' name = 'due_date' onChange = {this.handleChange} value = {this.state.due_date} />
            </Grid>
            <Grid item>
            <TextField style = {{width:200}} label = 'course id' name = 'course_id' onChange = {this.handleChange} value = {this.state.course_id} /> 
            </Grid>

            </Grid> 

            </DialogContent>
                <DialogActions>

            <Button id ="Add" onClick = {this.handleSubmit}>Create Assignment</Button>
            <Button onClick = {this.handleClose}>Go back to main screen</Button> 
             
            </DialogActions>
              </Dialog> 

        </div>
        
    );
   }
}
AddAssignment.propTypes = {
    add : PropTypes.func.isRequired
}

export default AddAssignment;