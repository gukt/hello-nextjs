'use client'

import { useActionState } from 'react'
import { createPost } from '@/app/actions'

const initialState = {
  message: '',
}

export function Form() {
  const [state, formAction] = useActionState(createPost, initialState)

  return (
    <form action={formAction}>
      <input type="text" name="title" />
      <input type="text" name="content" />
      <button type="submit">Create Post</button>
    </form>
  )
}