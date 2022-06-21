import { Component } from "react";

import './search-box.styles.css'

const SearchBox = ({className, placeholder, onChangeHandler}) => {
    return (
        <div>
            <input 
                className={className} 
                type='search' 
                placeholder={placeholder} 
                onChange={onChangeHandler} 
            />
        </div>
    )
}

class SearchBoxC extends Component {

    render () {
        console.log(this.props);
        return (
            <div>
                <input 
                    className={this.props.className} 
                    type='search' 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.onChangeHandler} 
                />
            </div>
        )
    }
}

export default SearchBox;