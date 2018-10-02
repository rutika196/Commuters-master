import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Entypo, EvilIcons } from '@expo/vector-icons'
import { alerts } from '../data/Alert_Data'

import * as CommentsAPI from '../utils/CommentsAPI'
// {status == 'Closed' ? <Text style={styles.closed}>Closed </Text>
// : <Text style={styles.open}>Open </Text>}

export default class CommentFeeds extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    CommentsAPI.getAll().then((comments) => {
      this.setState({ comments })
    })
  }

  likeComment = (like, id, isliked) => {
    if (!isliked) {
      this.state.comments[id-1].isliked = true
      this.setState({ comments: this.state.comments})
      this.increment(like, id)
      // console.log(isliked)
    }
    else {
      this.state.comments[id-1].isliked = false
      this.setState({ comments: this.state.comments})
      this.decrement(like, id)
      // console.log(isliked)
    }
    console.log(this.state.comments[id-1].isliked)
  }
  increment = (like, id) => {
    console.log(like, id)
    let doc = this.state.comments.filter ( a => a.id == id)
    this.state.comments[id-1].likes = like+1
  }

  decrement = (like, id) => {
    console.log(like, id)
      let doc = this.state.comments.filter ( a => a.id == id)
      if(this.state.comments[id-1].likes != 0) {
        this.state.comments[id-1].likes = like-1
      }
      this.setState({ comments: this.state.comments})
  }
  render() {
    return (
      <View style={styles.container}>

          { this.state.comments.map( ({id, title, comment, location, month, date, time, status, likes, isliked}) =>
          <View style={styles.box} key={id}>
            <View style={styles.item}>

              <View style={styles.strictColumn, styles.monthDateTime}>
                <Text style={styles.month}>
                  {month}
                </Text>
                <Text style={styles.date}>
                  {date}
                </Text>
                <Text style={styles.time}>
                  {time}
                </Text>
              </View>

              <View style={styles.rightBlock}>

                <View style={styles.strictColumn}>
                  <Text style={styles.titleLocation}>
                    {title}, {location}
                  </Text>
                  <Text style={styles.comment}>
                    {comment}
                  </Text>
                </View>
              </View>
              <View style={styles.leftBlock}>
                {
                  isliked == false ? (<TouchableOpacity onPress={ () => this.likeComment(likes, id, isliked)}>
                    <EvilIcons name="like" size={40} color='#aaa'/>
                  </TouchableOpacity>)
                  : (<TouchableOpacity onPress={ () => this.likeComment(likes, id, isliked)}>
                    <EvilIcons name="like" size={40} color='#157efb'/>
                  </TouchableOpacity>)
                }

                <Text style={{ color: '#157efb'}}>{likes}</Text>
              </View>
            </View>
            </View>
          )}

      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  box: {
    paddingBottom: 15,
  },
  item: {
    backgroundColor: '#fff',
    shadowColor: '#eee',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 20,
  },
  strictColumn:{
    flexDirection: 'column'
  },
  leftBlock: {
    alignItems: 'center'
  },
  rightBlock: {
    width: 230,
    paddingLeft: 10
  },
  monthDateTime: {
    borderRightWidth: 1,
    borderColor: '#ddd',
    paddingRight: 10
  },
  month: {
    color: '#aaa',
    fontSize: 18
  },
  date: {
    color: '#777',
    fontSize: 24
  },
  time: {
    color: '#777',
    fontSize: 18
  },
  titleLocation: {
    color: '#666',
    fontSize: 16
  },
  comment: {
    color: '#aaa',
    fontSize: 16
  },
  closed: {
    color: '#rgb(255, 59, 48)',
    fontWeight: 'bold',
    padding: 5
  },
  open: {
    color: 'rgb(76, 217, 100)',
    fontWeight: 'bold',
    padding: 5
  }
});
