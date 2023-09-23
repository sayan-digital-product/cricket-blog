import Image from 'next/image'
import { Inter } from 'next/font/google'

import style from '@santech/styles/home.module.css'
import Typography from '@mui/material/Typography'

const inter = Inter({ subsets: ['latin'] })

export default function AboutMe() {
  return (
    <section className={`grid grid-cols-12 ${style.profileContainer} ${style.homeBackground}`}>
      {/* <Paper elevation={0} className={`grid grid-cols-12 generic-border ${style.profileContainer} m-8`}> */}
        <div className="col-span-6">
          <Image alt='profile-image' src={'/images/1.jpg'} className={style.fullImage} width={500} height={500}></Image>
        </div>
        <div className="col-span-6">
          <div className={`secondary-text ${style.tagLineStyle}`}>
            <Typography variant="h2">
              <span className={style.nameFont}>Sayan Banerjee.</span>
            </Typography>
            <Typography variant='h6'>
              <p><span className={style.tagFont}>I develop applications for Web and Mobile.</span></p><br />
            </Typography>
              <p><span>I specialize in architecting and developing intuitive interfaces for complex systems. </span>
                <span>Through my work, I am creating digital experiences that are as delightful and effective.</span>
              </p>
          </div>
        </div>
      {/* </Paper> */}
    </section>
  )
}
