import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Customerimg from "../Asset/Customerimg.jpg"
import Customering2 from "../Asset/Customering2.jpg"
import Customerimg3 from "../Asset/Customerimg3.jpg"
import Customerimg4 from "../Asset/Customerimg4.jpg"
import Logo from "../Asset/Logo.png"
import { Link } from 'react-router-dom'
// import Payment from '../Component/Payment'


// import Customer from './Customer'



// import { Link } from 'react-router-dom'
// import Card from '../Component/Card'
// import image from "../Asset/Bara.jpg"
// import image1 from "../Asset/Burger1.jpg"
// import image2 from "../Asset/Chilligobi.jpg"
// import image3 from "../Asset/Chole.jpg"
// import image4 from "../Asset/Chowmin.jpg"
// import image5 from "../Asset/Dahibara.jpg"
// import image6 from "../Asset/Dosa.jpg"
// import image7 from "../Asset/Fishbesara.jpg"
// import image9 from "../Asset/Idle.jpg"
// import image10 from "../Asset/Mudhimutton.jpg"
// import image11 from "../Asset/Pakhala.jpg"
// import image12 from "../Asset/Rasagola.jpg"
// import image13 from "../Asset/Upama.jpg"
// import image14 from "../Asset/Sajanasaga.jpg"

const Home = () => {
  return (
    // <div>
    //   <div><Navbar/></div>
    //   <div className='grid grid-cols-3 ml-16 gap-10 mt-24 mb-24'>
    //     <Card name="Bara" para="Bara one plate--RS 25" img={image}/>
    //     <Card name="Burger" para="One Burger rs 40" img={image1}/>
    //     <Card name="Chilligobi" para="One plate--RS 40" img={image2}/>
    //     <Card name="Chole" para="One plate--RS 80" img={image3}/>
    //     <Card name="Chowmin" para="One plate--RS 40" img={image4}/>
    //     <Card name="Dahi Bara" para="One plate--RS 40" img={image5}/>
    //     <Card name="Dosa" para="One plate--RS 40" img={image6}/>
    //     <Card name="Macha Besara" para="One plate--RS 40" img={image7}/>
    //     <Card name="Idle Sambar" para="One plate--RS 40" img={image9}/>
    //     <Card name="Mudhi Mutton" para="One plate--RS 150" img={image10}/>
    //     <Card name="Pakhala" para="One plate--RS 60" img={image11}/>
    //     <Card name="Rasagola" para="One Piece--RS 10" img={image12}/>
    //     <Card name="Upama" para="One plate--RS 40" img={image13}/>
    //     <Card name="Sajana Saga" para="One plate--RS 20" img={image14}/>
    //   </div>
    //   <div><Footer/></div>
    // </div>
    <div><Navbar />
      <div className="w-full">
        <section className="relative overflow-hidden py-20">
          <div className="relative">
            <div className="mx-auto max-w-xl lg:max-w-7xl">
              <div className="mx-auto mb-14 max-w-2xl text-center">
                <span className="mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-black">
                  OUR BLOG
                </span>
                <h1 className="text-5xl font-bold text-white">Latest news from our blog</h1>
              </div>
              <div className="my-18 -mx-4 flex flex-wrap px-4">
                <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
                  <a className="group block w-full" href="#">
                    <img
                      className="mb-5 block w-full rounded-lg ml-8"
                      src={Customerimg}
                      alt=""
                    />
                    <span className="mb-5 block text-gray-500">Jul 20, 2023</span>
                    <h4 className="mb-5 text-3xl font-semibold text-white">
                    Easy to use website. Found what I wanted quickly.
                    </h4>
                    <p className="max-w-xl text-lg text-white">
                    I recently tried out FoodDeliveryWebsite.com for ordering dinner,
                    and I must say, it exceeded my expectations in every aspect. From 
                    the seamless ordering process to the prompt delivery and delicious
                    food, my experience was nothing short of excellent.
                    </p>
                  </a>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                  <a className="group mb-8 md:flex" href="#">
                    <img
                      className="h-40 w-48 rounded-lg ml-10"
                      src={Customering2}
                      alt=""
                    />
                    <div className="my-4 pt-2 md:ml-6 md:mt-0">
                      <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                      <h4 className="text-xl font-semibold text-white">
                      I was pleasantly surprised by how quickly my order arrived. 
                      Despite the rainy weather, the delivery was right on time.
                      </h4>
                    </div>
                  </a>
                  <a className="group mb-8 md:flex" href="#">
                    <img
                      className="h-40 w-48 rounded-lg ml-10"
                      src={Customerimg3}
                      alt=""
                    />
                    <div className="my-4 pt-2 md:ml-6 md:mt-0">
                      <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                      <h4 className="text-xl font-semibold text-white">
                      I had a fantastic experience with this food delivery service.
                      The combination of delicious food, prompt delivery, and excellent
                      customer service exceeded my expectations.
                      </h4>
                    </div>
                  </a>
                  <a className="group mb-8 md:flex" href="#">
                    <img
                      className="h-40 w-48 rounded-lg ml-10"
                      src={Customerimg4}
                      alt=""
                    />
                    <div className="my-4 pt-2 md:ml-6 md:mt-0">
                      <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                      <h4 className="text-xl font-semibold text-white">
                      Placing an order was a breeze. The step-by-step checkout process 
                      made it simple to add items to my cart and proceed to paymentt.
                      </h4>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-14 text-center">
                <button
                  type="button"
                  className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:underline"
                >
                  <Link to="/register">Login Or Register yourself to order {" "}</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <hr className="my-8" />
        <section className="relative overflow-hidden bg-white py-8">
          <div className="container relative z-10 mx-auto px-4">
            <div className="-m-8 flex flex-wrap items-center justify-between">
              <div className="w-auto p-8">
                <a href="#">
                  <div className="inline-flex items-center">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <img className="h-16 w-auto" src={Logo} alt="Eat Repeat" />
                      </span>
                    </div>
                    <span className="ml-4 text-lg font-bold">Eat Repeat</span>
                  </div>
                </a>
              </div>
              <div className="w-auto p-8">
                <ul className="-m-5 flex flex-wrap items-center">
                  <li className="p-5">
                    <a className="font-medium text-white hover:text-gray-600" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="p-5">
                    <a className="font-medium text-white hover:text-gray-600" href="#">
                      Terms of Service
                    </a>
                  </li>
                  <li className="p-5">
                    <a className="font-medium text-white hover:text-gray-600" href="#">
                      Return Policy
                    </a>
                  </li>
                  <li className="p-5">
                    <a className="font-medium text-white hover:text-gray-600" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-auto p-8">
                <div className="-m-1.5 flex flex-wrap">
                  <div className="w-auto p-1.5">
                    <a href="https://www.facebook.com/">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-800">
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
                            fill="#27272A"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="w-auto p-1.5">
                    <a href="https://twitter.com/?lang=en">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-800">
                        <svg
                          width="14"
                          height="11"
                          viewBox="0 0 14 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"
                            fill="#27272A"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="w-auto p-1.5">
                    <a href="https://www.instagram.com/">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-800">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z"
                            fill="#27272A"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* <div><Customer /></div> */}
      {/* <div><Addcart/></div> */}
      {/* <div><Payment/></div> */}

      <div><Footer /></div>
    </div>

  )
}

export default Home
