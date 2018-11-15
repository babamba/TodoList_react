import React, { Component } from 'react';
import './App.css';
import TodoListTemplate from "./components/MainTemplate"
import Form from "./components/Form"
import TodoItemList from "./components/TodoItemList"
import Palette from "./components/Palette"

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {

  id = 3;

  state = {
    input : '',
    todos : [
        { id:0, text:'김지넌' , checked:false },
        { id:1, text:'김바보' , checked:true  },
        { id:2, text:'김지원' , checked:false }
    ],
    color : ''
  }

  handleChange = (e) => {
    this.setState({
        input : e.target.value
    })
  }
  
  handleOnRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos : todos.filter(todo => todo.id !== id)
    })
  }

  handleCreate = () => {
    const { input , todos, color } = this.state;

    this.setState({
      input:'',
      todos: todos.concat({
        id : this.id++,
        text: input,
        checked: false,
        color
      })
    })
  }
  
  handleSelectColor= (color) => {
    this.setState({
        color
    })
  }

  handerKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  

  // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
  // handleToggle = (id) => {
  //   const { todos } = this.state
  //   const index = todos.findIndex(todo => todo.id === id);
  //   const selected = todos[index]; // 선택한 객체

  //   const nextTodos = [...todos]; // 배열을 복사

  //   // 기존의 값들을 복사하고, checked 값을 덮어쓰기
  //   nextTodos[index] = {
  //     ...selected,
  //     checked : !selected.checked
  //   }

  //   this.setState({
  //     todos:nextTodos
  //   })
  // }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  render() {
    const { input , todos, color } = this.state;
    const { handleChange, 
            handleCreate, 
            handerKeyPress, 
            handleToggle, 
            handleOnRemove, 
            handleSelectColor
          } = this;
    return (
        // <TodoListTemplate form={<div>이렇게 </div>}>
        // Form 을 TodoListTemplate props로 넘겨 렌더링 
        <TodoListTemplate form={<Form
                                    value = {input}
                                    onChange = {handleChange}
                                    onKeyPress = {handerKeyPress}
                                    onCreate = {handleCreate}
                                    color = { color }
                                />}> 
          {/* 템플릿  chlidren이 이안에 표시됨*/}
          <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>

          <TodoItemList todos={todos} onToggle = {handleToggle} onRemove={handleOnRemove}/>
        </TodoListTemplate>
    );
  }
}

export default App;
