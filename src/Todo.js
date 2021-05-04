import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core'
import './Todo.css'
import DeleteIcon from '@material-ui/icons/Delete';
import React, {useState} from 'react'
import db from './firebase'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes=useStyles();
    const [open, setOpen]= useState(false);
    const [input, setInput] = useState('');


    const updateTodo = () => {
        //update the todo with the new input text

        db.collection('Todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true})
        setOpen(false);
    }

    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>Open</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                    <Button onClick={updateTodo}>Update todo</Button>
                </div>
        </Modal>
        <List className="todo_list">
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="dummy" />
            </ListItem>
            <button onClick={e=> setOpen(true)}>Edit</button>
            <DeleteIcon onClick={event => db.collection('Todos').doc(props.todo.id).delete()} />
        </List>
        </>
    )
}

export default Todo
