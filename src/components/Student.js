import React, { Component } from 'react';

class Student extends Component {
    state={ }

    
    render() { 
        return (  
            <div>
                {this.props.student && this.props.student.name}
                {this.props.student && <img src={this.props.student.img}/>}
            </div>
        );
    }
}
 
export default Student ;