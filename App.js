import React,{useEffect,useState} from 'react'
import {getData} from './api'
import './app.css'
const  App = () => {

  const [value, setValue] = useState([])

  const init = () => {
    getData().then(data => {
        if(data.error){
            console.log(data.error)
        }else{
            setValue(data)
        }
    })
}

useEffect(() => {
    init();
},[])

  return (
    <div>
      <div class="header">
        <div class="box">
          <p class="head1">developer</p>
          <h4 class="head">Venkatesh Mogali</h4>
        </div>
        <h1>Todo Management with React Hooks and API</h1>
        <p class="para">https://jsonplaceholder.typicode.com/todos</p>
      </div>
        <div className="container">
          {
            value.map((val,i) => {
              if(val.completed){
              return (
                <div className="true todo" id={i}>
                  <div className="right">
                    <label className="com">Complete</label>
                      <label className="del">X</label>
                    </div>
                  <p>{val.title}</p>
                </div>
              )
              }else{
                return (
                  <div className="false todo" id={i}>
                    <div className="right">
                      <label className="com">Complete</label>
                      <label className="del">X</label>
                    </div>
                    <p>{val.title}</p>
                  </div>
                )
              }
            })
          }
      </div>
      <input type="text" placeholder="Add your todo here..." />
    </div>
  )
}

export default App
