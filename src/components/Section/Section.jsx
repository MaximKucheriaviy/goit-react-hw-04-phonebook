import { Component } from "react";
import {SectionStyled} from "./Section.styled"
import PropTypes from "prop-types";

export default class Section extends Component{
    render(){
        return(
            <SectionStyled>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </SectionStyled>
        )
    }
}

Section.propTypes = {
    title: PropTypes.string
}