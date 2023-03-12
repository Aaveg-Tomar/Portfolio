import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { SiLeetcode, SiCodechef, SiHackerrank, SiJavascript, SiTailwindcss } from 'react-icons/si';
import { DiJava, DiReact } from 'react-icons/di';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
            <div>
                <div className={darkMode ? "dark" : ""}>
                    <main className=" bg-white px-10  dark:bg-gray-800">
                        <section >
                            <nav className=" pt-10 mb-12 flex justify-between">
                                <img className=" w-13 h-12 rounded-full" src="/assests/letter-a.png" />
                                <ul className="flex items-center">
                                    <l1><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl" /></l1>
                                    <l1> <a className=" bg-gradient-to-r from-cyan-500 text-black px-4 py-2 rounded-md ml-4" href="https://drive.google.com/file/d/1YTLpblSACERDOuvV2ExaTwYCaxIgh2nm/view?usp=sharing"> Resume</a></l1>
                                </ul>
                            </nav>
                            <div className=" flex justify-center m-0 p-0  ">
                                <img src="/assests/main.svg" className=" w-80 m-0 p-0 " />
                            </div>
                            <div className=" text-center p-10 pt-2 pb-3 ">
                                <h2 className=" text-5xl text-teal-400 font-semibold">Aaveg Tomar</h2>
                                <h3 className=" py-2">Frontend Developer and Designer</h3>
                                <div className=" flex justify-center">
                                    <p className=" text-md py-3 text-gray-500 md:text-gray-500 md-x-xs ">I'm a self-taught Frontend developer and Love to work with new technologies. I'm quietly confident, naturally curious and perpetually working on improving my skills. In my spare time. I like building my own products.</p>
                                </div>
                            </div>
                            <div className=" text-4xl flex justify-center pb-5 space-x-5">
                                <a className=" hover:bg-gray-500" href="https://www.linkedin.com/in/aaveg-tomar/ " target='_a'><AiFillLinkedin /></a>
                                <a className=" hover:bg-gray-500" href="https://github.com/Aaveg-Tomar" target='_a'><AiFillGithub /></a>
                            </div>
                        </section>
                        <section>
                            <div className="lg:flex gap-10">
                                <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                                    <div className=" flex justify-center rounded-full ">
                                        <img src="/assests/logo3.webp" className=" rounded-3xl" />
                                    </div>

                                    <h3 className="text-lg font-medium pt-8   ">
                                        Programming
                                    </h3>
                                    <p className="py-2">
                                        Write Clean and Optimize Code

                                    </p>
                                    <h4 className="py-4 text-teal-600">Language I Use</h4>
                                    <div className=" flex justify-center">
                                        <div className=" text-3xl">
                                            <DiJava />
                                        </div>
                                        <p className="text-gray-800 py-1">JAVA</p>
                                    </div>

                                    <h4 className="py-4 pt-7 text-teal-600">Coding Platform</h4>
                                    <div className=" flex justify-center space-x-8">
                                        <div className=" text-3xl ">
                                            <a href="https://www.codechef.com/users/a_aveg" target='_a'><SiCodechef /></a>
                                        </div>
                                        <div className=" text-3xl ">
                                            <a href="https://leetcode.com/tomaraaveg/" target='_a'><SiLeetcode /></a>
                                        </div>
                                        <div className=" text-3xl ">
                                            <a href="https://www.hackerrank.com/tomaraaveg" target='_a'><SiHackerrank /></a>
                                        </div>
                                    </div>


                                </div>
                                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                                    <div className=" flex justify-center">
                                        <img src=" assests/logo4.png" className=" w-80" />
                                    </div>
                                    <h3 className="text-lg font-medium pt-8 pb-2 ">
                                        Development
                                    </h3>
                                    <p className="py-2">
                                        Creating elegant designs suited for your needs following core
                                        design theory.
                                    </p>
                                    <h4 className="py-4 text-teal-600">Language I use </h4>
                                    <div className=" flex justify-center">
                                        <div className=" text-3xl">
                                            <AiFillHtml5 />
                                        </div>
                                        <p className="text-gray-800 text-xl py-1">HTML</p>
                                    </div>
                                    <div className=" flex justify-center">
                                        <div className=" text-3xl pt-2">
                                            <SiJavascript />
                                        </div>
                                        <p className="text-gray-800 text-xl py-2 pl-1">JavaScript</p>
                                    </div>
                                    <h4 className="py-4 pt-8 text-teal-600">FrameWork I use </h4>
                                    <div className=" flex justify-center">
                                        <div className=" text-3xl">
                                            <DiReact />
                                        </div>
                                        <p className="text-gray-800 text-xl py-1">React JS</p>
                                    </div>
                                    <div className=" flex justify-center">
                                        <div className=" text-3xl pt-2">
                                            <SiTailwindcss />
                                        </div>
                                        <p className="text-gray-800 text-xl py-2 pl-1">Tailwindcss</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className=" flex justify-center pb-10">
                                <div className=" bg-green-700  w-11/12  lg:w-9/12 text-center rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-3 justify-center items-center py-14 px-5">
                                    <div className="text-3xl font-bold text-font p-2 text-white">Start Project</div>
                                    <div className=" text-lg lg:text-xl font-light py-8">Interested in working together ? We should queue up a chat.</div>
                                    <div>
                                        <a className=' border border-black rounded-xl p-2 hover:bg-green-800'>
                                            <Link to="/contact">Let's do this ?</Link>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className=' bg-black h-64 -mt-28 -ml-10 w-110 -mr-10'>
                                <div className=' flex justify-center pt-20'>
                                    <img className=" w-13 h-12 rounded-full" src="/assests/letter-a.png" />
                                </div>
                                <div className=' block text-center text-white pt-2'>Living , Learning & Leveling</div>
                                <div className='block text-center text-white pt-1'>up one day at a time.</div>
                                <div>
                                <div className=' flex justify-center p-2'>
                                    <a href=' mailto: tomaraaveg@gmail.com'target='_a'><img className='w-8 flex justify-center m-2' src="/assests/gmail.png"/></a>
                                    <a href=''><img className='w-8 flex justify-center m-2' src="/assests/instagram.png"/></a>
                                </div>
                            </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}
export default Home;