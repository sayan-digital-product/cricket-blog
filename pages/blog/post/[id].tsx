import Layout from '@santech/components/layout/layout';
import { getAllPostIds, getPostData } from '@santech/core/posts/posts';
import { PostModel } from '@santech/core/models/post.interface';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import SEO from '@santech/core/seo/seo';

export async function getStaticProps({ params }:{params: any}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }: {postData: PostModel}) {
    return (
      <><SEO seoData={postData}/><Layout>
        <>
          <Card elevation={0} className='minimum-height'>
            <CardContent className='m-4'>
              <Typography gutterBottom variant="h5" component="div">
                {postData.title}
              </Typography>
              <Typography gutterBottom variant='h6' component="div">
                {postData.date}
              </Typography>
              <section color="text.secondary">
                <article className="prose lg:prose-lg ul:prose-ul li:prose-li img:prose-img table:prose-table tr:prose-tr th:prose-th td:prose-td max-w-none" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              </section>
            </CardContent>
          </Card>
        </>
      </Layout></>
    );
}