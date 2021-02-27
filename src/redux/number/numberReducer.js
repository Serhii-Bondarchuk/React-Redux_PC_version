import {ADD, DELETE, COUNTERITEM, PERSENT, LEAVE } from './numberTypes'
import {useState} from 'react'



function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


let rows = 1;

let arr = [];

let Hendler = () => {
  
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



}



Hendler();

let InitialNumbereState = []

export const numberReducer = (state = InitialNumbereState , action) => {

    switch(action.type){


               case ADD:
          return [
            ...state = action.payload_todos
            ]


               case DELETE:
          return [
            ...state = action.payload_todos
            ]

                   case COUNTERITEM:
          return [
            ...state = action.payload_todos
            ]

                case PERSENT:
          return [
                ...state = action.payload_todos
            ] 

                  case LEAVE:
          return [
                ...state = action.payload_todos
            ] 


    default: return  state
       
    }
}