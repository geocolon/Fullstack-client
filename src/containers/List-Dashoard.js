import React from 'react';
import Nav from './Nav';

import '../App.css';

class ListDashoard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchBoard());
    }

    render(){
        // const lists = this.state.lists.map((list, index) => (
        //     <li className="list-wrapper" key={index}>
        //         <List {...list} />
        //     </li>
        // ));
        console.log(props);
        return (
            <div className="container">
            <Nav />
                <h2>Example board</h2>
                <ul className="lists">{lists}</ul>
            </div>
        )
    }
}

export default ListDashoard;