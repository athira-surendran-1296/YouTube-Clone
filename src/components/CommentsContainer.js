import React from 'react';
import Comment from './Comment';
import COMMENTS from '../utils/mocks/comments';

const CommentList = ({ comments }) => {
   return(comments.map(comment => 
    <>
        <Comment key={comment.id} {...comment} />
            <div className='ml-6'><CommentList comments={comment.replies} /></div>
    </>
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