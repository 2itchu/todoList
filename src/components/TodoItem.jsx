import "./TodoItem.css"

const TodoItem = ({id,isDone,content,date,onUpdate, onDelete}) =>{
    const onChangeCheckbox = () => {onUpdate(id)}
    const onClickButton = () => {onDelete(id)}
    return (
            <div className={"TodoItem"}>
                <input onChange={onChangeCheckbox} checked={isDone} type={"checkbox"}/>
                <div className={"content"}>{content}</div>
                <div className={"date"}>{new Date(date).toDateString()}</div>
                <button onClick={onClickButton}>삭제</button>
            </div>
        )
}
export default TodoItem;