import { format, formatDistanceToNow } from 'date-fns';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, Key, useState } from 'react';
import { Avatar } from './Avatar';
import ptBR from 'date-fns/locale/pt-BR';
import { v4 as uuidv4 } from 'uuid'; 

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    comment: Key | null | undefined;
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

interface CommentType {
    id: string; 
    content: string;
    createdAt: Date;
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState<CommentType[]>([
        { id: uuidv4(), content: 'Post muito bacana, hein?!', createdAt: new Date() },
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        const newComment: CommentType = {
            id: uuidv4(), 
            content: newCommentText,
            createdAt: new Date(),
        };

        setComments([newComment, ...comments]); 
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentId: string) {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este comentário?');

        if (confirmDelete) {
            const commentsWithoutDeletedOne = comments.filter((comment) => comment.id !== commentId);

            setComments(commentsWithoutDeletedOne);
        }
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map((line) => {
                    if (line.type === 'paragraph') {
                        return <p key={line.comment}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return (
                            <p key={line.comment}>
                                <a href="#">{line.content}</a>
                            </p>
                        );
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe seu comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment
                        key={comment.id} 
                        content={comment.content}
                        onDeleteComment={() => deleteComment(comment.id)}
                    />
                ))}
            </div>
        </article>
    );
}
