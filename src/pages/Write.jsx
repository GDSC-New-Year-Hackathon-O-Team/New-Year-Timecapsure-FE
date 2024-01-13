import React, { useState, useEffect } from 'react';
import WriteBox from '../components/WriteBox';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import lockClosed from './잠금.png';
import lockOpen from './open.png';

export default function Write() {
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(/* 초기 userId 값 설정 */);
  const [questionData, setQuestionData] = useState({
    title: '이번년도에 어떤 사랑을 하실껀가요?',
    contents: '저는 이번년도에 사랑하지 않을것입니다.',
    category: '사랑',
    isPrivate: false,
  });
  const [lockImage, setLockImage] = useState(lockClosed);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleLockClick = () => {
    // Toggle the lock image and change the privacy status
    setLockImage((prevImage) =>
      prevImage === lockClosed ? lockOpen : lockClosed
    );
    setQuestionData((prevData) => ({
      ...prevData,
      isPrivate: !prevData.isPrivate,
    }));
  };

  const handleSubmit = async () => {
    try {
      // 서버로 데이터 전송
      const response = await fetch('http://192.168.8.121:8080/timecapsure/randomform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log('질문이 성공적으로 제출되었습니다');

      // 답변이 성공적으로 제출되면 SweetAlert2로 성공 알림창 띄우기
      Swal.fire({
        icon: 'success',
        title: '다시만날 때까지 성장과 <br /> 행복을 <br />기원합니다.<br /> 그 날을 기다리며',
        showConfirmButton: false,
        timer: 3000, // 알림창이 자동으로 사라지는 시간 (밀리초)
      });
    } catch (error) {
      console.error('질문 제출 실패:', error);

      // 질문이 실패하면 SweetAlert2로 실패 알림창 띄우기
      Swal.fire({
        icon: 'error',
        title: '질문 제출에 실패했습니다',
        text: '다시 시도해주세요',
      });
    }
  };

  /*useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch('http://192.168.8.121:8080/timecapsure/title?category={category_name}', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const searchData = await response.json();
        // setSearchResults(searchData.content); // searchData.content를 사용할 부분이 없어 주석 처리
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
      setLoading(false);
    }

    fetchData(); 

  }, [userId]);
*/
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page" style={{ fontSize: '20px', backgroundColor: 'rgb(213 243 255)', minHeight: '100vh', padding: '20px' }}>
      {/* 홈 아이콘 추가 */}
      <Link to="/main" className="home-icon">
        🏠
      </Link>
      <div className="content">
        <div className="text-inputs">
          <label htmlFor="question" className="label-slide-in">질문: {questionData.title}</label>
          <WriteBox value={answer} onChange={handleAnswerChange} />
          <img
            src={lockImage}
            alt="lock"
            style={{ width: '50px', height: 'auto', maxWidth: '100%', cursor: 'pointer' }}
            onClick={handleLockClick}
          />
          <Button style={{ width: '100%' }} onClick={handleSubmit} variant="primary" size="lg">
            타임캡슐 묻기
          </Button>{' '}
        </div>
      </div>
    </div>
  );
}
