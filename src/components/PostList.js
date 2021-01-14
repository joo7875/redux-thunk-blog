import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {

    componentDidMount() {
        // console.log(this.props);
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>

                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    }

    render() {
        console.log(this.props);
        return <div className='ui relaxed divided list'>{this.renderList()}</div>;
    }
}

// Everytime reducers run, mapStateToProps runs
const mapStateToProps = (state) => {
    return { posts: state.posts };
};

// connect, mapStateToProps : to share state

export default connect(mapStateToProps, { fetchPosts })(PostList);