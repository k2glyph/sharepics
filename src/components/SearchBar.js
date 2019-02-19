import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {fetchImages} from "../actions";

const Text = ({input}) => {
    console.log(input);
    return (
        <input id={input.name} type="text"
               {...input}
        />
    );
};

class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.props.handleSubmit(this.props.fetchImages)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <Field name="query" component={Text} label="Search Images"/>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("SearchBar.js");
    console.log(state);
    return {
        state: state
    }
};

SearchBar = connect(mapStateToProps, {fetchImages})(SearchBar);

export default reduxForm({
    form: 'searchForm'
})(SearchBar);
