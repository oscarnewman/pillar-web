import { PostOrPage } from '@tryghost/content-api'
import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import BasicPage from '../../components/layout/BasicPage'
import { Ghost } from '../../api/GhostAPI'
import { useRouter } from 'next/router'
import Spinner from '../../components/ui/Spinner'
import moment from 'moment'

interface PostDetailProps {
  post: PostOrPage
}
const PostDetail: React.SFC<PostDetailProps> = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <BasicPage title="Blog | Pillar">
        <Spinner></Spinner>
      </BasicPage>
    )
  }

  return (
    <BasicPage title={post.title}>
      <div className="h-12"></div>
      <div className="max-w-5xl mx-auto">
        <div className="px-0 lg:px-24">
          {post.primary_tag && (
            <div className="text-fg-accent font-medium mb-2">
              {post.primary_tag.name}
            </div>
          )}
          <h1 className="font-sans text-4xl text-fg-primary tracking-tight leading-10 sm:text-5xl sm:leading-none md:text-6xl font-extrabold">
            {post.title}
          </h1>
          <div className="mt-4 text-fg-secondary">
            <div className="text-fg-primary">{post.primary_author.name}</div>
            <div className="flex">
              <div>{post.reading_time} min read</div>
              <div className="w-2"></div>
              <div>•</div>
              <div className="w-2"></div>
              <div>{moment(post.published_at).fromNow()}</div>
            </div>
          </div>
        </div>
        {post.feature_image && (
          <div className="relative">
            <img
              src={post.feature_image}
              className="my-20 w-full block relative"
              alt=""
            />
          </div>
        )}
        <div
          className="post-content post-full-content max-w-xl mx-auto text-xl"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </div>
      <style jsx global>{`
        .article-md {
          @apply text-lg max-w-xl mx-auto leading-relaxed text-fg-primary;
        }

        .article-md h1 {
          @apply text-2xl;
        }

        .article-md h2 {
          @apply text-2xl mb-4;
        }

        .article-md p,
        .article-md pre,
        .article-md ul,
        .article-md ol {
          @apply mb-4;
        }
      `}</style>
    </BasicPage>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await Ghost.posts.read(
    { slug: params.slug as string },
    { include: ['authors', 'tags'] },
  )

  return {
    props: { post },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let posts = await Ghost.posts.browse({ limit: 'all' })

  return {
    paths: posts.map((p) => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  }
}

export default PostDetail
