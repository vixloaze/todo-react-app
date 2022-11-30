import { List, Paper } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Todo from "./components/Todo";

function App() {

  const [items, setItems] = useState(
    [{ // props 변수 넘겨주기
    id: "0",
    title: "Hello World! 1",
    done: true
    },
    { 
    id: "1",
    title: "Hello World! 2",
    done: true
    },])

    let todoItems = 
      items.length > 0 && (
        <Paper style={{margin:16}}>
          <List>
            {items.map((item) => (
              <Todo item={item} key={item.id} />
            ))}
          </List>
        </Paper>
      );

  return (
    <div className="App">
      {todoItems}
    </div>
  );
}

export default App;
