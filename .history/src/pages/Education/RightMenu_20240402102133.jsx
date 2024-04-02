/* eslint-disable react-hooks/exhaustive-deps */
import { Card, CardHeader, Link } from '@nextui-org/react'
import { Image } from 'antd'

const RightMenu = () => {
  const resources = [
    {
      id: 1,
      about:
        'Nigerian Defence Academy entrance examination past questions 2012 to 2022',
      img: `https://s3-alpha-sig.figma.com/img/bafd/3ae8/263560c8a3a3e457888832d7192773a8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkR5nten-D-cPPGhT9TP5ldhVrSjwoQmmIt2MK2ey~8hxNtV0W~d1oFvGE2qIaWSMXXUTeoGFnP~BJbov1YaByfjfW5RqEomlijnO0f0033uHF0bFO9giJeb1gfd-uHfu2gIGUI6Kpe4Zm1kFr5QcWQwHiW-wo3C9-G1dlbGYx9Rncb2XEixtfB1DVRz2g0SIOMAIORDRdiI3Il8XDTrbHxrX8bK2~xtRcND6z2UZ8Hy3pnAX93gCfzx3djlSQXCsQgmntynKyr-PLgqvk3EQ60AslOm1S7~mZctWAHcjnQaNjXhyxQLaJUhKCqyXZCuXkIp9Xt47bnb9p41IA1XPQ__`,
      link: 'https://nda.edu.ng/',
    },
    {
      id: 2,
      about: 'JAMB past questions 2012-2022',
      img: `https://s3-alpha-sig.figma.com/img/0c83/a50c/99ec8fb7a7da7fc17700a3fcc131ff58?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lu7yklsJP70yKf5vkiOW2jO~tdGXoWZ3zx5KjzwnvAPjGIU~LmsAY6rmGIu64AReFiVrIFp53So9VNkUWU7whiEQzFnajOMfyTxsbJYcU48-sEUAslqk4j2KH7f8SAejXgvjz6JgGFFPyVRydF8jpcJq5ENLonpfVadZItdENH9KfJM7j4MppzYT6kua7ln9G6GGnVsXlKUxNomNNqfjVCDGdNPc8lmydpIlsd7nqHfqFgeyDvNYEXPLqjYJprUOKqUTAK5Lq77ctQyU-9~Evxhl39ZEknNQ6vNOqL-BWMwaWFsZ~Gm7AQES2kIqI0dr8ZEj8K5u7lkQjjo8IWKXiQ__`,
      link: 'https://www.jamb.gov.ng/',
    },
    {
      id: 3,
      about: 'LAUTECH Post-UTME screening form is out!',
      img: `https://s3-alpha-sig.figma.com/img/7888/3f21/78a9c4629a509d2779cf38c66a5588a9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jJQdzUTmOQsX9iBFkeX6XHIF7oNDSdE3OY0E6XEOUhYJ5792139e0EOspOSEpnNqvbce6kmLodQcqlb1fGXUnd-GhgMlmDEVuLX3Xvi5FukL1-WdiqtVY5-N5C8JhZdQaNTR~ebjJaojLHq~fgncHb0I7hVs7nOSCgR19ntlLiJq-LdlS6auY2mlyv7kyMqaPKrzLOxtun6~k8DLwRJSnHdHCUSUHZyd~u-ILK2n7nilb3zkN~Cwd7HeQ-F6F4aOLneqp91nwdjd2-wSNAoqG6xa9Na0RvRCtz5jeRwOoK1v5V4aHHoblUDeBdm1GfDIYPOKM73ys1UNq0EqyrHzrg__`,
      link: 'https://www.lautech.edu.ng/',
    },
    {
      id: 4,
      about: 'UNILAG Post- UTME past questions 2012 to 2023',
      img: `https://s3-alpha-sig.figma.com/img/0ce4/4c03/e7e643afb2d6866a47a60594eabb1eb9?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYVV~fNc6YobCbWuJwxKKNlft7CSN~5uDW8byYNQV299q56M2yAEM0QtsDTXgqhplaf0huJYQZAll86FNL7IEO1Aq8vVL4ds2JM-TEmryvqYJumQYW7Z4sbGS1rZQ~IWIHwACL8vYSJNsO1ibSKEAwflW6v88moTsbxaqfmwnv3QQqFGHABzKMQc-SPK~9vcacsfZlVNUhdmLK46cqUynjR-owFr~xdYecopU7PrHQpXVW5HQJlLlX5L-rlmUzIkfVBa1cT5ckR9P3VC6eg2z8uZajQYJGSDpm24RoMR-5ozQzb46ibAC57~H9neqRbP3OMLz0g0EDGF5StO~mQCdA__`,
      link: 'https://unilag.edu.ng/',
    },
    {
      id: 5,
      about: 'UI Post- UTME past questions 2012 to 2023',
      img: `https://s3-alpha-sig.figma.com/img/0262/af06/52a06194e4f2c4c532c664e8a27f776c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PZnbh~CddHjaEtkmLMfARiJcsaGyPi7qyfowv1VM~5JRt4w-WEAkx2lQ9P7Iigsu3DiWV9DsAMhwUqsBC2mtemDA1wJ0dCsMcwgTXmNPp9o37UF0CkXX1JuBkNGMk12Qpi-ai4KbHt1KJfkK~K5Xys8lIW1zwTTnfoKf72O5lMGONaaS0Wle4XGrxREEbLRwhKmSxekHPbaK~NGambmKB7bYQd0hUgbnMDashrQSN6JmHMg3LwY8UYuJ-fI6Y9P79-xhYNlwSB5bBwbaZ0pJV0LRKPXBMXo79D1Dvfv5PFZGmt7i6~jxzqGKax0TGMEJfjXOTziTA8EkQJl4LXO36A__`,
      link: 'https://ui.edu.ng/',
    },
  ]

  const latestNews = [
    {
      id: 1,
      about: 'UNILAG admission list first batch is out!',
      img: `https://s3-alpha-sig.figma.com/img/bafd/3ae8/263560c8a3a3e457888832d7192773a8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkR5nten-D-cPPGhT9TP5ldhVrSjwoQmmIt2MK2ey~8hxNtV0W~d1oFvGE2qIaWSMXXUTeoGFnP~BJbov1YaByfjfW5RqEomlijnO0f0033uHF0bFO9giJeb1gfd-uHfu2gIGUI6Kpe4Zm1kFr5QcWQwHiW-wo3C9-G1dlbGYx9Rncb2XEixtfB1DVRz2g0SIOMAIORDRdiI3Il8XDTrbHxrX8bK2~xtRcND6z2UZ8Hy3pnAX93gCfzx3djlSQXCsQgmntynKyr-PLgqvk3EQ60AslOm1S7~mZctWAHcjnQaNjXhyxQLaJUhKCqyXZCuXkIp9Xt47bnb9p41IA1XPQ__`,
      link: 'https://unilag.edu.ng/',
    },
    {
      id: 2,
      about: 'LAUTECH Post-UTME screening form is out',
      img: `https://s3-alpha-sig.figma.com/img/2a2c/d2ec/3180185459b976a72ecdf7cdfeb86377?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HrQLL44rRBbAzVvkMTVlmLQnjWXidGaHMamPK8-t37n1BpNI~tvzkA-OJa0xUwnjta2pZNs-k1b3zm4rF94fXjE9ONLwvBXEtULdOOtsQnsk6ek7GvhYOYvKjjCz8t3Neh0EJy8kU4Q1xkCjrH4ntD2rxmlpQ-xmMTr7q~SYk54YIYCj4m3RInXlJwt9zOMmhwlgyuzyT30~5nZQylEeqk3XJ9DGmSGCmJPZ9UaMwP1p29EKjS~KC0Rb1vWkFA6-3vfsvoY6TNeyVNqm1vMisvdZKppe~V41tIeE0qEf2UqhVnAVmqtA6WMdLd1HhDCDyeTlXiV0ctmywuX7W~vmXQ__`,
      link: 'https://www.lautech.edu.ng/',
    },
    {
      id: 3,
      about: 'WAEC 2023 result is out!',
      img: `https://s3-alpha-sig.figma.com/img/1249/b536/12e40ed0ee40ffe70726c4458d71695d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-oal1eQ1TYH1GlqP~HTg6z4WClZ-6OhcKFFWP7zYkFN1PloMfjGxrY8RdaLMoocXG3hQmZPCQ9MyxUD7q4DP8l-Rho-YFXKVQRAOc9NtuuAC0bgV~eJpyg2RkEZVLdZuQAlJfnzhWzeFZBA~qJLrdwDdxeo6~WEbQLTW5aJ2m~cKSrxN~pMX6cfkQc7BWfcAOjzgMyjFqWq2yMZTHqPzo4Ni6Bf8-W-Dc0Jzp8WW0yAq99LVHJZg3QEnM8dCoe-vKI1FktDDF-ZELrv8T4DX6HOjoEHjdi5E5huCS6KQgnbxzKG0WQo4nFxWt~baQQSEh56GIsZyskAQUMi~TtSsA__`,
      link: 'https://www.waecnigeria.org/',
    },
    {
      id: 4,
      about: 'JAMB result 2023 is out!',
      img: `https://s3-alpha-sig.figma.com/img/0c83/a50c/99ec8fb7a7da7fc17700a3fcc131ff58?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lu7yklsJP70yKf5vkiOW2jO~tdGXoWZ3zx5KjzwnvAPjGIU~LmsAY6rmGIu64AReFiVrIFp53So9VNkUWU7whiEQzFnajOMfyTxsbJYcU48-sEUAslqk4j2KH7f8SAejXgvjz6JgGFFPyVRydF8jpcJq5ENLonpfVadZItdENH9KfJM7j4MppzYT6kua7ln9G6GGnVsXlKUxNomNNqfjVCDGdNPc8lmydpIlsd7nqHfqFgeyDvNYEXPLqjYJprUOKqUTAK5Lq77ctQyU-9~Evxhl39ZEknNQ6vNOqL-BWMwaWFsZ~Gm7AQES2kIqI0dr8ZEj8K5u7lkQjjo8IWKXiQ__`,
      link: 'https://www.jamb.gov.ng/',
    },
    {
      id: 5,
      about: 'UI Post- UTME past questions 2012 to 2023',
      img: `https://s3-alpha-sig.figma.com/img/0c83/a50c/99ec8fb7a7da7fc17700a3fcc131ff58?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lu7yklsJP70yKf5vkiOW2jO~tdGXoWZ3zx5KjzwnvAPjGIU~LmsAY6rmGIu64AReFiVrIFp53So9VNkUWU7whiEQzFnajOMfyTxsbJYcU48-sEUAslqk4j2KH7f8SAejXgvjz6JgGFFPyVRydF8jpcJq5ENLonpfVadZItdENH9KfJM7j4MppzYT6kua7ln9G6GGnVsXlKUxNomNNqfjVCDGdNPc8lmydpIlsd7nqHfqFgeyDvNYEXPLqjYJprUOKqUTAK5Lq77ctQyU-9~Evxhl39ZEknNQ6vNOqL-BWMwaWFsZ~Gm7AQES2kIqI0dr8ZEj8K5u7lkQjjo8IWKXiQ__`,
      link: 'https://ui.edu.ng/',
    },
  ]

  return (
    <div className=' bg-white  w-[25rem] h-full min-h-screen   overflow-visible rounded-md py-2 space-y-3 pb-10  shadow px-6 top-24  stcky columns-1 hidden md:block'>
      <div className='flex flex-col space-y-6 relative text-black'>
        <h2 className='font-[500]'>Resources</h2>
      </div>

      <div className='flex flex-col gap-y-6 xxlg:gap-y-12 relative text-gray-500  w-full text-sm'>
        {resources?.map?.((chatH) => (
          <div
            key={chatH?.id}
            className=' rounded-2xl w-full flex gap-x-4 items-center justify-center cursor-pointer'
          >
            <Card className='w-full'>
              <Link isExternal href={chatH?.link}>
                <CardHeader className='flex bg-gray-200 gap-3'>
                  <img
                    alt='scsool logo'
                    height={40}
                    radius='sm'
                    src={chatH?.img}
                    width={40}
                  />
                  <div className='flex flex-col'>
                    <p className='text-[16px] text-black'>{chatH?.about}</p>
                  </div>
                </CardHeader>
              </Link>
            </Card>
          </div>
        ))}
      </div>
      <div className='flex flex-col space-y-6 relative text-black'>
        <h2 className='font-[500]'>Latest news</h2>
      </div>

      <div className='flex flex-col gap-y-6 xxlg:gap-y-12 relative text-gray-500  w-full text-sm'>
        {latestNews?.map?.((chatH) => (
          <div
            key={chatH?.id}
            className=' rounded-2xl w-full flex gap-x-4 items-center justify-center cursor-pointer'
          >
            <Card className='maxw-[400px] w-full'>
              <Link isExternal href={chatH?.link}>
                <CardHeader className='flex bg-gray-300 gap-3'>
                  <img
                    alt=' logo'
                    height={40}
                    radius='sm'
                    src={chatH?.img}
                    width={40}
                  />
                  <div className='flex flex-col'>
                    <p className='text-small text-black'>{chatH?.about}</p>
                  </div>
                </CardHeader>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightMenu
