import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import {connect} from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar />
                <ImageList images={this.props.images} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("App.js");
    console.log(state);
    return {
        images: Object.values(state.images)
    }
};

export default connect(
    mapStateToProps, {}
)(App);
