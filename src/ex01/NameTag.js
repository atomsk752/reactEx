import React, {Component} from 'react'

class NameTag extends Component{

    render(){
        return(
            <div>
                <h1>
                    {this.props.name}
                </h1>
                <h2>{this.props.age}</h2>
                <hr></hr>
            </div>
        )
    }
}