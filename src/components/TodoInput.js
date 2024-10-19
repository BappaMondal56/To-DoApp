import React ,{useState} from 'react';


function TodoInput(props) {
    // state
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText);
            setInputText("")
        }
    }
  return (
    <div className='input-container'>
      <input type='text' className='input-box-todo' onChange={e=>{
        setInputText(e.target.value)
      }} onKeyDown={handleEnterPress} 
      placeholder='Enter your to-do' value={inputText}></input>
      <button className='add-btn' onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>+</button>
      {/*<div>{inputText}</div>*/}

    </div>
  );
}

export default TodoInput;
