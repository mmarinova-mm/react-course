import React from 'react';
import './App.css';

class Page extends React.Component {
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

    sortPosts() {
        this.setState({posts: this.state.posts.sort((a, b) => (b.votesCount - a.votesCount))});
    }

    render() {
        return (
            <main>
                <PostList posts={this.state.posts} upvote={this.upvote}/>
            </main>
        );
    }
}

class PostList extends React.Component {
    render() {
        return (
            <div>
                <h3>Posts</h3>
                {this.props.posts.length === 0 ? (
                    <span>No posts available</span>
                ) : (
                    <div>
                        {this.props.posts.map(post => (
                            <Post post={post}>
                                <button onClick={() => this.props.upvote(post)}>Upvote</button>
                            </Post>
                        ))}
                    </div>
                )}
            </div>
        );
    };
}

class Post extends React.Component {
    render() {
        return (
            <div className="card" key={this.props.post.id}>
                <h3>{this.props.post.title}</h3>
                <span>{this.props.post.votesCount}</span>
                {this.props.children}
            </div>
        );
    }
}

export default Page;