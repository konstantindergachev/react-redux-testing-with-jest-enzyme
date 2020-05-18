import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Button from './components/button/Button';
import HeadLine from './components/headline/HeadLine';
import Post from './components/post/Post';
import Header from './layout/header/Header';
import { postsReciever } from './redux/actions/posts/posts-actions';

const tempArr = [
  {
    fName: 'Tom',
    lName: 'Magnum',
    email: 'tom@tom.com',
    age: 24,
    onlineStatus: true,
  },
];

class App extends Component {
  state = {
    isBtnHide: false,
  };

  toggleButton = () => {
    this.setState((old) => ({ isBtnHide: !old.isBtnHide }));
  };

  getPostNumberInFuture = (postsNumber) => {
    return postsNumber + 1;
  };

  render() {
    const { postsReciever, posts } = this.props;
    const { isBtnHide } = this.state;
    return (
      <div className="container" data-test="app-component">
        <Header />
        <section className="main">
          <HeadLine title="Posts" description="Click the button to render posts!" persons={tempArr} />
          {!isBtnHide && <Button emitEvent={postsReciever} text="Get Posts" toggleButton={this.toggleButton} />}
          <div className="post__wrapper">
            {posts && posts.map((post) => <Post key={post.id} title={post.title} description={post.body} />)}
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});
export default connect(mapStateToProps, { postsReciever })(App);
