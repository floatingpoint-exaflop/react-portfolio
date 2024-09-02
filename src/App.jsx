import { useState } from "react";
import AboutMe from "./components/AboutMe";
import "./App.css";

export default function App() {
  return (
    <>
      <AboutMe name="Tim Scallon" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio
        fugiat aliquam repellat voluptas ea, fugit adipisci vitae repellendus
        expedita temporibus cumque mollitia? Architecto libero adipisci expedita
        molestias repudiandae quam.
      </p>
      <AboutMe name="Tim Scallon" />
      <p>Nice one broh</p>
    </>
  );
}
