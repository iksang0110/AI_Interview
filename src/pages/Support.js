import React from 'react';

function Support() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">고객센터</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">자주 묻는 질문</h2>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="font-semibold cursor-pointer">AI 면접관은 어떻게 작동하나요?</summary>
              <p className="mt-2">저희 AI 면접관은 최신 자연어 처리 기술을 사용해 실제 면접관처럼 질문하고 답변을 이해합니다. 여러분의 대답에 따라 적절한 후속 질문도 할 수 있어요.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="font-semibold cursor-pointer">이전 면접 연습 기록을 볼 수 있나요?</summary>
              <p className="mt-2">네, 물론이죠! 모든 연습 기록은 여러분의 계정에 안전하게 저장됩니다. 언제든지 이전 연습을 다시 보고 개선점을 확인할 수 있어요.</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="font-semibold cursor-pointer">제 개인정보는 안전한가요?</summary>
              <p className="mt-2">개인정보 보호는 저희의 최우선 과제입니다. 모든 데이터는 암호화되어 안전하게 저장되며, 제3자와 공유되지 않습니다. 언제든 원하시면 계정 삭제도 가능해요.</p>
            </details>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">문의하기</h2>
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-semibold">이름</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">이메일</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-semibold">문의 내용</label>
              <textarea id="message" rows="4" className="w-full px-3 py-2 border rounded-lg"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">보내기</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Support;