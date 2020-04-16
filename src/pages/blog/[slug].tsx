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
        <div className="px-24">
          {post.primary_tag && (
            <div className="text-purple-600 font-medium mb-2">
              {post.primary_tag.name}
            </div>
          )}
          <h1 className="font-sans text-4xl text-gray-900 tracking-tight leading-10 sm:text-5xl sm:leading-none md:text-6xl font-extrabold">
            {post.title}
          </h1>
          <div className="mt-4 text-gray-600">
            <div className="text-gray-900">{post.primary_author.name}</div>
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
          className="text-xl text-gray-900 leading-9 GLOBAL-post-article"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </div>
      <style jsx global>{`
        .GLOBAL-post-article p {
          @apply mb-8;
          @apply px-24;
        }

        .GLOBAL-post-article > * {
          @apply mb-8 block;
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
  const posts = await Ghost.posts.browse({ limit: 'all' })
  return {
    paths: posts.map((p) => ({
      params: { slug: p.slug },
    })),
    fallback: true,
  }
}

export default PostDetail
