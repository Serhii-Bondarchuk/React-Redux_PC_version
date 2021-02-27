import React from 'react'
import {connect} from 'react-redux'
import {counterItemDisp} from '../redux/number/numberActions'



const styles = {
   li: {
   	 listStyle: 'none',
   	 margin:'0',
   	 padding: '0',
   	 display: 'block',
   	 border: '1px solid black',
   	 width:'auto',
   	 borderRadius: '8px',
   	 fontSize: '25px',
   	 textAlign:'center',
   	 cursor: 'pointer',
   },
   input:{
     display:'flex',
    fontSize: '30px',
    borderRadius:'8px',
    padding:'0px',
    textAlign:'center',
    borderRight: '1px solid black',
     height:'100%',
     alignItems:'center',
     textAlign:'center',
     justifyContent:'center',
     position: 'absolute',
     zIndex:'-1000'
   },
   div:{
    display:'flex',
    width: '300px',
    border:'1px solid black',
    margin:'5px',
    borderRadius:'8px',
    cursor: 'pointer',
    height: '50px',
    alignItems:'center',
    fontSize: '30px',
    position:'relative',

   },
   graf:{
    display:'flex',
    width: '50%',
    backgroundColor:'gray',
    border:'1px solid black',
    borderRadius:'8px',
    cursor: 'pointer',
    height: '60px',
    alignItems:'center',
    visibility:'hidden',
  },
    
  }

var css = '#kover:hover{ background-color: red; z-index: 1000';
var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
document.getElementsByTagName('head')[0].appendChild(style);

function StateItem(props) {
   
      return (
  
  <div  id='kover' style = {styles.div}  onClick={ () => {
             props.onToggleList(props.item.number, props.item.id) }}
              onMouseEnter = {()=> props.onMouseEnter(props.item.number, props.item.id)}
              onMouseLeave = {()=> props.onMouseLeave(props.item.number, props.item.id)}
                >
            
        <div className='help' > {props.item.number}</div>
        <div  className='kover' id={`s`+props.item.id} style = {styles.input}> </div> 
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
		counterItemDisp: () => dispatch(counterItemDisp())
	}
}


export default connect(mapStateToProps, mapDispatchToProps) (StateItem)