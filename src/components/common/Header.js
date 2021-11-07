import React from "react";
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ( {session} ) => {
    const loginStyle = { float: 'right'}
    const activeStyle = { color: "#F152BA"}
    // const isBanker = session.roles.isBanker
    // const is3DClub = session.roles.is3DClubPrinter || session.roles.is3DClubDesigner
    const isDirector = session.roles.isDirector
    const isStaff = session.roles.isStaff
    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact >Home</NavLink> 
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
            {" | "}
            <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>
            {(isStaff || isDirector) && " | "}
            {(isStaff || isDirector) && <NavLink to="/accounts" activeStyle={activeStyle}>Accounts</NavLink>}
            {/* {isBanker && " | "} 
            {isBanker && <NavLink to="/bank">Bank</NavLink>} 
            {isDirector && " | "} 
            {isDirector && <NavLink to="/bank">Members</NavLink>} 
            {is3DClub && " | "} 
            {is3DClub && <NavLink to="/bank">3D Prints</NavLink>}  */}
            {!session.sessionToken && <NavLink to="/login" style={loginStyle}>Login</NavLink>}  
        </nav>
    )
    
}

function mapStateToProps(state) {
    return {
        session: state.session,
    }
}

Header.propTypes = {
    session: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Header
    );