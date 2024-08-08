import React from 'react';
import { FaRobot, FaVideo, FaChartBar, FaComments, FaDatabase, FaLock } from 'react-icons/fa';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Icon className="text-4xl text-blue-600 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: FaRobot,
      title: "AI 면접관",
      description: "실제 면접처럼 꼬리 질문도 하는 똑똑한 AI 면접관과 연습해보세요."
    },
    {
      icon: FaVideo,
      title: "영상 분석",
      description: "표정, 말투, 자세까지 세세하게 분석해 드립니다."
    },
    {
      icon: FaChartBar,
      title: "성장 리포트",
      description: "매 연습마다 늘어나는 실력을 그래프로 한눈에 확인하세요."
    },
    {
      icon: FaComments,
      title: "맞춤형 피드백",
      description: "지원하는 직무와 업계에 맞는 꼭 필요한 조언을 받아보세요."
    },
    {
      icon: FaDatabase,
      title: "질문 라이브러리",
      description: "다양한 업종과 직무별 예상 질문 DB를 제공합니다."
    },
    {
      icon: FaLock,
      title: "안전한 데이터 관리",
      description: "여러분의 소중한 연습 데이터를 안전하게 보관합니다."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">서비스 소개</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default Features;