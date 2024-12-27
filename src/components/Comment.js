import React from 'react';
import { USER_ICON } from '../utils/constants';

const Comment = ({ author, content }) => {
    return (
        <div className="flex gap-3 pt-2 pb-2 bg-slate-100 border-gray-400 border-l-2 mb-1">
            <img src={USER_ICON} alt="User Icon" className="w-12" />
            <div className="comment-content">
                <h4 className="font-bold text-base">{author || 'Anonymous'}</h4>
                <p className="text-sm">{content || 'No comment provided'}</p>
            </div>
        </div>
    );
};

export default Comment;