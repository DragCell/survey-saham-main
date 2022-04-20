import React from 'react'
import styles from '../../styles/Thankyou.module.css'
import useWindowSize from '../../hooks/useWindowSize';
import Image from 'next/image'

function Thankyou() {
    const { width, height } = useWindowSize();

    const [dataDiri, setDataDiri] = React.useState("")
    React.useEffect(() => {
        if (typeof window !== undefined) {
            setDataDiri(JSON.parse(localStorage.getItem('dataDiri')))
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                {/* <Image src="/image/mandiri.png" height="130px" width="130px" /> */}
                <Image src="/image/mandiri.png" height="150%" width="150vh" />
                <div className={styles.titleNav}>DragCell.Corp</div>
                <Image src="/image/carmel.png" height="100%" width="160vh" />
            </div>
            <div className={styles.gambarKiri}>
                <div className={styles.gambar1}>
                    {/* <Image src="/image/pohonKiri.png" height={height / 100 * 79} width={width / 100 * 36} /> */}
                    <Image src="/image/pohonKiri.svg" height={height / 100 * 79} width={width / 100 * 36} />
                </div>
            </div>
            <div className={styles.gambarKanan}>
                <div className={styles.gambar2}>
                    <Image src="/image/pohonKanan.svg" height={height / 100 * 79} width={width / 100 * 36} />
                </div>
            </div>
            <div className={styles.card}>
                Terimakasih Banyak Kepada<br /><br />
                {dataDiri.gender === "male" ? "SAUDARA " : "SAUDARI "}
                <u>{dataDiri.nama}</u><br /><br />
                Atas waktu dan partisipasi anda
            </div>
            <div className={styles.bottom}>
            </div>
        </div>
    )
}

export default Thankyou