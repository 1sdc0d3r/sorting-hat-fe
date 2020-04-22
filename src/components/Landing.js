
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../redux/actions/getQuestions";
import { getAnswers } from "../redux/actions/getAnswers";
import { getPoints } from "../redux/actions/getPoints";
import { getTracks } from "../redux/actions/getTracks";
import { Link, Redirect } from "react-router-dom";
import ParticleTesting from "./ParticleTesting";
import About from "./About";


import Header from './Header';

function Landing(props) {
  const { getQuestions, getAnswers, getTracks, getPoints } = props;


  useEffect(() => {
    getQuestions();
    getAnswers();
    getTracks();
    getPoints();
  }, []);
  if (props.location.state) {
    return <Redirect to="/quiz" />;
  }
  return (
    <div className="max-h-screen ">
      <Header />
      <ParticleTesting />
      {/* // md:justify-center */}
      {/* Make left aligned */}
      {/*Make Hamburger aligned with button edge and line on mobile */}
      {/*Make line height smaller on Landing for header*/}
      <div className="flex flex-row justify-center items-center">
        <section className="flex flex-col justify-between lg:justify-center items-center p-4 sm:m-auto lg:m-auto lg:w-1/3 xl:w-1/4 sm:w-1/3 h-screen lg:h-auto">
          <div>
            <h2 className="z-10 pt-2 pb-2 mb-1 text-4xl font-bold border-b-4 border-purple-200 lg:text-5xl fira sans mt-56">
              Discover the Tech Career for You
          </h2>
            <p className="protoGray pt-6 text:xl lg:text-2xl fira-sans">
              Take our 5 minute survey to discover which tech field would be right
              for you. Discover the opportunity at your fingertips.
          </p>
          </div>
          <div className="flex pt-10 w-full mb-4 md:mt-0 lg:mt-0">
            <Link
              to="/quiz"
              className="rounded-lg z-0 lg:z-10 w-full px-20 py-2 self-end text-center lg:auto text-white bg-primary border border-primary pointer-events-auto fira-sans hover:bg-purple-700"
            >
              Start Quiz
            </Link>
          </div>
        </section>
      </div>
      {/* <section className="bg-white w-full xl:hidden">
        <About />
      </section> */}
    </div>
  );
}

export default connect(null, {
  getQuestions,
  getAnswers,
  getTracks,
  getPoints
})(Landing);
