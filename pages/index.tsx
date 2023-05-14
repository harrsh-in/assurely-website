import Head from 'next/head';
import React, { Fragment } from 'react';
import GroupPhoto from '../public/GroupPhoto.svg';
import Image from 'next/image';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Assurely</title>
            </Head>

            <div className="flex gap-10 w-full flex-col md:flex-row mt-20 md:mt-0">
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                    <p className="text-7xl font-light uppercase text-center">
                        Coming soon
                    </p>

                    <p className="text-2xl font-extralight font-sans tracking-widest text-center w-2/3">
                        We will be celebrating the launch of our new site very
                        soon!
                    </p>
                </div>

                <Image
                    src={GroupPhoto}
                    alt="Group Photo"
                    quality={100}
                    width={600}
                    priority
                />
            </div>
        </Fragment>
    );
};

export default Home;
