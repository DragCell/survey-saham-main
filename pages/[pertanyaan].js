import React from 'react'
import styles from '../styles/Pertanyaan.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Line } from 'rc-progress';
import { PERTANYAAN } from '../data/pertanyaan';
import { HOST } from '../data/host';
import LoadingScreen from '../components/LoadingScreen';
import Image from 'next/image'
import useWindowSize from '../hooks/useWindowSize';

function Pertanyaan({ pertanyaan }) {
    const router = useRouter()
    const pKeys = PERTANYAAN.map(p => p.key)
    const { width, height } = useWindowSize();
    const ALPHABET = ['a', 'b', 'c', 'd']
    const [pilihan, setPilihan] = useState("")
    const [loading, setLoading] = useState(false)
    const [jawaban, setJawaban] = useState({
        knowledge: '',
        opinion: '',
        legality: '',
        stonks: '',
        interest: ''
    })

    const handleChange = e => {
        setPilihan(e.target.id)
    }

    const handleNext = () => {
        if (pilihan === "") {
            alert("Silahkan isi jawaban terlebih dahulu!")
            return;
        }
        setJawaban(prevJwb => ({ ...prevJwb, [pertanyaan]: pilihan }))
        if (pKeys.indexOf(pertanyaan) === 4) {
            setLoading(true)
            handleSubmit()
        } else {
            setPilihan("")
            router.push(`/${pKeys[pKeys.indexOf(pertanyaan) + 1]}`)
        }
    }


    const handleSubmit = async () => {
        // DATA RESPONDEN
        let responden = JSON.parse(localStorage.getItem('dataDiri'))

        // UPLOAD RESPONDEN
        await fetch(`${HOST.internet}api/Responden/create.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(responden),
        }).then(res => res.json()).then(data => {
            // UPLOAD JAWABAN
            fetch(`${HOST.internet}api/Jawaban/upload-jawaban.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    idResponden: data.idResponden,
                    jawaban: [{ ...jawaban, [pertanyaan]: pilihan }]
                })
            }).then(() => pilihan === "d" ? router.push('/thankyou') : router.push('/library'))
        })

        // DATA JAWABAN


    }

    const handleBack = () => {
        setJawaban("")
        pKeys.indexOf(pertanyaan) === 0 ? router.push('/') :
            router.push(`/${pKeys[pKeys.indexOf(pertanyaan) - 1]}`)
    }

    return (
        <>
            {
                !loading ? (
                    <div className={styles.container}>
                        <div className={styles.navBar}>
                            {/* <Image src="/image/mandiri.png" height="130px" width="130px" /> */}
                            <Image src="/image/mandiri.png" height="150%" width="150vh" />
                            <div className={styles.titleNav}>DragCell.Corp</div>
                            <Image src="/image/carmel.png" height="100%" width="160vh" />
                        </div>
                        <div className={styles.gambarKiri}>
                            <div className={styles.gambar1}>
                                <Image src="/image/kiri.png" height={height / 100 * 79} width={width / 100 * 36} />
                            </div>
                        </div>
                        <div className={styles.gambarKanan}>
                            <div className={styles.gambar2}>
                                <Image src="/image/kanan.png" height={height / 100 * 79} width={width / 100 * 36} />
                            </div>
                        </div>
                        <form className={styles.card}>
                            <div className={styles.title}>
                                {
                                    PERTANYAAN.filter(p => p.key === pertanyaan)[0].pertanyaan
                                }
                            </div>
                            <Line percent={`${(pKeys.indexOf(pertanyaan) + 1) * 20}`} strokeWidth=".8" strokeColor="#89c45c" />
                            <div className={styles.jenisData}>
                                {
                                    PERTANYAAN.filter(p => p.key === pertanyaan)[0].pilihan.map((quest, i) => (
                                        <div key={i} className={styles.input}>
                                            {/* <input hidden onChange={handleChange} id={`${ALPHABET[i]}`} type='radio' name='know' /> */}
                                            <label onClick={handleChange} id={`${ALPHABET[i]}`} htmlFor={`${ALPHABET[i]}`}>{pilihan === `${ALPHABET[i]}` ? "✅ " : "⬜ "}{quest}</label>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.buttons}>
                                <div onClick={handleBack} className={styles.button}>Back</div>
                                <div onClick={handleNext} className={styles.button}>Next</div>
                            </div>
                        </form>
                        <div className={styles.bottom}>
                        </div>
                    </div >
                ) : (
                    <LoadingScreen />
                )
            }
        </>
    )
}

export default Pertanyaan


export async function getStaticPaths() {
    const paths = PERTANYAAN.map(p => (
        { params: { pertanyaan: p.key } }
    ))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context
    return {
        props: {
            pertanyaan: params.pertanyaan
        }
    }
}