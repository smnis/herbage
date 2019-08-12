import axios from './axios'

export async function getPosts(count = 10, cursor, { safe } = { safe: false }) {
  try {
    return await axios.get('/api/posts', {
      params: {
        count,
        cursor
      }
    })
  } catch (err) {
    if (!safe) throw err
    return {
      data: {
        error: '서버에 문제가 생겼습니다.',
        posts: [],
        cursor: '',
        hasNext: false
      }
    }
  }
}

export async function createPost({ title, content, answer, verifier, tag }) {
  return (await axios.post('/api/posts', {
    title,
    content,
    tag,
    verifier: {
      id: verifier.id,
      answer: answer
    }
  })).data
}

export async function acceptPost({ id, fbLink }) {
  return (await axios.patch(`/api/posts/${id}`, {
    status: 'ACCEPTED',
    fbLink
  })).data
}

export async function rejectPost({ id, reason }) {
  return (await axios.patch(`/api/posts/${id}`, {
    status: 'REJECTED',
    reason
  })).data
}

export async function modifyPost(post) {
  return (await axios.patch(`/api/posts/${post.id}`, post)).data
}

export async function deletePost(arg) {
  await axios.delete(`/api/posts/${arg}`)
}

export async function getNewNumber() {
  return (await axios.get('/api/posts/new-number')).data.newNumber
}
