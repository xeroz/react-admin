import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroup, ListGroupItem } from 'reactstrap';

import ToggleState from '../Common/ToggleState';
import TriggerResize from '../Common/TriggerResize';

class Header extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <header className="topnavbar-wrapper">
                { /* START Top Navbar */ }
                <nav className="navbar topnavbar">
                    { /* START navbar header */ }
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#/">
                            <div className="brand-logo">
                                <img className="img-fluid" src="img/logo.png" alt="App Logo" />
                            </div>
                            <div className="brand-logo-collapsed">
                                <img className="img-fluid" src="img/logo-single.png" alt="App Logo" />
                            </div>
                        </a>
                    </div>
                    { /* END navbar header */ }

                    { /* START Left navbar */ }
                    <ul className="navbar-nav mr-auto flex-row">
                        <li className="nav-item">
                        { /* Button used to collapse the left sidebar. Only visible on tablet and desktops */ }
                        <TriggerResize>
                            <ToggleState state="aside-collapsed">
                                <a href="" className="nav-link d-none d-md-block d-lg-block d-xl-block">
                                    <em className="fa fa-navicon"></em>
                                </a>
                            </ToggleState>
                        </TriggerResize>
                        { /* Button to show/hide the sidebar on mobile. Visible on mobile only. */ }
                        <ToggleState state="aside-toggled" nopersist={true}>
                            <a href=""  className="nav-link sidebar-toggle d-md-none">
                                <em className="fa fa-navicon"></em>
                            </a>
                        </ToggleState>
                        </li>
                    </ul>
                    { /* END Left navbar */ }
                    { /* START Right Navbar */ }
                    <ul className="navbar-nav flex-row">
                        { /* START Alert menu */ }
                        <UncontrolledDropdown nav inNavbar className="dropdown-list">
                            <DropdownToggle nav className="dropdown-toggle-nocaret">
                                <em className="icon-bell"></em>
                                <span className="badge badge-danger">11</span>
                            </DropdownToggle>
                            { /* START Dropdown menu */ }
                            <DropdownMenu right className="dropdown-menu-right animated flipInX">
                                <DropdownItem>
                                    { /* START list group */ }
                                    <ListGroup>
                                       <ListGroupItem action tag="a" href="" onClick={e => e.preventDefault()}>
                                          <div className="media">
                                             <div className="align-self-start mr-2">
                                                <em className="fa fa-twitter fa-2x text-info"></em>
                                             </div>
                                             <div className="media-body">
                                                <p className="m-0">New followers</p>
                                                <p className="m-0 text-muted text-sm">1 new follower</p>
                                             </div>
                                          </div>
                                       </ListGroupItem>
                                       <ListGroupItem action tag="a" href="" onClick={e => e.preventDefault()}>
                                          <div className="media">
                                             <div className="align-self-start mr-2">
                                                <em className="fa fa-envelope fa-2x text-warning"></em>
                                             </div>
                                             <div className="media-body">
                                                <p className="m-0">New e-mails</p>
                                                <p className="m-0 text-muted text-sm">You have 10 new emails</p>
                                             </div>
                                          </div>
                                       </ListGroupItem>
                                       <ListGroupItem action tag="a" href="" onClick={e => e.preventDefault()}>
                                          <div className="media">
                                             <div className="align-self-start mr-2">
                                                <em className="fa fa-tasks fa-2x text-success"></em>
                                             </div>
                                             <div className="media-body">
                                                <p className="m-0">Pending Tasks</p>
                                                <p className="m-0 text-muted text-sm">11 pending task</p>
                                             </div>
                                          </div>
                                       </ListGroupItem>
                                       <ListGroupItem action tag="a" href="" onClick={e => e.preventDefault()}>
                                          <span className="d-flex align-items-center">
                                             <span className="text-sm">More notifications</span>
                                             <span className="badge badge-danger ml-auto">14</span>
                                          </span>
                                       </ListGroupItem>
                                    </ListGroup>
                                    { /* END list group */ }
                                </DropdownItem>
                            </DropdownMenu>
                            { /* END Dropdown menu */ }
                        </UncontrolledDropdown>
                        { /* END Alert menu */ }
                    </ul>
                    { /* END Right Navbar */ }
                </nav>
                { /* END Top Navbar */ }
            </header>
            );
    }

}

export default Header;
