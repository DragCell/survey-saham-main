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
    const [birth, setBirth] = useState("")

    const handleChange = e => {
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

    const handleSubmit = () => {
        router.push('/library')
    }

    const handleBack = () => {
        router.push('/')
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
                <div className={styles.titleNav}>Survey Saham</div>
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
                    <div className={styles.rightContent}>
                        <form autoComplete='off' >
                            <div className={styles.jenisData}>
                                <label style={{
                                    color: "#fbb72a",
                                    fontSize: "large",
                                }} htmlFor='nama'>Nama</label>
                                <input onChange={handleChange} className={styles.input} type='text' id="nama" placeholder='Username' />
                            </div>
                        </form>
                        <br />
                        <div className={styles.tempatButton}>
                            <div className={styles.button} onClick={handleBack}>
                                Back
                            </div>
                            <div
                                onClick={handleSubmit}
                                className={styles.button}
                            >
                                Submit
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className={styles.bottom}>
            </div>
        </div >
    )
}

export default Index