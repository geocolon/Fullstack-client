import React from 'react';
import {fetchNote, deleteNote} from '../actions/notes';
import {connect} from 'react-redux';
import './ListDashboard.css';
import '../index.css';

class ListDashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchNote());
        // console.log('this is props',this.props);
    }

    handleClick(values) {
        return this.props.dispatch(deleteNote(values.id));
    }


    render(){
        let lists;
        if(this.props.lists){
            lists = this.props.lists.map((list, index) => (
                    <div className="col-6" key={index}><div className="card-style"><img src={list.text} alt={list.name}/><button>Delete</button></div></div>
            ));
        }
        
        return (
            <div className="container">
                <h2>Here are your notes!</h2>
                <div className="row">{lists}</div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    lists: state.user.user_info
});


export default connect(mapStateToProps)(ListDashboard);