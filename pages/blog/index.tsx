import * as React from 'react';

import { records } from '@santech/core/config/post-card.config'
import { DisplayCardModel } from '@santech/core/models/display-card.interface'
import style from './blog.module.css';
import Paper from '@mui/material/Paper';
import ResponsiveCarousel from '@santech/components/carousel/carousel';
import DisplayCard from '@santech/components/display-card/display-card';

export default function BlogSlides() {

    return(
        <>
            <section className='m-4 minimum-height'>
                    <Paper elevation={3} sx={{height: '35vh'}} className={style.headSection}>
                        <ResponsiveCarousel />
                    </Paper>
                <section className={`grid grid-cols-3 gap-4 ${style.containerSection}`}>
                    {records.map((item: DisplayCardModel, index: number) => {
                        return <DisplayCard data={item} key={index} />
                    })}
                </section >
            </section>
        </>
    )
}