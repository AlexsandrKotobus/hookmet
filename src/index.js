import React, {useState, useRef, useEffect} from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';

function UserForm(){
  // определяет начальное состояние в виде переменной name
  const [name, setName] = useState("Esianka");
  // вместе с состоянием компонента определяем ссылку nameRef
  // эффект срабатывает при любых изменениях значения name
  const nameRef = useRef(name);
 // Ее начальное значение - это значение переменной name. И при каждом
  //  изменении переменной name соответственно меняем и значение в ссылке nameRef. 
  // Для этого определяем эффект с помощью хука useEffect:

  useEffect(()=>{
    nameRef.current = name;
   }, [name]);

  
  const changeName = (event) => {console.log('changeName', event.target.value); setName(event.target.value)};
  // Для имитации удаления компонента и завершения его жизненного цикла 
  // в нем предусмотрена кнопка, по нажатию на которую мы ожидаем, 
  // что произойдет сохранение значения переменной name в localStorage.
  //  Однако поведение программы будет несколько иное
  const unmount =()=> {console.log('unmount'); root.unmount(); 
    }
  return(
    <div>
      <h3>Имя : {name} </h3>
      <div>
        <p>Имя: <input type='text' value={name} onChange={changeName}/> </p>
        <button onClick={unmount}>Unmount</button>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <UserForm/>

);

