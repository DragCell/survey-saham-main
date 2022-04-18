import React from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'

function Index() {
    const router = useRouter()
    const [nama, setNama] = useState("")
    const [male, setMale] = useState("")
    const [female, setFemale] = useState("")
    const [dataLengkap, setDataLengkap] = useState(false)
    const [birth, setBirth] = useState("")

    React.useEffect(() => {
        // CHECK IF DATA EMPTY
        if (nama !== "" && female !== "" && birth !== "") {
            setDataLengkap(true)
        }
    }, [nama, male, female, dataLengkap, birth])

    const handleChange = e => {
        // SET VALUE
        if (e.target.id === "nama") {
            setNama(e.target.value)
        } else if (e.target.id === "male") {
            setMale(e.target.value)
            setFemale('off')
        } else if (e.target.id === "female") {
            setFemale(e.target.value)
            setMale('off')
        } else if (e.target.id === "birth") {
            setBirth(e.target.value)
        }
    }

    const handleLogin = () => {
        router.push('/login')
    }

    const handleStart = () => {
        // CHECK IF DATA EMPTY
        if (!dataLengkap) {
            alert('Lengkapi data diri anda!')
            return
        }

        const dataDiri = {
            nama,
            gender: male === "off" ? 'female' : 'male',
            birth,
        }

        // data local storgage
        localStorage.setItem("dataDiri", JSON.stringify(dataDiri))

        // router lanjut
        router.push('/knowledge')
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Survey</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.navBar}>
                {/* <Image src="/image/mandiri.png" height="130px" width="130px" /> */}
                <Image src="/image/mandiri.png" height="150%" width="150vh" />
                <div className={styles.titleNav}>DragCell.Corp</div>
                <Image src="/image/carmel.png" height="100%" width="160vh" />
            </div>
            <div className={styles.left}>
                <div className={styles.gmbr}>
                    <Image src="/image/index2.svg"
                        height="400px"
                        width="400px"
                    />
                </div>
                <div className={styles.animatedImage}>
                    <Image
                        src="/image/floatsnobg.png"
                        height="500px"
                        width="500px"
                    />
                </div>
            </div >
            <div className={styles.right}>
                <div className={styles.rightContainer}>
                    <div className={`${styles.title}`}>
                        DATA DIRI
                    </div>
                    <form autoComplete='off' className={styles.rightContent}>
                        <div autoComplete='off' className={styles.input}>
                            <div className={styles.jenisData}>
                                <label htmlFor='nama'>Nama</label>
                                <input onChange={handleChange} className={styles.input} type='text' id="nama" placeholder='Masukkan nama lengkap' />
                            </div>
                            <div className={styles.jenisData}>
                                <div>Gender</div>
                                <div>
                                    <input onChange={handleChange} type='radio' id='male' name='gender' />
                                    <label htmlFor='male'>Laki-laki</label>
                                </div>
                                <div>
                                    <input onChange={handleChange} type='radio' id='female' name='gender' />
                                    <label htmlFor='female'>Perempuan</label>
                                </div>
                            </div>
                            <div>
                                <div>Tanggal Lahir</div>
                                <input className={styles.input} style={{ border: 'none' }} onChange={handleChange} type='date' id="birth" placeholder='Nama anda' />
                            </div>
                        </div>
                        <div className={styles.tempatButton}>
                            <div
                                onClick={handleLogin}
                                className={styles.button}
                            >
                                Login
                            </div>
                            <div
                                onClick={handleStart}
                                className={styles.button}
                                style={{ background: dataLengkap ? '#fbb72a' : 'lightGrey' }}
                            >
                                Start
                            </div>
                        </div>
                    </form>
                </div>
            </div >
            <div className={styles.bottom}>
            </div>
        </div >
    )
}

export default Index