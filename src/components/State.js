import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createStore} from 'redux'
import {add, delete_line, counterItemDisp, pers, leave} from '../redux/number/numberActions'
import {changeWidht} from '../redux/persent/persentActions'
import {store} from '../redux/store'

import StateRowList from '../components/StateRowsList'



function State(props) {

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


 let [rows, setRows] = useState(1);
 let [arr, setArr] = useState([]);
 let currentRows = 0;



let Hendler = () => {
  

 currentRows = rows;
     // if (rows == 3) {return}  
      currentRows++;
  
  
 setRows(currentRows);

arr.map(newArr=>{
  newArr.map(new2Arr=>{
  return new2Arr.id+= 0
})
}) 

let a = randomInteger(100, 999);
let b = randomInteger(100, 999);
let c = randomInteger(100, 999);
let d = (a+b+c);

 let newItem = [
 {id:1, number: a},
 {id:2, number: b},
 {id:3, number: c},
 {id:4, number: d}

 ]
   arr.unshift(newItem);

for (var i = 0; i < rows; i++) {   // 1 i start

  if(i==0){
    for (var j = 0; j < 4; j++) {
      
    arr[i][j].id = j+1

      }
   }


  for (var j = 0; j < 4; j++) { 
    
    arr[i][j].id = j+i*4+1

    if (j==3) {
        
          arr[i][j].id = j+i*4+1// ячейки суммы
    }
  }

 } 


for (var i = 0; i <=arr.length; i++) {   // 2 SREDNEE
    if (i==arr.length-1) {
        for (var z = 0; z < 4; z++) {
             function arraySum(array) {
          var  vix = 0;
          for (var i = 0; i < arr.length; i++) {
          if (i==arr.length-1) {break}
          if (i==arr.length) {break}
          vix += (array[i][z].number)/(arr.length-1);
    }
           return  vix.toFixed(1);
           } // and func
  arr[i][z].number = arraySum(arr);




} // for z

        break;}       
if(i == arr.length){break;}
         
  }  //  2End SREDNEE 

store.dispatch(add(todos))


}

let HendlerDelete = () => {
 
   currentRows = rows;
     if (rows == 1) {return}  
      currentRows--;
  
 setRows(currentRows);

   arr.shift(0);

for (var i = 0; i <=arr.length; i++) {   // 2 SREDNEE
    if (i==arr.length-1) {
        for (var z = 0; z < 4; z++) {
             function arraySum(array) {
          var  vix = 0;
          for (var i = 0; i < arr.length; i++) {
          if (i==arr.length-1) {break}
          if (i==arr.length) {break}
          vix += (array[i][z].number)/(arr.length-1);
    }
           return  vix.toFixed(1);
           } // and func
  arr[i][z].number = arraySum(arr);

} // for z

        break;}       
if(i == arr.length){break;}
         
  }  //  2End SREDNEE 

arr.map(newArr=>{
  newArr.map(new2Arr=>{
  return new2Arr.id-= 4
})
}) 
 store.dispatch(delete_line(todos))
}

let todos = arr;
  
function toggleSomething(number,id){

  setArr(
 
todos.map( (todo, index) =>{
 
// const ind =2;
 todo.map((todo, ind) => {

  if (todo.number == number && todo.id ==id) {


if (todo.id % 4 == 0) {return}

  todo.number++; 
todos[index][3].number =
  Number(todos[index][0].number)+Number(todos[index][1].number)+Number(todos[index][2].number);
  
           function arraySum(array) {
          var  vix = 0;
         for (var i = 0; i < todos.length-1; i++) {
        vix += (array[i][ind].number)/( todos.length-1);
            }   
           return  vix.toFixed(1);
           } 
todos[todos.length-1][ind].number = arraySum(todos);
 
}  // end if num

        })
 var odos = todo;

 return odos;
    })
  )   //end setTodos

 store.dispatch(counterItemDisp(todos));

}

for (var i = 0; i < todos.length; i++) {
 // console.log(todos[i])
 if (todos.length == rows-1) {
  
todos[rows-2][3].number='';

   }
}


let persent = 100;

function f100(number, id, event) {
 setArr(
todos.map( (todo, index) =>{
 todo.map((todo, ind) => {

  if ((todo.id % 4 == 0) && (todo.number == number) && todo.id ==id ) {

for (var j = 0; j < 3; j++) {
  
if (index==rows-2) {break}
 persent = (((Number(todos[index][j].number))*100)/todo.number).toFixed(2);
 todos[index][j].number = persent+'%';

document.querySelector('#s'+(todo.id-3)).style['width'] = todos[index][0].number;
document.querySelector('#s'+(todo.id-2)).style['width'] = todos[index][1].number;
document.querySelector('#s'+(todo.id-1)).style['width'] = todos[index][2].number; 

document.querySelector('#s'+(todo.id-3)).style['background-color'] = 'green';
document.querySelector('#s'+(todo.id-2)).style['background-color'] = 'green';
document.querySelector('#s'+(todo.id-1)).style['background-color'] = 'green';

document.querySelector('#s'+(todo.id-3)).style['transition-duration'] = '1000ms';
document.querySelector('#s'+(todo.id-2)).style['transition-duration'] = '1000ms';
document.querySelector('#s'+(todo.id-1)).style['transition-duration'] = '1000ms'; 

   store.dispatch(changeWidht(persent))
}
   
     store.dispatch(pers(todos))
  
 
}  // end if num

        })
 var odos = todo;
 return odos;
    })
  )
}


function fLeave(number, id, event) {

 setArr(

todos.map( (todo, index) =>{
 todo.map((todo, ind) => {
  if ((todo.id % 4 == 0) && (todo.number == number) && todo.id ==id ) {
for (var j = 0; j < 3; j++) {
  if (index==rows-2) {break}
      const str = todos[index][j].number;
      todos[index][j].number =  Number(str.substr(-str.length ,str.length-1));
      todos[index][j].number = Math.round((todo.number*todos[index][j].number) /100);

document.querySelector('#s'+(todo.id-3)).style['width'] = '0%';
document.querySelector('#s'+(todo.id-2)).style['width'] = '0%';
document.querySelector('#s'+(todo.id-1)).style['width'] = '0%'; 

document.querySelector('#s'+(todo.id-3)).style['background-color'] = '';
document.querySelector('#s'+(todo.id-2)).style['background-color'] = '';
document.querySelector('#s'+(todo.id-1)).style['background-color'] = '';

}

store.dispatch(leave(todos))

}  // end if num

        })
 var odos = todo;
 return odos;
    })
  )
}


function M(number, id, event) {

setArr(
todos.map( (todo, index) =>{
  todo.map((todo, ind) => {

  if ((todo.id % 4 == 0) && (todo.number == number) && todo.id ==id ) {
     for (var j = 0; j < 3; j++) {
          if (index==rows-2) {break}
            document.querySelector('#s'+(todo.id)).style['width'] = '100%';

               }
            }  // end if num

        })
 var odos = todo;
 
 return odos;
    })
  )
store.dispatch(pers())
}

	return (
       <div>  
<button className='btn btn-indigo'   onClick = { () => { Hendler(todos)}}
 > ADD_LINE </button>
<button className='btn btn-danger' onClick = { () => { HendlerDelete(todos)}}
 > Delete_LINE </button>
 <br/> <br/>
     <h2>
    { (props.num.length == 0)
      ? 
      'For Start - Press ADD_LINE'
      : null
    }
     </h2>
      <div>
      {props.num.map((row_list, index) => {
          return (
              <StateRowList 
                row_list = {row_list}
                index = {index}
                key = {index} 
                onToggle = {toggleSomething}
                 onTog={f100}
                 onLeave = {fLeave}

                 />
          )
      })} 
      </div> 
      </div>   
		)
}





const mapStateToProps = ((state) => {

	return {
       num: state.numberKey
	}
})

const mapDispatchToProps = (dispatch) => {
	return {
	
		add: (todos) => dispatch(add(todos)),
	  delete_line: (todos) => dispatch(delete_line(todos)),
    changeWidht: (persent) => dispatch(changeWidht(persent))	
	 
	}
}

export default connect (mapStateToProps, mapDispatchToProps) (State)