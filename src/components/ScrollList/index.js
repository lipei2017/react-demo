import React, { useEffect } from 'react';
import './index.css';
function ScrollList() {
  useEffect(() => {
    var el = document.getElementById('container'),
      refreshText = document.querySelector('.refreshText'),
      startPos = 0,
      transitionHeight = 0;
    el.addEventListener('touchstart', function (e) {
      console.log('初始位置：', e.touches[0].pageY);
      startPos = e.touches[0].pageY;
      el.style.position = 'relative';
      el.style.transition = 'transform 0s';
    });
    el.addEventListener('touchmove', function (e) {
      console.log('当前位置：', e.touches[0].pageY);
      transitionHeight = e.touches[0].pageY - startPos;
      if (transitionHeight > 0 && transitionHeight < 60) {
        refreshText.style.display = 'block';
        refreshText.innerText = '下拉刷新';
        el.style.transform = 'translateY(' + transitionHeight + 'px)';
        if (transitionHeight > 55) {
          refreshText.innerText = '释放更新';
        }
      }
    });
    el.addEventListener('touchend', function () {
      el.style.transition = 'transform 0.5s ease 1s';
      el.style.transform = 'translateY(0px)';
      refreshText.innerText = '更新中...';
      setTimeout(() => {
        refreshText.style.display = 'none';
      }, 1000);
    });
  }, []);
  // pullup
  useEffect(() => {
    var el = document.getElementById('container'),
      refreshText = document.querySelector('.refreshText'),
      startPos = 0,
      transitionHeight = 0;
    el.addEventListener('touchstart', function (e) {
      console.log('初始位置：', e.touches[0].pageY);
      startPos = e.touches[0].pageY;
      el.style.position = 'relative';
      el.style.transition = 'transform 0s';
    });
    el.addEventListener('touchmove', function (e) {
      console.log('当前位置：', e.touches[0].pageY);
      transitionHeight = e.touches[0].pageY - startPos;
      if (transitionHeight > 0 && transitionHeight < 60) {
        refreshText.style.display = 'block';
        refreshText.innerText = '下拉刷新';
        el.style.transform = 'translateY(' + transitionHeight + 'px)';
        if (transitionHeight > 55) {
          refreshText.innerText = '释放更新';
        }
      }
    });
    el.addEventListener('touchend', function () {
      el.style.transition = 'transform 0.5s ease 1s';
      el.style.transform = 'translateY(0px)';
      refreshText.innerText = '更新中...';
      setTimeout(() => {
        refreshText.style.display = 'none';
      }, 1000);
    });
  }, []);
  return (
    <div className='wrapper'>
      <p className='refreshText'></p>
      <ul id='container'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <p className='pullUpText'></p>
    </div>
  );
}

export default ScrollList;
