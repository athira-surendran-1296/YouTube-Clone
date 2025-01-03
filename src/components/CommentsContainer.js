import React from 'react';
import Comment from './Comment';
import COMMENTS from '../utils/mocks/comments';

const CommentList = ({ comments }) => {
   return(comments.map(comment => 
    <div key={comment.id}>
        <Comment  {...comment} />
            <div className='ml-2 md:ml-5'><CommentList comments={comment.replies} /></div>
    </div>
   ))
}

const CommentsContainer = () => {
    return (
        <div>
            <h2 className='font-bold text-xl pt-3'>Comments</h2>
            <CommentList comments={COMMENTS} />
        </div>
        
    );
};

export default CommentsContainer;