import React from 'react';
import { Link } from 'react-router-dom';
import './madLib.css';


export default class madLib extends React.Component{
constructor(props){
    super(props)
    this.state={
        gender:'',

    }
}



    render(){
        console.log(this.state.gender)
        return(
            <div className='mad-lib-wrapper'>
                it's madlib
                <br/>
                <select onClick={(e)=>this.setState({gender:e.target.value})}>
                    <option value=''>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
                <Link to='/'>Home</Link>
            </div>
        )
    }
}