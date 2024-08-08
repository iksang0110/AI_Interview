import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">AI 면접관</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">홈</Link></li>
            <li><Link to="/features" className="hover:text-blue-200">서비스 소개</Link></li>
            <li><Link to="/pricing" className="hover:text-blue-200">이용 요금</Link></li>
            <li><Link to="/support" className="hover:text-blue-200">고객센터</Link></li>
            <li><Link to="/login" className="hover:text-blue-200">로그인</Link></li>
            <li><Link to="/register" className="hover:text-blue-200">회원가입</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;