import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";
import { slugifyAll, slugifyStr } from "./slugify";

const getPostsByTag = (posts: CollectionEntry<"blog">[], tag: string) => {

  const slugifiedTag = slugifyStr(tag);

  const filteredPosts = posts.filter(
    post => {
      const tags = post.data.tags as string[];
      return slugifyAll(tags).includes(slugifiedTag);
    }
  );

  const sortedPosts = getSortedPosts(filteredPosts);

  return sortedPosts;
};


export default getPostsByTag;
