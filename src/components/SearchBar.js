import React from "react";
import {connect} from "react-redux";
import {searchImages, loadMore} from "../actions";
import GoogleAuth from "../auth/GoogleAuth";

class SearchBar extends React.Component {
    state = { query: "" };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.searchImages(this.state.query);
    };

    loadMore = () => {
        this.props.loadMore();
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.query}
                            onChange={e =>
                                this.setState({query: e.target.value})
                            }
                        />
                    </div>
                </form>
                <button onClick={this.loadMore}>next</button>
                <GoogleAuth/>
            </div>
        );
    }
}

export default connect(null, {searchImages, loadMore})(SearchBar);
