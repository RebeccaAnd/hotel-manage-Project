'use client';

import Link from "next/link"
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa"
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"
import ThemeContext from '@/context/themeContext';

const Header = () => {
  // step1.3:联系主题
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    // 方便定义样式
    <header className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
      <div className='flex items-center w-full md:2/3'>
        <Link href='/' className='font-black text-[#F27405]'>
          Hotelzz
        </Link>
        <ul className='flex items-center ml-5'>
            <li className='flex items-center'>
            <Link href='/auth'>
              <FaUserCircle className='cursor-pointer' />
            </Link>
            </li>
            <li className='ml-2'>
            {/* step1.3:修改图标处 */}
            {darkTheme ? (
              <MdOutlineLightMode //逻辑:darkTheme 为 true，则显示明亮模式图标
                className='cursor-pointer'
                onClick={() => {  //点击明亮图表触发 setDarkTheme(false) 将主题切为明亮模式
                  setDarkTheme(false);
                  localStorage.removeItem('hotel-theme'); //并从本地存储中移除主题设置
                }}
              />
            ) : (
              <MdDarkMode
                className='cursor-pointer'
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem('hotel-theme', 'true');  //并将主题设置保存到本地存储
                }}
              />
            )}
          </li>
        </ul>
    </div>   

    <ul className='flex items-center justify-between w-full md:w-1/3 mt-4'>
      <li className='hover:-translate-y-2 duration-500 transition-all'>
        <Link href='/'>Home</Link>
      </li>
      <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/rooms'>Rooms</Link>
      </li>
      <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/'>Contact</Link>
      </li>
    </ul>
    </header>    
  )
}

export default Header