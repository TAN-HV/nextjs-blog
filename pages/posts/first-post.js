import Link from 'next/link'
import Head from 'next/head'
import Button from '@/components/button'
export default function FisrtPost() {
    return (
        <>
            <Head>
                <title>Fisrt Post in Head title</title>
            </Head>
            <h1>Fisrt Post</h1>
            <h2>
                <Link href='/' >
                    <a>Bach to home</a>
                </Link>
            </h2>
            <h1>Import Button</h1>
            <Button />
        </>
    )
}