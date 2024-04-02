import PostFeeds from './PostFeeds'

const CenterFeed = () => {
  return (
    <div className='h-full flex col-span-2 flex-col justify-start  sz:col-span-1 order-1 space-y-5 overflow-hidden z-0'>
      <div className='space-y-2 bg-white'>
        <PostFeeds />
      </div>
    </div>
  )
}

export default CenterFeed
