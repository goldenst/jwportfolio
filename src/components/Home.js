import React, { Component } from "react";
import image from "../assets/pooh.jpg";

export default class Home extends Component {
  render() {
    return (
      <main>
        <img
          src={image}
          alt="Phoo Bear"
          className="absolute object-cover h-full w-full"
        />
        <section className="relitive flex justify-center min-h-screen pt-8 ">
          <h1 className="text-6xl text-black font-bold leading-none ">
            Hello Im Jeff,
          </h1>
        </section>
      </main>
    );
  }
}
