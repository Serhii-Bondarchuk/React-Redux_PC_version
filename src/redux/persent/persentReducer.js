import {CH_PERSENT} from './persentTypes'


const InitialState = {
    pers_t  : []
}

export const persentReducer = (state = InitialState , action) => {

	switch(action.type){
          case CH_PERSENT:

           return {
              ...state, pers_t: state.pers_t.filter( el =>
              el !== action.payload_todos ).concat(action.payload_todos)

          }
      
		default: return state
	} 
}