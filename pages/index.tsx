
import { Inter } from 'next/font/google'

import { homeData, newsByte, latestByte, topStories, toolsTechnology } from '@santech/core/config/home.config';
import style from '@santech/styles/home.module.css'
import DisplayCard from '@santech/components/display-card/display-card';
import { DisplayCardModel } from '@santech/core/models/display-card.interface';
import * as React from 'react';

import { records } from '@santech/core/config/post-card.config'
import Paper from '@mui/material/Paper';
import ResponsiveCarousel from '@santech/components/carousel/carousel';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <section>
               <section className='m-4 minimum-height'>
                    <Paper elevation={3} sx={{height: '55vh', marginBottom: 5}} className={style.headSection}>
                        <ResponsiveCarousel />
                    </Paper>
                    <section className={`grid grid-cols-3 gap-4 ${style.containerSection}`}>
                          {records.map((item: DisplayCardModel, index: number) => {
                              return <DisplayCard data={item} key={index} />
                          })}
                    </section >
                </section>
        </section>
    </>
  )
}
