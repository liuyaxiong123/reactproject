import React, { useEffect, useRef, useState } from 'react';
import './1.css';
import Header from './Header.js';

function App() {
  const [list] = useState([
    {
      title:"同城零售",
      address:"杭州",
      time:"9分钟前"
    },{
      title:"同城零售",
      address:"杭州",
      time:"9分钟前"
    },
    {
      title:"同城零售",
      address:"杭州",
      time:"9分钟前"
    },
    {
      title:"同城零售",
      address:"杭州",
      time:"9分钟前"
    },
    {
      title:"同城零售",
      address:"杭州",
      time:"9分钟前"
    },
    {
      title:"同城零售",
      address:"杭州",
      time:"9分钟前"
    }
  ]);

  const [isScrolle, setIsScrolle] = useState(true);

  // 滚动速度，值越小，滚动越快
  const speed = 30;
  const warper = useRef();
  const childDom1 = useRef();
  const childDom2 = useRef();

  // 开始滚动
  useEffect(() => {
    // 复制一层
    childDom2.current.innerHTML = childDom1.current.innerHTML;
    let timer;
    if (isScrolle) {
      timer = setInterval(
        () =>
          warper.current.scrollTop >= childDom1.current.scrollHeight
            ? (warper.current.scrollTop = 0)
            : warper.current.scrollTop++,
        speed
      );
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isScrolle]);

  const hoverHandler = (flag) => setIsScrolle(flag);

  return (
    <>
      <Header/>
      <div className='parent' ref={warper}>
        <div className='child' ref={childDom1}>
          {list.map((item) => (
            <li
              key={item}
              onMouseOver={() => hoverHandler(false)}
              onMouseLeave={() => hoverHandler(true)}
            >
              <span>{item.title}</span>
              <span>{item.address}</span>
              <span>{item.time}</span>
            </li>
          ))}
        </div>
        <div className='child' ref={childDom2}></div>
      </div>
    </>
  );
}

export default App;