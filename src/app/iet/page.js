"use client"
import {useState} from "react";
import About from "@/components/about";
import SIG from "@/components/sig";
import Link from 'next/link'
import Footer from "@/components/footer";
import Hero from "@/components/hero";


export default function Home() {
    const [data, setData] = useState([]);
    const fetch = async () => {
        const response = await fetch("https://tetragram.codered.cloud/api/v2/pages/?type=events.EventsPage&fields=*");
        const result = await response.json()
        console.log(result.items)
        setData(result.items)
    }
    fetch()
    return (
        <>
             <Link aria-current="page" href={"/blogs"} passHref></Link>
             <Link aria-current="team" href={"/team"} passHref></Link>
            <Hero />
            <About />
            <SIG />
            <Footer />
        </>
    )
}
