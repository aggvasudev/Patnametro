import React, {useState} from 'react'


export default function Form() {
  const clickforupper = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const clickforlower = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const clicktoalert = ()=>{
    let newtext = alert(text);
    setText(newtext)
  }
  const clickonhandle =(event)=>{
    setText(event.target.value)
  }
  const[text, setText] = useState('enter the text here')
  return (
    <div className='container'>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={clickonhandle} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className='btn-default btn bg-primary' onClick={clickforupper} type='submit'>Click for uppercase</button>
<button className='btn-default btn bg-primary' onClick={clickforlower} type='submit'>Click for uppercase</button>
<button className='btn-default btn bg-primary' onClick={clicktoalert} type='submit'>Click for uppercase</button>
    </div>
  )
}
