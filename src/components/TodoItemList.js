import React , {Component } from 'react';
import './TodoItemList.css'; 
import TodoItem from './TodoItem'

class TodoItemList extends Component {
     // 컴포넌트가 리렌더링을 할 지 말지 정해줍니다. 
     //이 게 따로 구현되지 않으면 언제나 true 를 반환하는데요, 
     // 이를 구현하는 경우에는 업데이트에 영향을 끼치는 조건을 return 해주시면 됩니다.

     // todos 값이 바뀔 때 리렌더링 하면 되니까 
     // this.props.todos 와 nextProps.todos 를 비교해서 
     // 이 값이 다를때만 리렌더링하게 설정하면 끝나요!

     shouldComponentUpdate(nextProps, nextState){
          return this.props.todos !== nextProps.todos;
     }

     render(){
          // todos: todo 객체들이 들어있는 배열
          // onToggle: 체크박스를 키고 끄는 함수
          // onRemove: 아이템을 삭제시키는 함수
          const { todos, onToggle, onRemove } = this.props;
          const todoList = todos.map(
               (todo) => (
                    <TodoItem 
                         {...todo}
                         onToggle={onToggle}
                         onRemove = {onRemove}
                         key={todo.id}
                    />
               )
          )

          //넘어온 오브젝트 형태의 todos를 map함수로 돌려서 새로운 배열(TodoItem)을 생성한다.
          // const todoList = todos.map(
          //      ({id, text, checked}) => (
          //           <TodoItem 
          //                id = {id}
          //                text={text}
          //                checked = {checked}
          //                onToggle = {onToggle}
          //                onRemove = {onRemove}
          //           />
          //      )
          // )
          
          //위와 같은 형태
          // {...todo}는 내부값들을 풀어서 넣어주고 자동으로 
          // TodoItem Component 의 props로 설정된다 
          

          return (
               <div>
                    {todoList}
               </div>
          )
     }
}

export default TodoItemList;