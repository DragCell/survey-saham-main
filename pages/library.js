import React from 'react'
import Image from 'next/image'
import styles from '../styles/Lib.module.css'
import Head from 'next/head'
import useWindowDimensions from '../hooks/useWindowDimensions';
import ReactPlayer from 'react-player'
import ReactLoading from 'react-loading';
import { useState } from 'react'

function Library() {
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)

    const VIDEOS = [
        {
            title: 'Pengenalan pasar modal',
            url: 'https://www.youtube.com/watch?v=a-IkdCFGUeU',
            keterangan: 'pasar modal mirip dengan pasar tradisional, tempat untuk berjual beli, kecuali yang dijualbelikan di pasar modal adalah surat-surat berharga seperti saham, surat utang, dan reksadana.',
        },
        {
            title: 'Apa itu saham?',
            url: 'https://www.youtube.com/watch?v=UCcC8fH0uJU',
            keterangan: 'saham adalah kepemilikan suatu bagian dari perusahaan.  Dari sana kita bisa mendapat keuntungan juga.',
        },
        {
            title: 'Pengenalan Teknikal dan fundamental',
            url: 'https://www.youtube.com/watch?v=Od66LhFOx-M',
            keterangan: 'Perbedaan jenis Analisa saham dan keuntungannya masing-masing',
        },
        {
            title: 'Pengenalan Teknikal dan fundamental',
            url: 'https://www.youtube.com/watch?v=Od66LhFOx-M',
            keterangan: 'Perbedaan jenis Analisa saham dan keuntungannya masing-masing',
        },
        {
            title: 'Pengenalan Teknikal dan fundamental',
            url: 'https://www.youtube.com/watch?v=Od66LhFOx-M',
            keterangan: 'Perbedaan jenis Analisa saham dan keuntungannya masing-masing',
        },

    ]
    let { width, height } = useWindowDimensions()

    React.useEffect(() => {
        setUsername(JSON.parse(localStorage.getItem('username')))
    }, [])
    return (
        <div className={styles.containerB}
        // style={{ overflow: 'hidden' }}
        >
            <Head>
                <title>Survey</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.containerA}>
                <div className={styles.gambarKiri}>
                    <div className={styles.gambar1}>
                        <Image src="/image/1.svg" height="590%" width="1000vh" />
                    </div>
                    <div className={styles.gambar3}>
                        <Image src="/image/3.svg" height="590%" width="1000vh" />
                    </div>
                    <div className={styles.gambar5}>
                        <Image src="/image/5.svg" height="590%" width="1000vh" />
                    </div>
                </div>
                <div className={styles.gambarKanan}>
                    <div className={styles.gambar2}>
                        <Image src="/image/2.svg" height="700%" width="800vh" />
                    </div>
                    <div className={styles.gambar4}>
                        <Image src="/image/4.svg" height="700%" width="800vh" />
                    </div>
                    <div className={styles.gambar6}>
                        <Image src="/image/6.svg" height="700%" width="800vh" />
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
                    {/* <div className={styles.tengahAtas}>{username !== undefined && username}</div> <br /> */}
                    <div className={styles.tengahBawah}>telah mengisi survey ini!</div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.isiKiri}>
                        ________________________________
                    </div>
                    <div className={styles.isi}>
                        Belajar lebih lanjut dengan kami< br />
                        melalui video berikut
                        <br />
                        <Image src="/image/panah.png" height="50%" width="50vh" />
                    </div>
                    <div className={styles.isiKanan}>
                        ________________________________

                    </div>
                </div>
            </div>
            <div className={styles.konten}>
                {
                    VIDEOS.map((v, i) => (
                        <div key={i} className={styles.vids}>
                            <div className={styles.title}>{v.title}</div>
                            {
                                loading ? <ReactLoading type={'bubbles'} color={'#0785e6'} height={'20%'} width={'20%'} /> : (
                                    <ReactPlayer
                                        url={v.url}
                                        controls={true}
                                        onReady={() => setLoading(false)}
                                        height={(width < 600) ? 320 : 500}
                                        width={(width - 70)}
                                    />
                                )
                            }
                            <div className={styles.keterangan}>{v.keterangan}</div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Library