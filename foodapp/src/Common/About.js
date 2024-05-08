import React from "react";
import Swarup from "../Asset/Swarup.jpg";
import Rakesh from "../Asset/Rakesh.jpg";
import Sandha from "../Asset/Sandha.jpg";
import Pragya from "../Asset/Pragya.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";

const About = () => {
  return (
    <section class="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div>
          <Navbar />
        </div>
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p class="mt-4 max-w-xl text-base leading-relaxed text-gray-200 lg:mx-auto">
          These FAQs and answers provide helpful information to website visitors
          </p>
        </div>
        <div class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          <div>
            <h2 class="text-xl font-semibold text-white">
              How do I place an order?
            </h2>
            <p class="mt-6 text-sm leading-6 tracking-wide text-gray-200">
            To place an order, simply browse our menu, select the items you'd like
            to order, and proceed to checkout. You can choose delivery or pickup 
            options and provide your contact and payment information to complete the order.
            </p>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-white">
            What payment methods do you accept?
            </h2>
            <p class="mt-6 text-sm leading-6 tracking-wide text-gray-200">
            We accept various payment methods, including credit/debit cards, PayPal,
            and mobile payment options. You can select your preferred payment method
            during the checkout process.
            </p>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-white">
            How long does delivery take?
            </h2>
            <p class="mt-6 text-sm leading-6 tracking-wide text-gray-200">
            Delivery times may vary depending on your location and current order volume.
            Typically, delivery takes between 30 to 60 minutes. You can track your order
            status in real-time using our order tracking feature.
            </p>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-white">
            Do you have any vegetarian or vegan options?
            </h2>
            <p class="mt-6 text-sm leading-6 tracking-wide text-gray-200">
            Yes, we offer a variety of vegetarian and vegan options on our menu. Look for
            the vegetarian or vegan labels next to menu items, or filter your search to 
            view only vegetarian or vegan dishes.
            </p>
          </div>
        </div>
        <p class="mt-10 text-center text-white">
          Can&#x27;t find what you&#x27;re looking for?{" "}
          <a
            href="#"
            title=""
            class="black font-bold hover:underline text-cyan-400"
          >
            <Link to="/contact">Contact Us </Link>
          </a>
        </p>
      </div>
      <section className="px-2 py-10 md:px-0">
        <div className="mx-auto max-w-4xl">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="relative h-48 w-48 flex-shrink-0">
              <img
                className="relative h-48 w-48 rounded-full object-cover"
                src={Swarup}
                alt=""
              />
            </div>
            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-white">
                  “Swarup is a seasoned Full Stack Developer with over 2 years
                  of experience in developing scalable web applications. He
                  specializes in front-end and back-end development and has a
                  passion for creating intuitive user interfaces that enhance
                  user experience.”
                </p>
              </blockquote>
              <a href="https://www.linkedin.com/in/swarup-dash-sde/">
                <p className="mt-7 text-lg font-semibold text-white">
                  Swarup Dash
                </p>
              </a>
              <p className="mt-1 text-base text-gray-600">
                Full Stack Developer at Eat Repeat
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-2 py-10 md:px-0">
        <div className="mx-auto max-w-4xl">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="relative h-48 w-48 flex-shrink-0">
              <img
                className="relative h-48 w-48 rounded-full object-cover"
                src={Rakesh}
                alt=""
              />
            </div>
            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-white">
                  “With over 8 years of experience in software development,
                  Michael specializes in building robust and scalable web
                  applications. He's skilled in server-side logic, database
                  architecture, and API development. Michael is dedicated to
                  delivering high-quality code and solving complex technical
                  challenges to drive business success.”
                </p>
              </blockquote>
              <a href="https://www.linkedin.com/in/rakesh-kumar-muduli-532091264/">
                <p className="mt-7 text-lg font-semibold text-white">
                  Rakesh Ku. Muduli
                </p>
              </a>
              <p className="mt-1 text-base text-gray-600">
                Backend Developer at Eat Repeat
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-2 py-10 md:px-0">
        <div className="mx-auto max-w-4xl">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="relative h-48 w-48 flex-shrink-0">
              <img
                className="relative h-48 w-48 rounded-full object-cover"
                src={Sandha}
                alt=""
              />
            </div>
            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-white">
                  “Aswasini is a dedicated content writer with a passion for
                  crafting engaging and informative content. With years of
                  experience in writing for various industries, she specializes
                  in creating compelling copy that resonates with audiences.”
                </p>
              </blockquote>
              <a href="https://www.linkedin.com/in/aswasani-nayak-138654268/">
                <p className="mt-7 text-lg font-semibold text-white">
                  Aswasani Nayak
                </p>
              </a>
              <p className="mt-1 text-base text-gray-600">
                Content writer at Eat Repeat
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-2 py-10 md:px-0">
        <div className="mx-auto max-w-4xl">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="relative h-48 w-48 flex-shrink-0">
              <img
                className="relative h-48 w-48 rounded-full object-cover"
                src={Pragya}
                alt=""
              />
            </div>
            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-white">
                  “Pragyan is a versatile content writer with a knack for
                  creating captivating and impactful content. With a background
                  in journalism and creative writing, he excels in storytelling
                  and crafting persuasive narratives.”
                </p>
              </blockquote>
              <a href="https://www.linkedin.com/in/pragyan-parimita-sahoo-644b74276/">
                <p className="mt-7 text-lg font-semibold text-white">
                  Pragya Paramita Sahoo
                </p>
              </a>
              <p className="mt-1 text-base text-gray-600">
                Content writer at Eat Repeat
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
