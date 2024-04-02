import CenterFeed from './CenterFeed'
import RightMenu from './RightMenu'

const Education = () => {
  return (
    <div>
      <div className='grid grid-cols-1  gap-6 subsemi:gap-4  semi:gap-6 xmd:gap-8  md:grid-cols-[10fr_1fr] mx-auto '>
        <div className='h-full'>
          <div className='w-full h-full   grid subsemi:gap-4 semi:gap-6 xmd:gap-8 xm:gap-10  '>
            <CenterFeed />
          </div>
        </div>

        <div>
          <RightMenu />
        </div>
      </div>
    </div>
  )
}

export default Education
