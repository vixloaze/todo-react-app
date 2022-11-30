import { Container, List, Paper } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Todo from "./components/Todo";
import AddTodo from './components/AddTodo';

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

      const addItem = (item) => {
        item.id = "ID=" + items.length; // key를 위한 id
        item.done = false; //done 초기화
        // 업데이트는 setItems로 하고 새 배열을 만들어야 한다.
        setItems([...items, item]);
        console.log("items : ", items);
      } 

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
  );
}
export default App;
