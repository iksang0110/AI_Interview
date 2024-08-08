import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">회원가입</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">이름</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">이메일</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-semibold">비밀번호</label>
            <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block mb-2 font-semibold">비밀번호 확인</label>
            <input type="password" id="confirm-password" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">가입하기</button>
        </form>
        <p className="mt-4 text-center">
          이미 계정이 있으신가요? <Link to="/login" className="text-blue-500 hover:underline">로그인</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;