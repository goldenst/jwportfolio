import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function Post() {



  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-grey-300 min-h-screen pt-12">
      <section className="container mx-auto">
        <h1 className=" text-5xl flex justify-center cursive">
          Blog Post Page
        </h1>
        <h2 className="text-lg text-grey-500 flex justify-center mb-12">
          Welcome to the Blog post page.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-30 relitive rounded shadow leading-snug bg-white border-l-8 border-blue-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="rounded-r relitive object-cover"
                    />
                    <span className="block relitive h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-blue-800 text-lg font-bold px-3 py-4 bg-blue-200 bg-opasity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
