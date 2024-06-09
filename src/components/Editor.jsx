import "./Editor.css"
import {useRef, useState} from "react";
const Editor = ({onCreate}) =>{

    const [content,setContent] = useState("");
    const contentRef = useRef();
    const onChangeContent = (e) =>{
        setContent(e.target.value);
    }

    const onClick = () =>{
        if(content==="") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }
    const onKeyDown = (e) =>{
        if(e.keyCode===13){
            onClick();
        }
    }
    return (
        <div className={"Editor"}>
            <input value={content}
                   ref={contentRef}
                   onChange={onChangeContent}
                   onKeyDown={onKeyDown}
                   placeholder={"새로운Todo.."}/>
            <button onClick={onClick}>추가</button>
        </div>
    )

}
export default Editor;