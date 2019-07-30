import PropTypes from 'prop-types'
import Card from './Card'
import StatusChip from './StatusChip'
// import { REJECTED, ACCEPTED } from '../utils/post-status'

function AdminCard({ post }) {
  const openAcceptingModal = () => null
  const openRejectingModal = () => null
  const handleEdit = () => null

  return (
    <div>
      <Card
        post={{
          id: post.id,
          number: post.number,
          title: post.title,
          content: post.content,
          fbLink: post.fbLink,
          createdAt: post.createdAt
        }}
      />
      {post.status && <StatusChip status={post.status} />}
      <button onClick={openAcceptingModal}>승인</button>
      <button onClick={openRejectingModal}>거부</button>
      <button onClick={handleEdit}>수정</button>
      <button>삭제</button>
    </div>
  )
}

AdminCard.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    fbLink: PropTypes.string,
    createdAt: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    reason: PropTypes.string,
    history: PropTypes.array.isRequired
  })
}

export default AdminCard
