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
                    <div className="col-3" key={list.id}><div className="card-style">
                    <div>
                        <p><span className="title" >Title:</span> {list.name}</p>
                    </div>
                    {list.text.indexOf('http') > -1 ? <img className="image-style" src={list.text} alt={list.name}/> : <p className="p-tag">{list.text}</p> }
                    <button className="delete-btn" onClick={ () => {
                        this.props.dispatch(deleteNote(list.id));
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