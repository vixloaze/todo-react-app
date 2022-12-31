import { Container, List, Paper, Grid, Button, AppBar, Toolbar, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {call, signout} from "../src/service/ApiService";
import './App.css';
import Todo from "./components/Todo";
import AddTodo from './components/AddTodo';

function App() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    call("/todo","GET", null)
    .then((response) => setItems(response.data));
    setLoading(false);
  },[]);

  const addItem = (item) => {
    call("/todo", "POST", item)
    .then((response) => setItems(response.data));
  } 

  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
    .then((response) => setItems(response.data));
  }

  const editItem = (item) => {
    call("/todo", "PUT", item)
    .then((response) => setItems(response.data));
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

    // navigationBar 추가
    let navigationBar = (
      <AppBar position='static'>
        <Toolbar>
          <Grid justifyContent="space-between" container>
            <Grid item>
              <Typography variant='h6'>오늘의 할 일</Typography>
            </Grid>
            <Grid item>
              <Button color='inherit' raised onClick={signout}>
                로그아웃
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )

    // 로딩중이 아닐 때 렌더링할 부분
    let todoListPage = (
      <div className="App">
        {navigationBar}
        <Container maxWidth="md">
          <AddTodo addItem={addItem}/>
          <div className='TodoList'>{todoItems}</div>
        </Container>
    </div>
    );

    // 로딩 중일 때 렌더링할 부분
    let loadingPage = <h1>로딩 중....</h1>;
    let content = loadingPage;

    if (!loading) {
      // 로딩 중이 아니면 todoListPage를 선택
      content = todoListPage;
    }

  return (
    <div className="App">{content}</div>
  );
}
export default App;
