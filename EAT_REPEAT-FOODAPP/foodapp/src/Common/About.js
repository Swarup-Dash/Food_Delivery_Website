import React from 'react'
import Swarup from '../Asset/Swarup.jpg'
import Rakesh from '../Asset/Rakesh.jpg'
import Sandha from '../Asset/Sandha.jpg'
import Pragya from '../Asset/Pragya.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../Component/Navbar'



const About = () => {
  return (
    <section class="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div><Navbar/></div>
    <div>
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p class="mt-4 max-w-xl text-base leading-relaxed text-gray-200 lg:mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
          assumenda
        </p>
      </div>
      <div class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
        <div>
          <h2 class="text-xl font-semibold text-white">How do I get started?</h2>
          <p class="mt-6 text-sm leading-6 tracking-wide text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore
            ratione deleniti?
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-white">How do I get started?</h2>
          <p class="mt-6 text-sm leading-6 tracking-wide text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore
            ratione deleniti?
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-white">How do I get started?</h2>
          <p class="mt-6 text-sm leading-6 tracking-wide text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore
            ratione deleniti?
          </p>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-white">How do I get started?</h2>
          <p class="mt-6 text-sm leading-6 tracking-wide text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore
            ratione deleniti?
          </p>
        </div>
      </div>
      <p class="mt-10 text-center text-white">
        Can&#x27;t find what you&#x27;re looking for?{" "}
        <a href="#" title="" class="black font-bold hover:underline text-cyan-400">
        <Link to="/contact">Contact Us {" "}</Link>
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
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                  aliquam repellat laborum minima tempore deserunt explicabo placeat!
                  Fugit, molestias nesciunt.”
                </p>
              </blockquote>
              <p className="mt-7 text-lg font-semibold text-white">Swarup Dash</p>
              <p className="mt-1 text-base text-gray-600">Full Stack Developer at Eat Repeat</p>
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
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                  aliquam repellat laborum minima tempore deserunt explicabo placeat!
                  Fugit, molestias nesciunt.”
                </p>
              </blockquote>
              <p className="mt-7 text-lg font-semibold text-white">Rakesh Ku. Muduli</p>
              <p className="mt-1 text-base text-gray-600">Backend Developer at Eat Repeat</p>
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
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                  aliquam repellat laborum minima tempore deserunt explicabo placeat!
                  Fugit, molestias nesciunt.”
                </p>
              </blockquote>
              <p className="mt-7 text-lg font-semibold text-white">Aswasini Nayak</p>
              <p className="mt-1 text-base text-gray-600">Content writer at Eat Repeat</p>
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
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                  aliquam repellat laborum minima tempore deserunt explicabo placeat!
                  Fugit, molestias nesciunt.”
                </p>
              </blockquote>
              <p className="mt-7 text-lg font-semibold text-white">Pragya Paramita Sahoo</p>
              <p className="mt-1 text-base text-gray-600">Content writer at Eat Repeat</p>
            </div>
          </div>
        </div>
      </section>
  </section>
  
  )
}

export default About
