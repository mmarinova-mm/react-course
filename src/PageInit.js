import React from 'react';
import './App.css';

class PageInit extends React.Component {
    state = {
        votes: [],
        posts: this.props.posts,
    };

    constructor(state) {
        super(state);
        this.sortPosts();
    }

    upvote = (post) => {
        if (this.state.votes.includes(post.id)) {
            this.setState({
                posts: this.state.posts.map(p => p.id === post.id ? {...p, votesCount: p.votesCount--} : p),
                votes: this.state.votes.filter(vote => vote !== post.id)
            });
        } else {
            this.setState({
                posts: this.state.posts.map(p => p.id === post.id ? {...p, votesCount: p.votesCount++} : p),
                votes: [...this.state.votes, post.id]
            });
        }

        this.sortPosts();
    };

    sortPosts = () => {
        this.setState({posts: this.state.posts.sort((a, b) => (b.votesCount - a.votesCount))});
    };

    render() {
        return (
            <main>
                <PostList posts={this.state.posts} upvote={this.upvote}/>
            </main>
        );
    }
}

function PostList({posts, upvote}) {
    return (
        <div>
            <h3>Posts</h3>
            {
                posts.length === 0 ?
                    <span>No posts available</span> :
                    <div>
                        {posts.map(post => (
                            <Post post={post}>
                                <button onClick={() => upvote(post)}>Upvote</button>
                            </Post>
                        ))}
                    </div>
            }
        </div>
    );
}

function Post({children, post}) {
    return (
        <div className="card" key={post.id}>
            <h3>{post.title}</h3>
            <span>{post.votesCount}</span>
            {children}
        </div>
    );
}

export default PageInit;