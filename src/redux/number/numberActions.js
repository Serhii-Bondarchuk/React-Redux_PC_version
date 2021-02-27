import {ADD, DELETE, COUNTERITEM, PERSENT, LEAVE} from './numberTypes'


export const add = (todos) => {
    return {
        type: ADD,
        payload_todos: todos
        }
   } 


export const delete_line = (todos) => {
    return {
        type: DELETE,
        payload_todos: todos
       }
   } 


export const counterItemDisp = (todos) => {
    return {
        type: COUNTERITEM,
        payload_todos: todos
       }
   }


  export const pers = (todos) => {
    return {
        type: PERSENT,
        payload_todos: todos
       }
   }  

    export const leave = (todos) => {
    return {
        type: LEAVE,
        payload_todos: todos
      }
   }    