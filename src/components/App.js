import React, {Component} from 'react';
import {
    Navbar, Nav, NavItem,
} from 'react-bootstrap';
import {Link} from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Crenkore</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#"><Link to="/">Home</Link></NavItem>
                        <NavItem eventKey={2} href="#"><Link to="about">About</Link></NavItem>
                    </Nav>
                </Navbar>
                {this.props.children}
            </div>
        );
    }
}

export default App;