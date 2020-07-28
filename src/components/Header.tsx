import React from 'react';


import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">

            <Header/>
            <Navbar/>
            <div className="content">
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/1fR5Y7KaK9puRmCDaIof7j/09e2b2b9eaf42d450aba695056793607/vector1.jpg?fit=fill&w=800&h=300'
                    alt={'purple'}/>
                <div> Main content</div>
                <div>ava+description</div>
                <div>My posts</div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    );
}

const Header = () => {
    return (
        <div className='header'>
            <img src='https://cdn.dribbble.com/users/733886/screenshots/4474949/owl_logo-02.jpg' alt={'logo'} />
        </div>
    );
}

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>News</div>
            <div>Messages</div>
            <div>Friends</div>
            <div>Music</div>
            <div>Settngs</div>
        </div>
    );
}

export default App;
