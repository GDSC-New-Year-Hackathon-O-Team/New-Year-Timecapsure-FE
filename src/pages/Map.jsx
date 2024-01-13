import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';

export default function Map() {
  useEffect(() => {
    // Show SweetAlert prompt when the component is mounted
    showInitialAlert();
  }, []);

  const showInitialAlert = () => {
    Swal.fire({
      title: '알림',
      text: '지역에 따라 랜덤한 질문이 표시됩니다.',
      icon: 'info',
    });
  };

  return (
    <div className="page-container" style={{ fontSize: '32px', backgroundColor: '#87CEEB', minHeight: '100vh', padding: '20px' }}>
      
      <div className="image-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(48%, 1fr))', gap: '16px' }}>
        {/* Image 1 */}
        <div className="image-box">
          <Link to="/write" style={{ textDecoration: 'none', color: 'black' }}>
            <img
              src={image3}
              alt="Image 1"
              style={{ width: '50%', height: 'auto', maxWidth: '100%' }}
            />
          </Link>
        </div>

        {/* Image 2 */}
        <div className="image-box">
          <Link to="/write" style={{ textDecoration: 'none', color: 'black' }}>
            <img
              src={image2}
              alt="Image 2"
              style={{ width: '50%', height: 'auto', maxWidth: '100%' }}
            />
          </Link>
        </div>

        {/* Image 3 */}
        <div className="image-box">
          <Link to="/write" style={{ textDecoration: 'none', color: 'black' }}>
            <img
              src={image1}
              alt="Image 3"
              style={{ width: '50%', height: 'auto', maxWidth: '100%' }}
            />
          </Link>
        </div>

        {/* Image 4 */}
        <div className="image-box">
          <Link to="/write" style={{ textDecoration: 'none', color: 'black' }}>
            <img
              src={image4}
              alt="Image 4"
              style={{ width: '50%', height: 'auto', maxWidth: '100%', marginBottom: '20px' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

