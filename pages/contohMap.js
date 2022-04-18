import React from 'react'
import Image from 'next/image'
import styles from '../styles/Lib.module.css'

function contohMap() {
    const Hari = ['senin', 'selasa', 'rabu']
    const Hira = ['kamis', 'jumat', 'buras']
    return (
        <div>{
            Hari.map(h => (
                <div className={styles.mainCard}>
                    <div className={styles.cards}>
                        <a className={styles.profileButton}> embed video?
                            <div className={styles.card}>
                                <div className={styles.content}>
                                    <div className={styles.img}>
                                        <Image src="/image/mandiri.png" height="150%" width="150vh" />
                                    </div>
                                    <div className={styles.details}>
                                        <div className={styles.name}>{h}</div>
                                        <div className={styles.job}>a</div>
                                        <div className={styles.job}>a</div>
                                        <div className={styles.job}>T a</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div >
                </div>
            ))
        }</div>
    )
}

export default contohMap