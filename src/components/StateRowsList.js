import React from 'react'
import {connect} from 'react-redux'
import {add} from '../redux/number/numberActions'

import StateItem from '../components/StateItem'


const styles = {
	div: {
		display: 'flex'
	}
}

function StateRowList(props) {

	return (

         <div style = {styles.div}>

         {props.row_list.map( (item, ind) => {
         	  return (
                  
                  <StateItem
                onToggleList =  {props.onToggle}
                item = {item}
                ind = {ind}
                key = {ind}
                  onMouseEnter = {props.onTog}
                  onMouseLeave = {props.onLeave}

                    />
      
         	  	)
         })} 
            
         </div>
		)
}


const mapStateToProps = (state) => {
 
	return {
		num: state.numberKey
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
	  add: (todos) => dispatch(add(todos)),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(StateRowList)
