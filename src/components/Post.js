import React, { useState, useEffect } from "react";
import sanityClient from "@sanity/client";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
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
    <main>
      <section>
        <h1>Blog</h1>
        <h2>hh</h2>
        <div>
          <article>
            <span>
              <img />
              <span>
                <h3></h3>
              </span>
            </span>
          </article>
        </div>
      </section>
    </main>
  );
}
