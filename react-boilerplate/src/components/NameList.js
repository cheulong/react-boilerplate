import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNames, fetchNamesFire } from './../actions';

class NameList extends Component {
    componentWillMount(){
        this.props.fetchNamesFire();
    }
    renderNameList(){
        const { names } = this.props;
        return names.map(name => (<h1 key={name.name}>{name.name}</h1>));
    
    }
    renderNameListFire(){
        const { namesFire } = this.props;
        if(namesFire.length>0){
            return namesFire.map(name => (<h1 key={name.name}>{name.name}</h1>));
        }
    
    }
    render() {
        
        return(
            <div>
                {this.renderNameList()}
                {this.renderNameListFire()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    names: state.names,
    namesFire: state.namesFire
    
});

export default connect(mapStateToProps,{ fetchNames, fetchNamesFire })(NameList);
