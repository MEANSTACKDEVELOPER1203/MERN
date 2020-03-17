import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../authAction/profileAction';
// import Spinner from '../common/Spinner';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    }
    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props;
        console.log("Profil", profile)
        let dashboardContent;
        if (profile === null || loading) {
            dashboardContent = <h4>Loading.....</h4>
        } else {
            dashboardContent = <h4>Hello Dashbord</h4>
        }
        return (
            <div className="dashnoard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4"> Dashboard</h1>
                            {dashboardContent}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    // profile: PropTypes.objects.isRequired
};

const mapStateToProps = state => ({
    // profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
























// import React, { Component } from 'react'

// // import PropTypes from 'prop-types';
// import { connect } from 'react-redux'
// import { getCurrentProfile } from '../../authAction/profileAction';

// class Dashboard extends Component {
//     componentDidMount() {
//         this.props.getCurrentProfile();
//     }

//     render() {
//         return (
//             <div>
//                 <h1>DASH BORAD </h1>
//             </div>
//         )
//     }
// }

// export default connect(null, {getCurrentProfile})(Dashboard);