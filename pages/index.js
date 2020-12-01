import Head from 'next/head'
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Button variant='contained' color='primary'>Hello World</Button>
    </div>
  )
}
