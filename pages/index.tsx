import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import headShot from '../public/images/gabesHeadShot.jpg'
import Link from 'next/link'
import githublogo from '../public/images/github.svg'
import linkedinlogo from '../public/images/linkedin.svg'
import emaillogo from '../public/images/email.svg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gabe Cornejo</title>
      </Head>
      <Layout>
        <div className="text-center flex justify-center mt-12 md:mt-36">
          <div className="px-10 md:px-10 md:w-1/2">
            <Image className="rounded-full" alt="Profile Picture" src={headShot} height={180} width={180} />
            <h1 className="text-2xl text-mac-purple font-bold pb-10">Hi, I&apos;m Gabe.</h1>
            <p className="text-lg text-mac-purple font-bold mb-12">
              I&apos;m a web developer based in California.  I&apos;m currently working away at developing awesome web apps.  In my free time I like to spend time with my family and work on side projects.
            </p>
          </div>
        </div>
        <div className="text-center flex justify-center mt-12">
          <ul>
          <li className="pb-4">
              <Link href="mailto:webworksdreams@gmail.com">
                <Image
                  src={emaillogo}
                  className="w-full h-full text-mac-purple cursor-pointer"
                  alt="Email Logo"
                />
              </Link>
            </li>
            <li className="pb-4">
              <Link href="https://github.com/gccornejo441/">
                <Image
                  src={githublogo}
                  className="w-full h-full text-mac-purple cursor-pointer"
                  alt="Github Logo"
                />
              </Link>
            </li>
            <li className="pb-4">
              <Link href="https://www.linkedin.com/in/gabriel-cornejo-3a913a184/">
                <Image
                  src={linkedinlogo}
                  className="w-full h-full text-mac-purple cursor-pointer"
                  alt="Linkedin Logo"
                />
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  )
}

export default Home
