import React from "react";
import {Notice} from './Notice';

export class SubmittedList extends React.Component {

  state = {
    loading: true,
    notices: [],
  };

  async componentDidMount(){
    const id = window.location.pathname.replace('/submitted/','');
    const url = `https://project-asw.herokuapp.com/submitted/${id}.json`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({notices: data});
    console.log(data);
  }

  render() {
    return (
      <ul style={{backgroundColor: '#dfeff1'}}>
      <br></br>
      {this.state.notices.map((notice) => (
        <Notice
        title={notice.title}
        id={notice.id}
        votes={notice.votes}
        author={notice.author}
        user_id={notice.user.id}
        createdAt={notice.created_at}
        comments={notice.comments}
        />
      ))}
      </ul>
    );
  }
}
