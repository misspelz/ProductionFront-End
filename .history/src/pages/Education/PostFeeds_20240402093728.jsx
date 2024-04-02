/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import { Card, CardHeader, Link } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IoMdArrowBack } from 'react-icons/io'
// import { Image } from '@nextui-org/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Autoplay, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import { useEffect, useState } from 'react'
import './Post.css'
import { Image } from 'antd'

const PostFeeds = () => {
  const popularExaminations = [
    {
      id: 1,
      acronomy: 'JAMB',
      examBody: 'Joint Admission and Matriculation Board',
      img: `https://s3-alpha-sig.figma.com/img/bafd/3ae8/263560c8a3a3e457888832d7192773a8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkR5nten-D-cPPGhT9TP5ldhVrSjwoQmmIt2MK2ey~8hxNtV0W~d1oFvGE2qIaWSMXXUTeoGFnP~BJbov1YaByfjfW5RqEomlijnO0f0033uHF0bFO9giJeb1gfd-uHfu2gIGUI6Kpe4Zm1kFr5QcWQwHiW-wo3C9-G1dlbGYx9Rncb2XEixtfB1DVRz2g0SIOMAIORDRdiI3Il8XDTrbHxrX8bK2~xtRcND6z2UZ8Hy3pnAX93gCfzx3djlSQXCsQgmntynKyr-PLgqvk3EQ60AslOm1S7~mZctWAHcjnQaNjXhyxQLaJUhKCqyXZCuXkIp9Xt47bnb9p41IA1XPQ__`,
      link: 'https://www.jamb.gov.ng/',
    },
    // {
    //   id: 2,
    //   acronomy: 'POST UTME',
    //   examBody: 'University Entrance Examinations',
    //   img: `https://s3-alpha-sig.figma.com/img/2a2c/d2ec/3180185459b976a72ecdf7cdfeb86377?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrQLL44rRBbAzVvkMTVlmLQnjWXidGaHMamPK8-t37n1BpNI~tvzkA-OJa0xUwnjta2pZNs-k1b3zm4rF94fXjE9ONLwvBXEtULdOOtsQnsk6ek7GvhYOYvKjjCz8t3Neh0EJy8kU4Q1xkCjrH4ntD2rxmlpQ-xmMTr7q~SYk54YIYCj4m3RInXlJwt9zOMmhwlgyuzyT30~5nZQylEeqk3XJ9DGmSGCmJPZ9UaMwP1p29EKjS~KC0Rb1vWkFA6-3vfsvoY6TNeyVNqm1vMisvdZKppe~V41tIeE0qEf2UqhVnAVmqtA6WMdLd1HhDCDyeTlXiV0ctmywuX7W~vmXQ__`,
    //   link: 'https://www.jamb.gov.ng/',
    // },
    {
      id: 3,
      acronomy: 'WAEC',
      examBody: 'West African Examination Council',
      img: `https://s3-alpha-sig.figma.com/img/1249/b536/12e40ed0ee40ffe70726c4458d71695d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-oal1eQ1TYH1GlqP~HTg6z4WClZ-6OhcKFFWP7zYkFN1PloMfjGxrY8RdaLMoocXG3hQmZPCQ9MyxUD7q4DP8l-Rho-YFXKVQRAOc9NtuuAC0bgV~eJpyg2RkEZVLdZuQAlJfnzhWzeFZBA~qJLrdwDdxeo6~WEbQLTW5aJ2m~cKSrxN~pMX6cfkQc7BWfcAOjzgMyjFqWq2yMZTHqPzo4Ni6Bf8-W-Dc0Jzp8WW0yAq99LVHJZg3QEnM8dCoe-vKI1FktDDF-ZELrv8T4DX6HOjoEHjdi5E5huCS6KQgnbxzKG0WQo4nFxWt~baQQSEh56GIsZyskAQUMi~TtSsA__`,
      link: 'https://www.waecnigeria.org/',
    },
    {
      id: 4,
      acronomy: 'NECO',
      examBody: 'National Examinational Council',
      img: `https://s3-alpha-sig.figma.com/img/0c83/a50c/99ec8fb7a7da7fc17700a3fcc131ff58?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lu7yklsJP70yKf5vkiOW2jO~tdGXoWZ3zx5KjzwnvAPjGIU~LmsAY6rmGIu64AReFiVrIFp53So9VNkUWU7whiEQzFnajOMfyTxsbJYcU48-sEUAslqk4j2KH7f8SAejXgvjz6JgGFFPyVRydF8jpcJq5ENLonpfVadZItdENH9KfJM7j4MppzYT6kua7ln9G6GGnVsXlKUxNomNNqfjVCDGdNPc8lmydpIlsd7nqHfqFgeyDvNYEXPLqjYJprUOKqUTAK5Lq77ctQyU-9~Evxhl39ZEknNQ6vNOqL-BWMwaWFsZ~Gm7AQES2kIqI0dr8ZEj8K5u7lkQjjo8IWKXiQ__`,
      link: 'https://neco.gov.ng/',
    },
  ]

  const [showPagination, setShowPagination] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setShowPagination(window.innerWidth < 900)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const otherExaminations = [
    {
      id: 1,
      acronomy: 'NDA',
      examBody: 'Nigeria Defence Academy',
      img: `https://s3-alpha-sig.figma.com/img/bafd/3ae8/263560c8a3a3e457888832d7192773a8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkR5nten-D-cPPGhT9TP5ldhVrSjwoQmmIt2MK2ey~8hxNtV0W~d1oFvGE2qIaWSMXXUTeoGFnP~BJbov1YaByfjfW5RqEomlijnO0f0033uHF0bFO9giJeb1gfd-uHfu2gIGUI6Kpe4Zm1kFr5QcWQwHiW-wo3C9-G1dlbGYx9Rncb2XEixtfB1DVRz2g0SIOMAIORDRdiI3Il8XDTrbHxrX8bK2~xtRcND6z2UZ8Hy3pnAX93gCfzx3djlSQXCsQgmntynKyr-PLgqvk3EQ60AslOm1S7~mZctWAHcjnQaNjXhyxQLaJUhKCqyXZCuXkIp9Xt47bnb9p41IA1XPQ__`,
      link: 'https://nda.edu.ng/',
    },
    {
      id: 2,
      acronomy: 'NABTEB',
      examBody: 'National Business and Technical Examinations Board',
      img: `https://s3-alpha-sig.figma.com/img/2a2c/d2ec/3180185459b976a72ecdf7cdfeb86377?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrQLL44rRBbAzVvkMTVlmLQnjWXidGaHMamPK8-t37n1BpNI~tvzkA-OJa0xUwnjta2pZNs-k1b3zm4rF94fXjE9ONLwvBXEtULdOOtsQnsk6ek7GvhYOYvKjjCz8t3Neh0EJy8kU4Q1xkCjrH4ntD2rxmlpQ-xmMTr7q~SYk54YIYCj4m3RInXlJwt9zOMmhwlgyuzyT30~5nZQylEeqk3XJ9DGmSGCmJPZ9UaMwP1p29EKjS~KC0Rb1vWkFA6-3vfsvoY6TNeyVNqm1vMisvdZKppe~V41tIeE0qEf2UqhVnAVmqtA6WMdLd1HhDCDyeTlXiV0ctmywuX7W~vmXQ__`,
      link: 'https://nabteb.gov.ng/',
    },
    {
      id: 3,
      acronomy: 'NIMASA',
      examBody: 'Nigerian Maritime Administration and Safety Agency',
      img: `https://s3-alpha-sig.figma.com/img/1249/b536/12e40ed0ee40ffe70726c4458d71695d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-oal1eQ1TYH1GlqP~HTg6z4WClZ-6OhcKFFWP7zYkFN1PloMfjGxrY8RdaLMoocXG3hQmZPCQ9MyxUD7q4DP8l-Rho-YFXKVQRAOc9NtuuAC0bgV~eJpyg2RkEZVLdZuQAlJfnzhWzeFZBA~qJLrdwDdxeo6~WEbQLTW5aJ2m~cKSrxN~pMX6cfkQc7BWfcAOjzgMyjFqWq2yMZTHqPzo4Ni6Bf8-W-Dc0Jzp8WW0yAq99LVHJZg3QEnM8dCoe-vKI1FktDDF-ZELrv8T4DX6HOjoEHjdi5E5huCS6KQgnbxzKG0WQo4nFxWt~baQQSEh56GIsZyskAQUMi~TtSsA__`,
      link: 'https://nimasa.gov.ng/',
    },
    {
      id: 4,
      acronomy: 'TRCN PQE',
      examBody:
        'Teachers Registration Council of Nigeria Professional Qualifying Examination',
      img: `https://s3-alpha-sig.figma.com/img/0c83/a50c/99ec8fb7a7da7fc17700a3fcc131ff58?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lu7yklsJP70yKf5vkiOW2jO~tdGXoWZ3zx5KjzwnvAPjGIU~LmsAY6rmGIu64AReFiVrIFp53So9VNkUWU7whiEQzFnajOMfyTxsbJYcU48-sEUAslqk4j2KH7f8SAejXgvjz6JgGFFPyVRydF8jpcJq5ENLonpfVadZItdENH9KfJM7j4MppzYT6kua7ln9G6GGnVsXlKUxNomNNqfjVCDGdNPc8lmydpIlsd7nqHfqFgeyDvNYEXPLqjYJprUOKqUTAK5Lq77ctQyU-9~Evxhl39ZEknNQ6vNOqL-BWMwaWFsZ~Gm7AQES2kIqI0dr8ZEj8K5u7lkQjjo8IWKXiQ__`,
      link: 'https://trcn.gov.ng/',
    },
  ]

  return (
    <div className='space-y-5 px-6 w-full min-h-screen h-full bg-white '>
      <div className='py-6'>
        <div className='flex gap-2 items-center mb-8'>
          <button>
            <IoMdArrowBack size={24} />{' '}
          </button>
          <h1>Education</h1>
        </div>
        <Swiper
          cssMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: showPagination ? '.swiper-pagination' : undefined, // Conditionally show pagination based on screen size
          }}
          style={{
            '--swiper-pagination-color': '#4F0DA3',
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Pagination, Autoplay, Mousewheel, Keyboard]}
          className='mySwiper relative w-full h-full'
        >
          {[1, 2, 3].map((key) => (
            <SwiperSlide key={key} className='text-center'>
              <img
                alt='llo'
                classNamew='w-full'
                src='https://s3-alpha-sig.figma.com/img/b45e/d11c/fd73d0f77c1ef88d89b0bdffa03f6aaa?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJkdDbvoqRbQk2BlhkDuD5rb-YyJrAC4A6jUUJQGt2bhGs-qau0n4l2sWwmuafuBF0tQAdtYGe7Dspbd~xaJ6OOMt4DWF7i8eo~Nms8dekFuJRJdbXkcEAeVNlQ4ineDtl2LAOO8KeoYuGe9CMtu25c3Qp559DARQtl7rS605EnputCNg4OdyN2DiC2lem9zzx3~cNYx58dt-Kc4m0iYG-jUa1yCxJCa33FpEwrtZjMEawrLNp~neJbvkESXt3nHwgbkpOZGakdu443BHpbWRZDIDBUqxH1Wbx8dgANEq2TJw7Uk42yGhx1fCxbUo1ep6Ij~IorhVfXbUCzqUdbVYA__'
              />
              {/* <Image src='https://s3-alpha-sig.figma.com/img/b45e/d11c/fd73d0f77c1ef88d89b0bdffa03f6aaa?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJkdDbvoqRbQk2BlhkDuD5rb-YyJrAC4A6jUUJQGt2bhGs-qau0n4l2sWwmuafuBF0tQAdtYGe7Dspbd~xaJ6OOMt4DWF7i8eo~Nms8dekFuJRJdbXkcEAeVNlQ4ineDtl2LAOO8KeoYuGe9CMtu25c3Qp559DARQtl7rS605EnputCNg4OdyN2DiC2lem9zzx3~cNYx58dt-Kc4m0iYG-jUa1yCxJCa33FpEwrtZjMEawrLNp~neJbvkESXt3nHwgbkpOZGakdu443BHpbWRZDIDBUqxH1Wbx8dgANEq2TJw7Uk42yGhx1fCxbUo1ep6Ij~IorhVfXbUCzqUdbVYA__' />
              <div className='absolute flex justify-end px-0 top-0 w-20 md:w-full md:px-4 md:top-4 right-0 md:right-4 z-10'>
                <Image
                  alt=''
                  src={`https://s3-alpha-sig.figma.com/img/1249/b536/12e40ed0ee40ffe70726c4458d71695d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-oal1eQ1TYH1GlqP~HTg6z4WClZ-6OhcKFFWP7zYkFN1PloMfjGxrY8RdaLMoocXG3hQmZPCQ9MyxUD7q4DP8l-Rho-YFXKVQRAOc9NtuuAC0bgV~eJpyg2RkEZVLdZuQAlJfnzhWzeFZBA~qJLrdwDdxeo6~WEbQLTW5aJ2m~cKSrxN~pMX6cfkQc7BWfcAOjzgMyjFqWq2yMZTHqPzo4Ni6Bf8-W-Dc0Jzp8WW0yAq99LVHJZg3QEnM8dCoe-vKI1FktDDF-ZELrv8T4DX6HOjoEHjdi5E5huCS6KQgnbxzKG0WQo4nFxWt~baQQSEh56GIsZyskAQUMi~TtSsA__`}
                />
              </div>
              <div className='absolute text-start px-4 bottom-0 md:bottom-10 z-10'>
                <h1 className='text-white text-[12px] md:text-lg md:py-2'>
                  WAEC results are out
                </h1>
                <p className='text-white  capitalize text-[12px] md:text-lg  md:py-2'>
                  2023 WAEC results are out. Check yours now!
                </p>
              </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='py-6'>
        <div className='flex flex-col space-y-6 relative text-black'>
          <h2 className='font-[500]'>Popular examinations</h2>
        </div>

        <div className='flex flex-col gap-y-6 xxlg:gap-y-12 relative text-gray-500  w-full text-sm'>
          {popularExaminations?.map?.((chatH) => (
            <div
              key={chatH?.id}
              className=' rounded-2xl w-full flex gap-x-4 items-center justify-center cursor-pointer'
            >
              <Card className='w-full'>
                <Link isExternal href={chatH?.link}>
                  <CardHeader className='flex bg-gray-200 gap-2'>
                    <Image
                      alt='nextui logo'
                      height={50}
                      radius='sm'
                      src={chatH?.img}
                      width={50}
                    />
                    <div className='flex flex-col'>
                      <p className='text-lg uppercase font-[500] text-black'>
                        {chatH?.acronomy}
                      </p>
                      <p className='text-small text-black'>{chatH?.examBody}</p>
                    </div>
                  </CardHeader>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full '>
        <img
          src={`https://s3-alpha-sig.figma.com/img/e5e7/e5a1/2e2f7b04abb2ef586e1a72225ec95c9c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nwY2XE7io-Z0dVVGg0oniCvuCgcxjCfVtso6M4FsZBv18xX7XOsUQ4k27JAJNfzdP4zPe-zFbl1RkbYsAB7fYNRtA29~GyyU9EizCMRYD1LEPAdSyOvigEJ1hd938xUYENm3qut31f3a5GYBP1H7Tt19N8qtiEVdh0KLZ-~KcahqjXpsuDeH5axFud1uaBeSqrmqMe2Q93FdgYqD--vF12hqa4i1-aogLstajF47GBeNgxHSUQOKFaY4vJbmZe4fSB0nd15tiTc13JuHufB6Rt3MVOH56w0G6m57bFDZigc~P0PI3dIZQoEanBq6-DrOyqgClm1AyZJbMNXxlM7-rQ__`}
          alt='imgg'
          className='w-full rounded md:h-44'
        />
      </div>
      <div className='py-6'>
        <div className='flex flex-col space-y-6 relative text-black'>
          <h2 className='font-[500]'>Other examinations</h2>
        </div>

        <div className='grid md:grid-cols-2 gap-6  xxlg:gap-12 relative text-gray-500  w-full'>
          {otherExaminations?.map?.((chatH) => (
            <div
              key={chatH?.id}
              className=' rounded-2xl w-full flex flex-col gap-x-4 items-center justify-center cursor-pointer'
            >
              <Card className='w-full'>
                <Link isExternal href={chatH?.link}>
                  <CardHeader className='flex flex-col justify-center items-center text-center bg-gray-200 gap-2'>
                    <Image
                      alt='nextui logo'
                      height={50}
                      radius='sm'
                      src={chatH?.img}
                      width={50}
                    />
                    <div className='flex flex-col'>
                      <p className='text-lg uppercase font-[500] text-black'>
                        {chatH?.acronomy}
                      </p>
                      <p className='text-small text-black'>{chatH?.examBody}</p>
                    </div>
                  </CardHeader>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostFeeds
