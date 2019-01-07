import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    }

    onSubmitForm = (evt) => {
        evt.preventDefault();
        this.props.onSubmitSearch(this.state.term);
    }

    onChangeForm = (evt) => {
        this.setState({term: evt.target.value});
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={this.onChangeForm}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;