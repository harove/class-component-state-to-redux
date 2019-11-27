import React from 'react';
import { setTechnology } from '../../actions/index';
import {store} from '../../store'

const dispatchBtnAction = (e) => {
    store.dispatch(setTechnology(e.target.dataset.tech));
}


const ButtonGroup = (props) => {
        const {techs} = props
        return(
                <div>
                    {techs.map((tech,i) => (
                                <button 
                                  className ="hello-btn" 
                                  key = {`btn-${i}`}
                                  data-tech = {tech} 
                                  onClick = {dispatchBtnAction}
                                >{tech}</button>
                    ))
                    }
                </div>
            )
}
export default ButtonGroup;