import { Container, List, Paper } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Todo from "./components/Todo";
import AddTodo from './components/AddTodo';

function App() {

  const [items, setItems] = useState([]);


  const addItem = (item) => {
    item.id = "ID=" + items.length; // key를 위한 id
    item.done = false; //done 초기화
    // 업데이트는 setItems로 하고 새 배열을 만들어야 한다.
    setItems([...items, item]);
    console.log("items : ", items);
  } 

  const deleteItem = (item) => {
    //삭제할 아이템을 찾는다.
    const newItems = items.filter(e => e.id !== item.id);
    //삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
    setItems([...newItems]);
  }

  const editItem = () => {
    setItems([...items]);
  }
  
    let todoItems = 
      items.length > 0 && (
        <Paper style={{margin:16}}>
          <List>
            {items.map((item) => (
              <Todo item={item} key={item.id} editItem = {editItem} deleteItem={deleteItem} />
            ))}
          </List>
        </Paper>
      );

      

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
