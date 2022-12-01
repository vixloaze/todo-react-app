import {
    ListItem, 
    Checkbox, 
    ListItemText, 
    InputBase,
    ListItemSecondaryAction,
    IconButton
} from '@mui/material';
import  DeleteOutlined  from '@mui/icons-material/DeleteOutlined';
import React, { useState } from "react";


function Todo(props) {

    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);

    const deleteItem = props.deleteItem;
    const editItem = props.editItem;

    const deleteEventHandler = () => {
        deleteItem(item);
    }

    const turnOffReadOnly = () => {
        setReadOnly(false);
    }

    const turnOnReadOnly = (e) => {
        if(e.key === "Enter") {
            setReadOnly(true);
        }
    }

    const editEventHandler = (e) => {
        item.title = e.target.value;
        editItem();
    }

    const CheckboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem();
    }

    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={CheckboxEventHandler} />
            <ListItemText>
                <InputBase 
                    inputProps={{"aria-label": "naked" , readOnly: readOnly}}
                    onClick = {turnOffReadOnly}
                    onKeyPress = {turnOnReadOnly}
                    onChange = {editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                    />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton 
                aria-label="Delete Todo"
                onClick={deleteEventHandler}>
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo;