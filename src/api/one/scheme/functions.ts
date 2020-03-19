/**
 * Copyright 2020 jhaemin
 *
 * Refresh One API Schemas & Functions
 *
 * This file is automatically generated
 * by the script "refresh".
 * Do not modify this file manually.
 * If there comes a situation where this file
 * should move to other place,
 * please update the source "dev/refresh.js".
 */

export { fetchPostsOfBoard } from './square/fetch-posts-of-board.f'
export { fetchRecentPostsOfBoard } from './square/fetch-recent-posts-of-board.f'
export { getPostById } from './square/get-post-by-id.f'
export { uploadPost } from './square/upload-post.f'
export { default as getUserId } from './auth/get-user-id.action/function'
export { default as deleteComment } from './square/delete-comment.action/function'
export { default as getBoardId } from './square/get-board-id.action/function'
export { default as getComments } from './square/get-comments.action/function'
export { default as uploadComment } from './square/upload-comment.action/function'