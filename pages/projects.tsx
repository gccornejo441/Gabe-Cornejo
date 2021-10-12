import Head from 'next/head'
import Image from 'next/image'
import jobbme from '../public/images/jobbme.png'
import webWorks from '../public/images/webworks.png'
import Layout from '../components/Layout'
import IPod from '../components/IPod'
import * as React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid'
import { IWebsites } from '../types'

let websiteData: IWebsites[] = [
    {
        id: 1,
        title: "WebWorksDreams.com",
        body: "WebWorksDreams was created to assist people in creating their dream websites.",
        link: "https://www.webworksdreams.com/"
    },
    {
        id: 2,
        title: "Jobbox.me",
        body: "Jobbox was created to assist people in creating free and professional resumes.",
        link: "https://www.jobbox.me/"
    }
]
//
type UpdateWebPage = {
    id: number,
    title: string,
    body: string,
    link: string,
}


const Projects = () => {
    const [image, setImage] = React.useState(jobbme);
    let [webData, setWebDate] = React.useState<UpdateWebPage>(websiteData[1]);

    const websiteId = websiteData.find((data) => data.id);

    const handleClick = (e) => {
        let rightButton = e.target.id;
        if (rightButton === "path902-8" && image == jobbme && websiteId.id == 1) {
            setImage(webWorks)
            setWebDate(websiteData[0])
        } else {
            setImage(jobbme)
            setWebDate(websiteData[1])
        }
    }

    return (
        <div>
            <Head>
                <title>Projects | Gabe Cornejo</title>
            </Head>
            <Layout>
                <div className="flex justify-center">
                    <div className="grid grid-cols gap-24 lg:grid-cols-2 mt-5 px-10 w-full pb-12">
                        <div className="relative">
                            <div className="relative">
                                <div className="absolute left-4 right-4 md:left-8 md:right-8 top-5 md:top-10 z-10 rounded-xl pt-2 pb-1 px-2 bg-gray-800 mx-auto">
                                    {image ? <Image className="rounded-lg" src={image} height={430} width={660} alt="website screenshot" /> : <span className="text-white text-2xl">...Loading</span>}
                                </div>
                                <IPod handleClick={handleClick} />
                            </div>
                        </div>
                        {webData ? (
                            <>
                                <div className="bg-white h-64 rounded-lg">
                                    <div className="mt-8 ml-8 text-2xl text-mac-purple font-semibold">
                                        {webData.title}
                                    </div>
                                    <div className="mt-4 ml-8 text-2xl text-mac-purple font-light">
                                        <p>
                                            {webData.body}
                                        </p>
                                        <a href={webData.link} className="flex mt-8 hover:underline cursor-pointer">
                                            <span>Go To Website</span>
                                            <span>
                                                <ExternalLinkIcon className="h-8 w-8 text-max-purple" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </>
                        ) : false}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Projects;
