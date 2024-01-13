'use client';

import { useEffect, useState } from 'react';

import ThemeContext from '@/context/themeContext';

// 函数式组件->接收一个参数对象children: React.ReactNode表示组件包裹的子元素
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const themeFromStorage: boolean =  //函数->通过检查浏览器是否支持 localStorage，
                                       //以及是否存在名为 'hotel-theme' 的本地存储项，来获取之前保存的主题设置
      typeof localStorage !== 'undefined' && localStorage.getItem('hotel-theme')
        ? JSON.parse(localStorage.getItem('hotel-theme')!)//若存在,解析为Boolean并赋给themeFromStorage
        : false;

    // 使用useState定义darkTheme 状态&更新函数->表示当前主题设置
    const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);
    // 表示组件是否应该进行渲染
    const [renderComponent, setRenderComponent] = useState(false);  

    // 使用 useEffect 钩子,在组件挂载后设置 renderComponent 为 true
    // ->组件挂载后触发操作
    useEffect(() => {
        setRenderComponent(true);
    }, []);

    if (!renderComponent) return <></>; // 如果 renderComponent 为 false，则返回空元素

  // 渲染 ThemeProvider 提供的主题和子元素
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        <div className='dark:text-white dark:bg-black text-[#1E1E1E]'>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
