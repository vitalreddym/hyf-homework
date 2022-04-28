import Todos from './Todos';
import ToDo from './ToDo';
 
 export default function ToDoList() {
     return (
         <div className="toDoList">
             <ul>
                 {Todos.map((todo) => {
                     return (
                         <ToDo
                         key={todo.id}
                         description={todo.description}
                         deadline={todo.deadline}
                         />
                     );
                 })}
             </ul>
         </div>
     );
 }
 