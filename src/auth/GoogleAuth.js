import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from "../actions";
import Configuration from "../constants/configuration";
import Keys from "../constants/keys";


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: Configuration.googleClientId,
                scope: Keys.email
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            const email = this.auth.currentUser.get().getBasicProfile().getEmail();
            const name = this.auth.currentUser.get().getBasicProfile().getName();
            const imageUrl = this.auth.currentUser.get().getBasicProfile().getImageUrl();
            this.props.signIn(this.auth.currentUser.get().getId(), email, name, imageUrl);
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    Sign In with Google
                </button>
            );
        }

    }


    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(
    mapStateToProps, {
        signIn, signOut
    }
)(GoogleAuth);
