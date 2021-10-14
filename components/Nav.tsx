import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from "next/router";
import { useState } from 'react';

function Nav() {
    const router = useRouter(); //Router for color on active
    const [active, setActive] = useState(false) //navbar mobile useState
    return (
        <>
        <Head>
            <title>SojasySojitos</title>
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'/>
        </Head>
        <nav  className={active ? "mactive nav" : "nav"}>
            <div className="logo" onClick={()=> setActive(false)}>
               <Link href="/">
                   <span><span className="blue">Sojas</span>y<span className="pink">Sojitos</span></span>
                </Link>
            </div>
            <ul>
                <li className={router.pathname == "/" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/">Inicio</Link>
                </li>
                <li className={router.pathname == "/About" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/About" >Catálogo</Link>
                </li> 
                <li className={router.pathname == "/Contact" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/Contact">Contáctanos</Link>
                </li>
                <li className={router.pathname == "/Buy" ? "active" : ""} onClick={()=> setActive(false)}>
                    <Link href="/Buy">Cómo comprar</Link>
                </li>
                <li id='closebtn'><i className='bx bx-x-circle' onClick={()=> setActive(!active)}></i>
                </li>
            </ul> 
            <div className="theme-changer">
            <i className='bx bx-menu'  onClick={()=> setActive(!active)}></i>
            </div>
        </nav>
        </>
    )
}

export default Nav
