"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
      setAuthorName('');
    }
  };

  const handleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comments) =>
        comments.id === editingCommentId
          ? { ...comments, text: newComment, author: authorName }
          : comments
      );

      setComments(updatedComments);
      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-purple-800 mb-6">Comments</h2>

      <div className="mt-4 space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card
              key={comment.id}
              className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-4">
                <div className="font-semibold text-xl text-purple-800">{comment.author}</div>
                <p className="text-gray-700 mt-2">{comment.text}</p>
                <Button
                  onClick={() => handleEditComment(comment.id)}
                  className="mt-4 text-sm text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">No comments yet</p>
        )}
      </div>

      <div className="mt-6 space-y-4">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <Button
          onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
          className="w-full px-6 py-3 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
        >
          {editingCommentId ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
}