import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Sidebar from "./Sidebar"; // import new sidebar

export default function Index() {
  return (
    <>
      <Sidebar />
      <section id="home" style={{ height: "100vh" }}><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}
