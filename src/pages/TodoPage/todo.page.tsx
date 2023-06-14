import { useState } from "react";
import Todo from "../../components/Todo";
import {Helmet} from "react-helmet";

interface Todo{
  title: string,
  isDone: boolean
}

function TodoPage() {
const [todoTitle, setTodoTitle ] = useState(""); //Todotitle - valeur dorigine à gauche, setpagetitle utiliser pour modifier le state
    
const [todos, setTodos] = useState<Todo[]>([]); 

    function handleAddTodo(){
      const newTodo = {
        title:todoTitle,
        isDone:false
      };
      
      setTodos([...todos, newTodo]);
      setTodoTitle("");
      
    } 

  return (
    <div>
        <Helmet>
            <title>Todo App</title>
            <meta></meta>

        </Helmet>





      <h1>Todo App</h1>
      <div>
        <input
        name="title"
        type="text"
        placeholder="title" 
        value={todoTitle}
        onChange={(e)=> setTodoTitle(e.target.value)}
        />
        <button onClick={handleAddTodo} disabled={!todoTitle}>Add</button>
 </div>

  

{todos.map((todo, index)=>{
  return(
    <Todo
       
        key={index}
        id = {index+1}
        title={todo.title}
        isDone={todo.isDone}
    />

  )

})}
</div>
  )
}
 export default TodoPage

