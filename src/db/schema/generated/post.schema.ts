/**
 * Copyright 2020 jhaemin
 *
 * Refresh DB
 *
 * This file is automatically generated
 * by the script "refresh-db".
 * Do not modify this file manually.
 * If there comes a situation where this file
 * should move to other place,
 * please update the source "src/dev/refresh-db.js".
 */

export type Post = {
  id: number
  board_id: number
  title: string
  body: string
  user_id: number
  uploaded_at: string
  likes: number
  is_edited: number
  random_nickname: string
}

export type Posts = Post[]

export const postFields = [
  'id',
  'board_id',
  'title',
  'body',
  'user_id',
  'uploaded_at',
  'likes',
  'is_edited',
  'random_nickname',
]
