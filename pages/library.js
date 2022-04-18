import React from 'react'
import Image from 'next/image'
import styles from '../styles/Lib.module.css'
import Head from 'next/head'
// import ReactPlayer from 'react-player'
import ReactPlayer from 'react-player'

function Library() {
    return (
        // <div className={styles.noBar}>
        //     <div className={styles.nBar}>
        <div className={styles.containerB}>
            <Head>
                <title>Survey</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.containerA}>
                {/* <div className={styles.gambar}> */}
                <div className={styles.gambarKiri}>
                    <div className={styles.gambar1}>
                        <Image src="/image/1.png" height="100%" width="100vh" />
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="1920.000000pt" height="1080.000000pt" viewBox="0 0 1920.000000 1080.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                            </g>
                        </svg>
                    </div>
                    <div className={styles.gambar3}>
                        <Image src="/image/3.png" height="590%" width="1100vh" />
                    </div>
                    <div className={styles.gambar5}>
                        <Image src="/image/5.png" height="590%" width="1100vh" />
                    </div>
                </div>
                <div className={styles.gambarKanan}>
                    <div className={styles.gambar2}>
                        <Image src="/image/2.png" height="590%" width="1100vh" />
                    </div>
                    <div className={styles.gambar4}>
                        <Image src="/image/4.png" height="590%" width="1100vh" />
                    </div>
                    <div className={styles.gambar6}>
                        <Image src="/image/6.png" height="590%" width="1100vh" />
                    </div>
                </div>
                {/* </div> */}
                <div className={styles.navBar}>
                    <Image src="/image/mandiri.png" height="150%" width="150vh" />
                    <div className={styles.titleNav}>DragCell.Corp</div>
                    <Image src="/image/carmel.png" height="100%" width="160vh" />
                </div>
                <div className={styles.tengah}>
                    <div className={styles.tengahAtas}>Terima Kasih</div> <br />
                    <div className={styles.tengahBawah}>telah mengisi survey ini!</div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.isiKiri}>
                        ________________________________
                    </div>
                    <div className={styles.isi}>
                        Belajar lebih lanjut dengan kami< br />
                        dengan video berikut
                        <br />
                        <Image src="/image/panah.png" height="50%" width="50vh" />
                    </div>
                    <div className={styles.isiKanan}>
                        ________________________________

                    </div>
                </div>
            </div>
            <br></br>
            {/* sekte 1 */}
            <div className={styles.sekteVideo}>Pengenalan Pasar Modal</div>
            <ReactPlayer width={200} height={200} controls={true} url={'https://www.youtube.com/watch?v=x31tDT-4fQw'} />
            <div className={styles.videoRow}>


            </div >
            <div className={styles.videoRow}>


            </div >
            <div className={styles.garisBiru}>
                <Image src="/image/garisBiru.png" height="150%" width="1500vh" />
            </div>
            {/* sekte 2 */}
            <div className={styles.sekteVideo}>Apa itu Saham?</div>
            <div className={styles.videoRow}>

            </div >
            <div className={styles.sekteVideo}>Pengenalan Analisa Teknikal & Fundamental</div>
            <div className={styles.sekteVideo}>Analisa Fundamental</div>
            <div className={styles.sekteVideo}>Analisa Teknikal</div>
        </div >
    )
}

export default Library