import React from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { HOST } from '../data/host'

function Index() {
    const router = useRouter()
    const [nama, setNama] = useState("")
    const [male, setMale] = useState("")
    const [female, setFemale] = useState("")
    const [dataLengkap, setDataLengkap] = useState(false)
    const [dataLogin, setDataLogin] = useState(false)
    const [birth, setBirth] = useState("")
    const [login, setLogin] = useState(false)

    React.useEffect(() => {
        // CHECK IF DATA EMPTY
        if (nama !== "" && female !== "" && birth !== "") {
            setDataLengkap(true)
        }
        if (nama !== "") {
            setDataLogin(true)
        }
    }, [nama, male, female, dataLengkap || dataLogin, birth])

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

    const handleSubmit = () => {
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
        localStorage.setItem("login", true)

        // router lanjut
        router.push('/knowledge')
    }

    const handleLogin = () => {
        if (!dataLogin) {
            alert('Masukkan nama anda sebelumnya')
            return
        }
        fetch(`${HOST.internet}api/Responden/getUser.php`).then(res => res.json()).then(data => {
            let lowerUser = data.map(d => d.toLowerCase())
            if (lowerUser.includes(nama.toLocaleLowerCase())) {
                localStorage.setItem("login", true)
                localStorage.setItem("username", JSON.stringify(nama))
                router.push('/library')
            } else {
                alert('username tidak terdaftar!')
            }
        })
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Survey</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.navBar}>
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
                    {login ? (
                        // IF LOGIN TRUE
                        <>
                            <div className={`${styles.title}`}>
                                Welcome Back
                            </div>
                            <form autoComplete='off' className={styles.rightContent}>
                                <div>
                                    <div className={styles.jenisData}>
                                        <label htmlFor='nama'>Nama</label>
                                        <input onChange={handleChange} className={styles.input} type='text' id="nama" placeholder='Masukkan nama anda' />
                                    </div>
                                </div>
                                <div
                                    onClick={handleLogin}
                                    className={styles.button}
                                    style={{ background: dataLogin ? '#fbb72a' : 'lightGrey' }}
                                >
                                    Login
                                </div>
                                <div className={styles.login} style={{
                                    marginTop: 25,
                                    justifyContent: 'center',
                                    width: '100%',
                                    display: 'flex'
                                }}>
                                    Belum Pernah Mengisi?
                                    <div onClick={() => setLogin(false)} className={styles.loginButton} style={{ color: 'cyan', marginLeft: 5, cursor: 'pointer' }}>Kembali</div>
                                </div>
                            </form>
                        </>
                    ) : (
                        // IF LOGIN FALSE
                        <>
                            <div className={`${styles.title}`}>
                                INPUT DATA DIRI
                            </div>
                            <form autoComplete='off' className={styles.rightContent}>
                                <div autoComplete='off' className={styles.input}>
                                    <div className={styles.jenisData}>
                                        <label htmlFor='nama'>Nama</label>
                                        <input onChange={handleChange} className={styles.input} type='text' id="nama" placeholder='Masukkan nama anda' />
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
                                <div
                                    onClick={handleSubmit}
                                    className={styles.button}
                                    style={{ background: dataLengkap ? '#fbb72a' : 'lightGrey' }}
                                >
                                    Next
                                </div>
                                <div className={styles.login} style={{
                                    marginTop: 25,
                                    justifyContent: 'center',
                                    width: '100%',
                                    display: 'flex'
                                }}>
                                    Sudah pernah mengisi?
                                    <div onClick={() => setLogin(true)} className={styles.loginButton} style={{ color: 'cyan', marginLeft: 5, cursor: 'pointer' }}>Login disini</div>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div >
            <div className={styles.bottom}>
            </div>
        </div >
    )
}

export default Index