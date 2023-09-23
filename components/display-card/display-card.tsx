import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { DisplayCardModel, Buttons } from '@santech/core/models/display-card.interface';
import style from './display-card.module.css';
import Tooltip from '@mui/material/Tooltip';

export default function DisplayCard({data}: {data: DisplayCardModel}) {
  return (
    <Card elevation={data.cardProperties?.elevation} className={`${data.cardProperties?.border?.borderWidth} ${data.cardProperties?.border?.borderColor} ${data.cardProperties?.border?.borderStyle}`}>
      {data.imageUrl && <CardMedia
        component="img"
        sx={{ height: `${data.cardProperties?.height}px` }}
        image={data.imageUrl}
        title={data.title}
      />}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data.subTitle}
        </Typography>
        {data?.description?.map((item: string, key: number) => {
            return (<div key={key}><Tooltip title={item} arrow><Typography variant="body2" className={`${data.lineClamp ? 'content-summary' : ''}`}>{item}</Typography></Tooltip></div>)
        })}
      </CardContent>
      <CardActions className='justify-end'>
        {data.buttons && data.buttons.map((button: Buttons, index: number) => {
          return (<Button key={index} variant={button.variant} size={button.size} className={`${button.backgroundColor} hover:underline-offset-2 hover:underline`}>
              {
                button.variant === 'text' ? <Link href={button.linkUrl} className={style.textColor}>
                {button.name}
                </Link> : <span> {button.name}</span>
              }
          </Button>)

        })}
      </CardActions>
    </Card>
  );
}