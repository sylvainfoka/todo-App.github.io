interface Todoprops{
    id:number;
    title: string;
    isDone: Boolean;    
}

function Todo(props : Todoprops){
    const status = props.isDone ? "Done" : "Not Done";
    return(
        <div>
            <span>#{props.id}</span>
            <span>{props.title}</span>
            <span>{status}</span>
            
        </div>
    ); 
}

export default Todo