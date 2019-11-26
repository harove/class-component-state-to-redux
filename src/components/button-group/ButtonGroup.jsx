import React, {Component} from 'react';
class ButtonGroup extends Component{
    render(){
        const {techs} = this.props
        return(
                <div>
                    {techs.map(tech => {
                        return <button>{tech}</button>
                    }) 
                    }
                </div>
            )
    }
}
export default ButtonGroup;