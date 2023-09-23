import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { PostcardModel } from './post-card.interface';
import style from './post-card.module.css';

export default function PostCard({data}: {data: PostcardModel}) {
  return (
    <Card elevation={0} className='border border-solid border-pegasus-100'>
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image={data.imageUrl}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data.subTitle}
        </Typography>
        {data?.description?.map((item: string, key: number) => {
            return (<div key={key}><Typography variant="body2">{item}</Typography></div>)
        })}
      </CardContent>
      <CardActions className='justify-end'>
        <Button variant="text" size="small" className='bg-pineapple-50 hover:bg-gremlin-200'>
          {data.linkUrl && <Link href={data.linkUrl} className={style.textColor}>
            Read more
          </Link>}
        </Button>
      </CardActions>
    </Card>
  );
}