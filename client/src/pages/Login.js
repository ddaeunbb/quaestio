import React from 'react';
import {AiFillGithub} from 'react-icons/ai';

function Login() {
  return (
    <section className='w-full h-full bg-[#6874DC] flex justify-center items-center'>
      <div className='w-[1050px] h-[650px] bg-white rounded-xl flex flex-col justify-center'>
        <div className="text-5xl mb-10 ml-14">안녕하세요, <br/><span className="font-bold text-[#2E3363] text-5xl">코에이스티오</span>에 오신 것을 환영합니다!</div>
        <div className="text-2xl ml-14">게시판을 이용하시려면 로그인을 해주세요.</div>
        <div className="ml-24 mt-20 bg-[#6874DC] w-[80px] h-[80px] flex justify-center items-center rounded-2xl">
          <AiFillGithub size="50" color="white" />
        </div>
      </div>
    </section>
  );
}

export default Login;