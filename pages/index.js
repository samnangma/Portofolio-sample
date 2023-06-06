"use client";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
// import Nang from "../public/Nang.png"
import deved from "../public/dev-ed-wave.png";
import html from "../public/html.png";
import css from "../public/css.png";
import java from "../public/java.png";
import JavaScript from "../public/JavaScript.png";
import sql from "../public/sql.png";
import next from "../public/next.png";
import Tailwind from "../public/Tailwind.png";
import TypeScript from "../public/TypeScript.png";
import React from "../public/React.png";
import Solidity from "../public/Solidity.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl">Developer</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-blue-500 text- to-blue-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-blue-900 font-medium dark:text-blue-300 md:text-6xl">
              Ma Samnang
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let&apos get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-70 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-2 dark:text-white ">Introduction</h3>
            <p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-200">
              Hello there! My name is [Your Name], and I am a skilled programmer
              and web developer. I have a passion for technology and have
              dedicated my education and career to mastering a variety of
              programming languages and tools.
            </p>
          </div>
        </section>

        <section>
          <div>
            <h5 className="text-2xl py-2 dark:text-white ">Skills</h5>
            <h1 className="text-4xl py-2 leading-8 text-gray-800 dark:text-gray-200 ">
              What Can I do ?
            </h1>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={html} width={100} height={150} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">HTML</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={css} width={100} height={150} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">CSS</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={Tailwind} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Tailwind</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={java} width={90} height={160} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Java</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={sql} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Postgres</h3>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={next} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Next.js</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={JavaScript} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">JavaScript</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={TypeScript} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">TypeScript</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={Solidity} width={190} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Solidity</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={React} width={120} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">React</h3>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&aposve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
