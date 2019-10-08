import React, {useState} from 'react';
import './App.css';

interface IPost {
    id: number;
    title: string;
    tagline: string;
    votesCount: number;
}

interface IPageProps {
    initPosts: Array<IPost>,
}

interface IPostListProps {
    posts: Array<IPost>,
    upvote: Function,
}

interface IPostProps {
    children: React.ReactNode,
    post: IPost,
}

export default function Page({ initPosts } : IPageProps) {
    const [votes, setVotes] = useState<number[]>([]);
    const [posts, setPosts] = useState<IPost[]>(initPosts);

    function upvote(post: IPost) {
        if (votes.includes(post.id)) {
            setVotes(votes.filter(vote => vote !== post.id));
            setPosts(posts.map(p => p.id === post.id ? {...p, votesCount: p.votesCount--} : p));
        } else {
            setPosts(posts.map(p => p.id === post.id ? {...p, votesCount: p.votesCount++} : p));
            setVotes([...votes, post.id]);
        }

        setPosts(posts.sort((a, b) => (b.votesCount - a.votesCount)));
    };

    const sortPosts = () => {
        return posts.sort((a, b) => (b.votesCount - a.votesCount));
    };

    return <main><PostList posts={sortPosts()} upvote={upvote}/></main>;
}

function PostList({posts, upvote} : IPostListProps) {
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

function Post({children, post} : IPostProps) {
    return (
        <div className="card" key={post.id}>
            <h3>{post.title}</h3>
            <span>{post.votesCount}</span>
            {children}
        </div>
    );
}
