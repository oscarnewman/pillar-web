import React from 'react'

const Article = ({ children }) => {
  return (
    <div className="article">
      {children}
      <style jsx global>{`
        .article h2 {
          @apply font-display font-black text-5xl;
          @apply mb-12;
        }

        .article h3 {
          @apply font-bold text-xl mb-6 mt-12;
        }

        .article .wrap {
          @apply leading-loose text-lg;
        }

        .article p,
        .article .wrap > ol > li {
          @apply mb-6;
        }

        .article a {
          background: linear-gradient(
            0deg,
            theme(colors.purple.50) 50%,
            transparent 50%
          );
          @apply text-purple-900;
        }

        .article ul {
          list-style-type: disc;
          padding-left: 2em;
        }

        .article ol[type='a'] {
          list-style: lower-alpha;
        }

        .article ol[type='i'] {
          list-style: lower-roman;
        }

        .article ol > li > ol {
          padding-left: 1em;
        }

        .article ol > li > ol > li {
          @apply my-2;
        }
      `}</style>
    </div>
  )
}

export default Article
