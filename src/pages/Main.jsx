import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import newyearlogo from './newlogo.png';

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    // 3초 후에 자동으로 /map으로 이동
    const timeoutId = setTimeout(() => {
      navigate('/map');
    }, 3000);

    // 컴포넌트가 마운트 해제되기 전에 타임아웃이 트리거되지 않도록 타임아웃을 지웁니다.
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="page-container" style={{ fontSize: '32px' }}>
      <img className="logo" src={newyearlogo} alt="First slide" />
    </div>
  );
}
