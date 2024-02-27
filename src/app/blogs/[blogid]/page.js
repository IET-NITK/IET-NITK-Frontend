import BlogId from "@/components/blog/blogDetail";

export default function BlogDetail({ params }){
  return(
    <BlogId params={params}/>
  )
}

export async function generateStaticPaths() {
  const posts = await fetch('https://tetragram.codered.cloud/api/v2/pages/?type=blog.BlogPage&fields=*').then((res) => res.json())
   return posts.items.map((post) => ({
    blogid: post.blog_slug,
  }))
}
