import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.jpg"
import velogo from "../assets/velogo.jpg"
import bg from "../assets/bg.jpg"
import bgGif from "../assets/bg.gif"
const Home = () => {
    const [timer, setTimer] = useState("");

  const timeHandler = () => {
    const eventDate = new Date("February 15, 2025 00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = eventDate - now;

      if (timeDiff <= 0) {
        clearInterval(interval);
        setTimer("00:00:00:00");
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((timeDiff / (1000 * 60)) % 60);
      const secs = Math.floor((timeDiff / 1000) % 60);

      setTimer(
        `${days.toString().padStart(2, "0")}d ${hrs
          .toString()
          .padStart(2, "0")}h ${mins.toString().padStart(2, "0")}m ${secs
          .toString()
          .padStart(2, "0")}s`
      );
    }, 1000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    timeHandler();
  });
        
   
    
  return (
    <>
    <div className='container mx-auto flex justify-center flex-col items-center'>
        <div className='mt-10 lg:w-[60%] w-[90%]'>
            <img className='w-full' src={logo} alt="" />
            <p className='text-gray-600 text-lg pl-6'>Ignite! Innovate! Secure!</p>
        </div>
        <div className='lg:my-20 my-10 text-center'>
            <h3 className='font-bold text-2xl mb-3'>Get Ready! Cyber Minds!</h3>
            <p className='text-lg text-gray-600'>Registration for Cybernix'25 Open now</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeV5BsNFchEn9xjHHPv01Nd7t7bpca8XyliByJ44Ax-Crd7QQ/viewform?usp=dialog"><button className='bg-gradient-to-r from-blue-900 via-indigo-600 to-pink-300 px-7 lg:py-10 py-5 text-white rounded-lg lg:my-6 my-3 hover:scale-105 transition transform duration-300 ease-in-out lg:w-[600px] w-[300px] text-2xl'>Register Here!</button></a>
        </div>
        <p className='text-gray-600'>Time is running out</p>
        <div className='text-center lg:mt-10 mt-5'>
            <h1 className='lg:text-7xl text-4xl text-blue-900 font-bold'>{timer}</h1>
            <p className='text-gray-600 text-sm'>Don't miss this opportunity to showcase your skills!</p>
        </div>

        <h2 className='text-4xl font-bold text-blue-900 mt-10'>
                About us
            </h2>
            <div className='lg:w-[60%] w-full text-justify bg-white rounded-md p-4 mt-4'>
            <p className='text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto. Tempora unde, iusto fuga cum animi numquam? Doloremque veniam delectus repellendus sit voluptatibus, assumenda voluptates perferendis dolore dignissimos hic explicabo aspernatur atque asperiores ducimus quidem ut consequatur! Atque natus, molestiae tenetur praesentium in voluptates quisquam corrupti quo voluptatum dolor iste?</p>
            </div>
        <div className={`mt-10 bg-gradient-to-r from-blue-900 via-indigo-600 to-blue-900 w-full rounded-md px-[2%] py-6 flex flex-col gap-10`}>
          <h1 className='text-center text-white text-6xl font-semibold'>Events</h1>
          <div className='flex justify-center'>
          <div className='bg-white w-[90%] rounded-md px-8 py-4 cursor-pointer transform transition-transform duration-200 hover:scale-105'>
            <h2 className='font-semibold text-center text-3xl mb-6'> <span className='text-blue-900 font-bold'>Decrypt Dominion</span></h2>
            <h4 className='font-bold'>Master the Art of Decryption, Reverse Engineering, and Cryptanalysis</h4>
            <p className='text-gray-700 mt-3'>Step into the realm of Decrypt Dominion, where cryptography meets ingenuity. Take on the challenge of cracking complex ciphers, decrypting hidden messages, and uncovering secrets buried in algorithms. This is your chance to dominate the world of cryptography, hash cracking, and reverse engineering. Sharpen your analytical skills, dive deep into encryption methodologies, and emerge as the ultimate codebreaker in this thrilling intellectual conquest.</p>

          </div>
          </div>
          <div className='flex justify-center'>
          <div className='bg-white w-[90%] rounded-md px-8 py-4 cursor-pointer transform transition-transform duration-200 hover:scale-105'>
            <h2 className='font-semibold text-center text-3xl mb-6'> <span className='text-blue-900 font-bold'>Probe and Pursuit</span></h2>
            <h4 className='font-bold'>Explore. Analyze. Discover.</h4>
            <p className='text-gray-700 mt-6'>Welcome to Probe and Pursuit, the ultimate test of your OSINT expertise. From reconnaissance and information gathering to advanced Google Dorking and Shodan exploration, this challenge puts your investigative skills to the test. Unearth hidden data, trace digital footprints, and analyze publicly available intelligence like never before. Whether you’re a seasoned researcher or a curious investigator, embark on a pursuit of knowledge where every probe brings you closer to the truth</p>
          </div>
          </div>
          <div className='flex justify-center'>
          <div className='bg-white w-[90%] rounded-md px-8 py-4 cursor-pointer transform transition-transform duration-200 hover:scale-105'>
            <h2 className='font-semibold text-center text-3xl mb-6'> <span className='text-blue-900 font-bold'>Cyber Craft
            </span></h2>
            <h4 className='font-bold'>Innovate. Secure. Dominate.</h4>
            <p className='text-gray-700 mt-6'>Step into the world of Cybercraft Ideathon, a dynamic platform where innovation meets cybersecurity excellence. This contest invites participants to tackle real-world challenges in the digital realm, pushing the boundaries of creativity and problem-solving. From securing networks to defending against cyber threats, participants will brainstorm, design, and present cutting-edge solutions. Whether you’re a passionate student, a tech enthusiast, or an industry professional, this ideathon is your chance to showcase your talent, collaborate with like-minded individuals, and contribute to shaping the future of cybersecurity. Innovate to secure a safer tomorrow!</p>

          </div>
          </div>
          <div className='flex justify-center'>
          <div className='bg-white w-[90%] rounded-md px-8 py-4 cursor-pointer transform transition-transform duration-200 hover:scale-105'>
            <h2 className='font-semibold text-center text-3xl mb-6'> <span className='text-blue-900 font-bold'>Decrypt Dominion</span></h2>
            <h4 className='font-bold'>Master the Art of Decryption, Reverse Engineering, and Cryptanalysis</h4>
            <p className='text-gray-700 mt-6'>Step into the realm of Decrypt Dominion, where cryptography meets ingenuity. Take on the challenge of cracking complex ciphers, decrypting hidden messages, and uncovering secrets buried in algorithms. This is your chance to dominate the world of cryptography, hash cracking, and reverse engineering. Sharpen your analytical skills, dive deep into encryption methodologies, and emerge as the ultimate codebreaker in this thrilling intellectual conquest.</p>

          </div>
          </div>
          <div className='flex justify-center'>
          <div className='bg-white w-[90%] rounded-md px-8 py-4 cursor-pointer transform transition-transform duration-200 hover:scale-105'>
            <h2 className='font-semibold text-center text-3xl mb-6'> <span className='text-blue-900 font-bold'>Decrypt Dominion</span></h2>
            <h4 className='font-bold'>Master the Art of Decryption, Reverse Engineering, and Cryptanalysis</h4>
            <p className='text-gray-700 mt-6'>Step into the realm of Decrypt Dominion, where cryptography meets ingenuity. Take on the challenge of cracking complex ciphers, decrypting hidden messages, and uncovering secrets buried in algorithms. This is your chance to dominate the world of cryptography, hash cracking, and reverse engineering. Sharpen your analytical skills, dive deep into encryption methodologies, and emerge as the ultimate codebreaker in this thrilling intellectual conquest.</p>

          </div>
          </div>
          

        </div>

    </div>

    <div className='w-full bg-gradient-to-r from-blue-900 via-indigo-600 to-pink-300 mt-20 px-[10%] py-10'>
      <h1 className='text-white text-center text-2xl lg:text-4xl font-bold'>Hosted & Sponser By</h1>
      <div className='bg-white px-5 py-4 rounded-lg mt-10 flex lg:gap-20 gap-10 items-center lg:flex-row flex-col'>
        <img  src={velogo} alt="" />
        <h1 className='font-bold text-xl lg:text-4xl'>Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology</h1>
      </div>
    </div>
    </>
  )
}

export default Home