import React from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaVideo, FaChartBar } from 'react-icons/fa';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">AI 모의면접으로 자신감 UP!</h1>
        <p className="text-xl mb-6">인공지능 기술로 실전 같은 면접 연습을 경험해보세요</p>
        <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">무료로 시작하기</Link>
      </section>
      
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaRobot className="text-4xl text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">AI 면접관</h2>
          <p>실제 면접관처럼 질문하고 대답을 분석하는 AI와 연습해보세요.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaVideo className="text-4xl text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">영상 분석</h2>
          <p>표정, 목소리, 자세 등을 분석해 꼭 필요한 피드백을 제공합니다.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaChartBar className="text-4xl text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">성장 리포트</h2>
          <p>연습할수록 늘어나는 실력, 데이터로 한눈에 확인하세요.</p>
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">이제 자신 있게 면접 보러 가볼까요?</h2>
        <Link to="/features" className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">서비스 자세히 보기</Link>
      </section>
    </div>
  );
}

export default Home;