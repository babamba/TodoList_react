import React from 'react';
import './MainTemplate.css'; 

const TodoListTemplate = ({form, children}) => {
     return(
          <main className="todo-list-template">
               <div className="title">
                    TODO-List
               </div>
               <section className="form-wrapper">
                    {form}
                    {/* Form 컴포넌트를 렌더링 할 자리 */}
               </section>
               <section className="todos-wrapper">
                    {children}
               </section>
          </main>
     )
}

export default TodoListTemplate;