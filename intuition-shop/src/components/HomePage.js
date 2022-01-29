import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "./nav/Navbar";

export const HomePage = () => {
  const navigate = useNavigate();

  function handleCategoryClick() {
    navigate('/product');
  }

  return (
    <>
        <Navbar />
         <p>Turtles</p>

      <section class="section is-medium">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical" onClick={handleCategoryClick}>
                <article class="tile is-child notification is-primary">
                  <p class="title">Content</p>
                  <p class="subtitle">Top tile</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                  <p class="title">Middle tile</p>
                  <p class="subtitle">With an image</p>
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png"></img>
                  </figure>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-danger">
                <p class="title">Wide tile</p>
                <p class="subtitle">Aligned with the right tile</p>
                <div class="content">
                  <p>hello</p>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-success">
              <div class="content">
                <p class="title">Tall tile</p>
                <p class="subtitle">With even more content</p>
                <div class="content">
                  <p>hello</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
