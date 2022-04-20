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
    const [dataDiri, setDataDiri] = React.useState("")
    React.useEffect(() => {
        if (typeof window !== undefined) {
            setDataDiri(JSON.parse(localStorage.getItem('dataDiri')))
        }
    }, [])

    const VIDEOS1 = [
        {
            title: 'Pengenalan pasar modal',
            url: 'https://www.youtube.com/watch?v=a-IkdCFGUeU',
            keterangan: 'Penjelasan dasar mengenai pasar modal',
        },

        {
            url: 'https://www.youtube.com/watch?v=D9VivZqW2UA',
            keterangan: 'Tujuan untuk berinvestasi di pasar modal',
        },

        {
            url: 'https://www.youtube.com/watch?v=Hbd-mWQ5XEY',
            keterangan: 'Berbagai macam instrument investasi dalam pasar modal',
        },
    ]
    const VIDEOS2 = [

        {
            title: 'Apa itu saham?',
            url: 'https://www.youtube.com/watch?v=UCcC8fH0uJU',
            keterangan: 'Penjelasan dasar mengenai saham',
        },

        {
            url: 'https://www.youtube.com/watch?v=OnqfohKNlSU',
            keterangan: 'Pertanyaan yang umumnya ditanya saat masuk dalam dunia saham bagian 1',
        },

        {
            url: 'https://www.youtube.com/watch?v=eIAWMtPQBGc',
            keterangan: 'Pertanyaan yang umumnya ditanya saat masuk dalam dunia saham bagian 2',
        },

        {
            url: 'https://www.youtube.com/watch?v=CLyRqZTCwss',
            keterangan: 'Pertanyaan yang umumnya ditanya saat masuk dalam dunia saham bagian 3',
        },

    ]

    const VIDEOS3 = [

        {
            title: 'Pengenalan Teknikal dan fundamental',
            url: 'https://www.youtube.com/watch?v=Od66LhFOx-M',
            keterangan: 'Perbedaan jenis Analisa saham dan keuntungannya masing-masing',
        },

    ]

    const VIDEOS4 = [

        {
            title: 'Analisa teknikal',
            url: 'https://www.youtube.com/watch?v=6vnua9agqW4',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 1',
        },

        {
            url: 'https://www.youtube.com/watch?v=OON4JOKHi7M',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 2',
        },

        {
            url: 'https://www.youtube.com/watch?v=5hf80HzTAGg',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 3',
        },

        {
            url: 'https://www.youtube.com/watch?v=2Zwtj6KB8rU',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 4',
        },

        {
            url: 'https://www.youtube.com/watch?v=XmpVHRcJj14',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 5',
        },

        {
            url: 'https://www.youtube.com/watch?v=PspIVmrIhPo',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 6',
        },

        {
            url: 'https://www.youtube.com/watch?v=pM5mn1L1uFs',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 7',
        },

        {
            url: 'https://www.youtube.com/watch?v=vv5EWBzfpSo',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 8',
        },

        {
            url: 'https://www.youtube.com/watch?v=slI3Fdd5Hlo',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 9',
        },

        {
            url: 'https://www.youtube.com/watch?v=ekdXfHI5zO0',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 10',
        },

        {
            url: 'https://www.youtube.com/watch?v=mEs_Zxi9KBA',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 11',
        },

        {
            url: 'https://www.youtube.com/watch?v=cnKLQkShXKo&list=PLDiA-wJDk6u9hW--Fzmd7pUVol8E2j8_9&index=12',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 12',
        },

        {
            url: 'https://www.youtube.com/watch?v=AypePfdQUJs&list=PLDiA-wJDk6u9hW--Fzmd7pUVol8E2j8_9&index=13',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 13',
        },

        {
            url: 'https://www.youtube.com/watch?v=S0mXDL2LV5M&list=PLDiA-wJDk6u9hW--Fzmd7pUVol8E2j8_9&index=14',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 14',
        },
        {
            url: 'https://www.youtube.com/watch?v=UB6CdNmvsdY&list=PLDiA-wJDk6u9hW--Fzmd7pUVol8E2j8_9&index=15',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 15',
        },
        {
            url: 'https://www.youtube.com/watch?v=sQFAYni9hBM&list=PLDiA-wJDk6u9hW--Fzmd7pUVol8E2j8_9&index=16',
            keterangan: 'Pengenalan Analisa teknikal oleh komunitas panensaham bagian 16',
        },


    ]

    const VIDEOS5 = [

        {
            title: 'Analisa fundamental',
            url: 'https://www.youtube.com/watch?v=37srQCmd01g&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 1',
        },

        {
            url: 'https://www.youtube.com/watch?v=T95b4sZ0LO8&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=2',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 2',
        },
        {
            url: 'https://www.youtube.com/watch?v=TlX-0aGjimM&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=3',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 3',
        },
        {
            url: 'https://www.youtube.com/watch?v=DnN0Jy_Md_w&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=4',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 4',
        },
        {
            url: 'https://www.youtube.com/watch?v=Kfuv_6KX09Q&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=5',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 5',
        },
        {
            url: 'https://www.youtube.com/watch?v=H9En9XyEVkc&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=6',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 6',
        },
        {
            url: 'https://www.youtube.com/watch?v=L_lzqLoxzmM&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=7',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 7',
        },
        {
            url: 'https://www.youtube.com/watch?v=ii52urowqJ8&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=8',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 8',
        },
        {
            url: 'https://www.youtube.com/watch?v=FZErvpUjUs8&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=9',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 9',
        },
        {
            url: 'https://www.youtube.com/watch?v=xde8t43FH_E&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=10',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 10',
        },
        {
            url: 'https://www.youtube.com/watch?v=Rc9FL02XC7Y&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=11',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 11',
        },
        {
            url: 'https://www.youtube.com/watch?v=ikd5PJ3XpTA&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=12',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 12',
        },
        {
            url: 'https://www.youtube.com/watch?v=vmk36O5NHmo&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=13',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 13',
        },
        {
            url: 'https://www.youtube.com/watch?v=lKbSfDMHRek&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=14',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 14',
        },
        {
            url: 'https://www.youtube.com/watch?v=2bBH9taeHHs&list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2&index=15',
            keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 15',
        },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 16',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 17',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 18',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 19',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 20',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 21',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 22',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 23',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 24',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 25',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 26',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 27',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 28',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 29',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 30',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 31',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 32',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 33',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 34',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 35',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 36',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 37',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 38',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 39',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 40',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 41',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 42',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 43',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 44',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 45',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 46',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 47',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 48',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 49',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 50',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 51',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 52',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 53',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 54',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 55',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 56',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 57',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 58',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 59',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 60',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 61',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 62',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 63',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 64',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 65',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 66',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 67',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 68',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 69',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 70',
        // },
        // {
        //     url: 'https://www.youtube.com/playlist?list=PLDiA-wJDk6u_tf866YkwOBNSRPvQwxi_2',
        //     keterangan: 'Pengenalan Analisa fundamental oleh komunitas panensaham bagian 71',
        // },
    ]
    let { width, height } = useWindowDimensions()

    React.useEffect(() => {
        if (typeof window !== undefined) {
            setUsername(localStorage.getItem('username'))
        }
    }, [])
    return (
        <div className={styles.containerB} style={{ overflow: 'hidden' }}>
            <Head>
                <title>Survey</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.containerA}>
                <div className={styles.gambarKiri}>
                    <div className={styles.gambar1}>
                        <Image src="/image/1.png" height="590%" width="1000vh" />
                    </div>
                    <div className={styles.gambar3}>
                        <Image src="/image/3.png" height="590%" width="1000vh" />
                    </div>
                    <div className={styles.gambar5}>
                        <Image src="/image/5.png" height="590%" width="1000vh" />
                    </div>
                </div>
                <div className={styles.gambarKanan}>
                    <div className={styles.gambar2}>
                        <Image src="/image/2.png" height="700%" width="750vh" />
                    </div>
                    <div className={styles.gambar4}>
                        <Image src="/image/4.png" height="700%" width="750vh" />
                    </div>
                    <div className={styles.gambar6}>
                        <Image src="/image/6.png" height="700%" width="750vh" />
                    </div>
                </div>
                {/* </div> */}
                <div className={styles.navBar}>
                    <Image src="/image/mandiri.png" height="150%" width="150vh" />
                    <div className={styles.titleNav}>DragCell.Corp</div>
                    <Image src="/image/carmel.png" height="100%" width="160vh" />
                </div>
                <div className={styles.tengah}>
                    <div className={styles.tengahAtas}>Terima Kasih</div>
                    <div className={styles.tengahAtas}>{dataDiri.gender === "male" ? "Bro " : "Sis "}
                        <u>{dataDiri.nama}</u><br /></div>
                    <div className={styles.tengahBawah}>telah mengisi survey ini!</div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.isiKiri}>
                        ____________
                    </div>
                    <div className={styles.isi}>
                        Yok, Belajar pelan-pelan dengan kami< br />
                        melalui video berikut
                        <br />
                        <Image src="/image/panah.png" height="50%" width="50vh" />
                    </div>
                    <div className={styles.isiKanan}>
                        ____________

                    </div>
                </div>
                <div className={styles.containerC}>
                    <div className={styles.konten}>
                        {
                            VIDEOS1.map((v, i) => (
                                // <div key={i} className={styles.title}>{v.title}
                                //     <div className={styles.vids}></div>

                                <div key={i} className={styles.vids}>
                                    <div className={styles.title}>{v.title}</div>
                                    {
                                        loading ? <ReactLoading type={'bubbles'} color={'#0785e6'} height={'20%'} width={'20%'} /> : (
                                            <ReactPlayer
                                                url={v.url}
                                                controls={true}
                                                onReady={() => setLoading(false)}
                                                height={(width < 600) ? 320 : 300}
                                                width={(width < 600) ? width - 70 : width / 3.7}
                                            />
                                        )
                                    }
                                    <div className={styles.keterangan}>{v.keterangan}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.konten}>
                        {
                            VIDEOS2.map((v, i) => (
                                // <div key={i} className={styles.title}>{v.title}
                                //     <div className={styles.vids}></div>

                                <div key={i} className={styles.vids}>
                                    <div className={styles.title}>{v.title}</div>
                                    {
                                        loading ? <ReactLoading type={'bubbles'} color={'#0785e6'} height={'20%'} width={'20%'} /> : (
                                            <ReactPlayer
                                                url={v.url}
                                                controls={true}
                                                onReady={() => setLoading(false)}
                                                height={(width < 600) ? 320 : 300}
                                                width={(width < 600) ? width - 70 : width / 3.7}
                                            />
                                        )
                                    }
                                    <div className={styles.keterangan}>{v.keterangan}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.konten}>
                        {
                            VIDEOS3.map((v, i) => (
                                // <div key={i} className={styles.title}>{v.title}
                                //     <div className={styles.vids}></div>

                                <div key={i} className={styles.vids}>
                                    <div className={styles.title}>{v.title}</div>
                                    {
                                        loading ? <ReactLoading type={'bubbles'} color={'#0785e6'} height={'20%'} width={'20%'} /> : (
                                            <ReactPlayer
                                                url={v.url}
                                                controls={true}
                                                onReady={() => setLoading(false)}
                                                height={(width < 600) ? 320 : 300}
                                                width={(width < 600) ? width - 70 : width / 3.7}
                                            />
                                        )
                                    }
                                    <div className={styles.keterangan}>{v.keterangan}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.konten}>
                        {
                            VIDEOS4.map((v, i) => (
                                // <div key={i} className={styles.title}>{v.title}
                                //     <div className={styles.vids}></div>

                                <div key={i} className={styles.vids}>
                                    <div className={styles.title}>{v.title}</div>
                                    {
                                        loading ? <ReactLoading type={'bubbles'} color={'#0785e6'} height={'20%'} width={'20%'} /> : (
                                            <ReactPlayer
                                                url={v.url}
                                                controls={true}
                                                onReady={() => setLoading(false)}
                                                height={(width < 600) ? 320 : 300}
                                                width={(width < 600) ? width - 70 : width / 3.7}
                                            />
                                        )
                                    }
                                    <div className={styles.keterangan}>{v.keterangan}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.konten}>
                        {
                            VIDEOS5.map((v, i) => (
                                // <div key={i} className={styles.title}>{v.title}
                                //     <div className={styles.vids}></div>

                                <div key={i} className={styles.vids}>
                                    <div className={styles.title}>{v.title}</div>
                                    {
                                        loading ? <ReactLoading type={'bubbles'} color={'#0785e6'} height={'20%'} width={'20%'} /> : (
                                            <ReactPlayer
                                                url={v.url}
                                                controls={true}
                                                onReady={() => setLoading(false)}
                                                height={(width < 600) ? 320 : 300}
                                                width={(width < 600) ? width - 70 : width / 3.7}
                                            />
                                        )
                                    }
                                    <div className={styles.keterangan}>{v.keterangan}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Library