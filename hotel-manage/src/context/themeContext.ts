// step1:crate context&component

import { Dispatch, SetStateAction, createContext } from 'react';

type ThemeContextType = {
    darkTheme: boolean; //是否为暗黑主题
    // 函数->设置主题状态
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
  };
  
// 函数->创建对象  
const ThemeContext = createContext<ThemeContextType>({
    darkTheme: true,
    setDarkTheme: () => null,
});
  
// 最后导出
  export default ThemeContext;