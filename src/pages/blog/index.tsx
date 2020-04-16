import { PostOrPage, PostsOrPages } from '@tryghost/content-api'
import { GetStaticProps } from 'next'
import React from 'react'
import { Ghost } from '../../api/GhostAPI'
import BasicPage from '../../components/layout/BasicPage'
import Link from 'next/link'

interface IndexProps {
  posts: PostsOrPages
}

const PostPreview: React.SFC<{ post: PostOrPage }> = ({ post }) => (
  <Link href={`/blog/${post.slug}`}>
    <a>
      <div>
        <p className="text-purple-500 text-sm font-medium">
          {post.primary_tag.name}
        </p>
        <h2 className="font-sans text-3xl">{post.title}</h2>
        <p className="text-gray-600 text-lg">{post.excerpt}</p>
        {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      </div>
    </a>
  </Link>
)

const Index: React.SFC<IndexProps> = ({ posts }) => {
  return (
    <BasicPage title="Thoughts | Pillar">
      <div className="max-w-xl mx-auto">
        {posts.map((post) => (
          <>
            <PostPreview post={post} />
            <div className="h-12"></div>
          </>
        ))}
      </div>
    </BasicPage>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await Ghost.posts.browse({
    limit: 'all',
    include: ['authors', 'tags'],
  })

  return {
    props: { posts },
  }
}

export default Index
