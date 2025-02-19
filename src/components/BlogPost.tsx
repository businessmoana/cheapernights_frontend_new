import React from 'react';

interface BlogPostProps {
    title: string;
    image: string;
    content: string;
    publishDate: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, image, content, publishDate }) => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <img src={image} alt={title} className="w-full h-auto mb-4" />
            <p className="text-gray-500 mb-2">{publishDate}</p>
            <div className="prose">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default BlogPost;