import React from 'react'
import Message from './ConnectComp/message'

const RightBar = () => {
  return (
    <div className="flex gap-[20px]">
          <div className="middle-side-container w-full">
            <img src="images/makeupad.svg" alt="ad-pics" className="w-full" />
          </div>
          <div className="right-side-container e-full">
            <div>
              <div className="flex w-full justify-between my-[10px] items-center">
                <div className="text-[14px] lg:text-[16px] font-bold">
                  Stickers
                </div>
                <div className="text-[10px] lg:text-[12px] text-primaryColor font-semibold">
                  See all
                </div>
              </div>
              <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4 mb-10 bg-white rounded-[10px] p-4">
                <div
                  className="w-[45px] h-[45px] rounded-full bg-primaryColor bg-cover bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                  }}
                ></div>
                <div
                  className="w-[45px] h-[45px] rounded-full bg-primaryColor bg-cover bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                  }}
                ></div>
                <div
                  className="w-[45px] h-[45px] rounded-full bg-primaryColor bg-cover bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                  }}
                ></div>
                <div
                  className="w-[45px] h-[45px] rounded-full bg-primaryColor bg-cover bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                  }}
                ></div>
                <div
                  className="w-[45px] h-[45px] rounded-full bg-primaryColor bg-cover bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                  }}
                ></div>
                <div
                  className="w-[45px] h-[45px] rounded-full bg-primaryColor bg-cover bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                  }}
                ></div>
                <div
                  className="w-[45px] h-[45px] rounded-full bg-primaryColor bg-cover bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                  }}
                ></div>
                <div
                  className="w-[45px] h-[45px] rounded-full bg-primaryColor bg-cover bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                  }}
                ></div>
              </div>
            </div>

            <div className="bg-white flex flex-col gap-2">
              <div className="w-full flex justify-between items-center bg-primaryColor h-[40px] px-4 rounded-[5px]">
                <div className="text-[14px] lg:text-[16px] font-bold text-white">
                  Messages
                </div>
                <div className="h-[20px] w-[20px] flex items-center justify-center rounded-[5px] bg-white text-black text-[14px] lg:text-[16px]">
                  6
                </div>
              </div>
              <div className="w-[260px]">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
              </div>
            </div>
          </div>
        </div>
  )
}

export default RightBar