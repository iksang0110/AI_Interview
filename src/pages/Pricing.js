import React from 'react';
import { FaCheck } from 'react-icons/fa';

function PricingCard({ title, price, features, isPopular }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${isPopular ? 'border-2 border-blue-500' : ''}`}>
      {isPopular && <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-semibold mb-2 inline-block">가장 인기</span>}
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-4xl font-bold mb-4">{price}<span className="text-lg font-normal">/월</span></p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <FaCheck className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 rounded-lg font-semibold ${isPopular ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
        선택하기
      </button>
    </div>
  );
}

function Pricing() {
  const plans = [
    {
      title: "무료 체험",
      price: "0원",
      features: [
        "AI 면접 3회",
        "기본 영상 분석",
        "제한된 질문 DB 이용"
      ]
    },
    {
      title: "스탠다드",
      price: "29,900원",
      features: [
        "무제한 AI 면접",
        "상세 영상 분석",
        "전체 질문 DB 이용",
        "성장 리포트 제공"
      ],
      isPopular: true
    },
    {
      title: "프리미엄",
      price: "49,900원",
      features: [
        "스탠다드 플랜 모든 기능",
        "1:1 전문가 피드백",
        "맞춤형 면접 코칭",
        "우선 고객 지원"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">이용 요금</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default Pricing;