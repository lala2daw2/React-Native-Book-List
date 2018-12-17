import React,{Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Card} from './common';
import * as actions from '../actions';

class BookItem extends Component{
  onPressed(){
    const { book,selectItem }=this.props;
    selectItem ? this.props.deselectBook():this.props.selectBook(book);
  }
  render(){
    const { book, selectItem }=this.props;
    const descriptionText = selectItem ? (
      <Text style={styles.descriptionTextstyle}>{book.description}</Text>
    ) : null
    return(
      <TouchableOpacity onPress={this.onPressed.bind(this)}>
      <Card>
        <Text>{book.title}</Text>
      </Card>
        {descriptionText}
      </TouchableOpacity>
    )
  }
}
const styles=StyleSheet.create({
  descriptionTextstyle:{
    marginLeft:10,
    marginRight:10,
    fontSize:16,
    color:'gray'
  }
});

const mapStateToProps =  (state,props) => {
  console.log(state);
  console.log(props);
  debugger;
  const selectItem =  state.selectedBook
                  && state.selectedBook.isbn === props.book.isbn;
  return{
      selectItem
  }
  //{selectItem}
}

export default connect(mapStateToProps,actions)(BookItem);
