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
    // handleClick = () => {
    //     console.log('This is where I will place the delete',this.props);
    //     console.log('this is:', this.props.lists[0].id);
    //     // this.props.dispatch(deleteNote(this.list.id));
    //   }
    


    render(){

        let lists;
        if(this.props.lists){
            lists = this.props.lists.map((list, index) => (
                    <div className="col-6" key={list.id}><div className="card-style"><img src={list.text} alt={list.name}/><button className="delete-btn" onClick={ (index) => {
                        this.props.dispatch(deleteNote(list.id));
                        console.log('this is the id', list.id );    
                    }
                }>Delete</button></div></div>
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