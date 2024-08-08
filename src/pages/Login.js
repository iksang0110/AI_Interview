import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">로그인</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">이메일</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-semibold">비밀번호</label>
            <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">로그인</button>
        </form>
        <p className="mt-4 text-center">
          계정이 없으신가요? <Link to="/register" className="text-blue-500 hover:underline">회원가입</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;