"use client";
import { Navbar } from "keep-react";
export const NavbarComponent = () => {

  return (
    <Navbar
      fluid={true}
      className="border max-w-screen-xl px-4 md:px-8 lg:px-14 mx-auto"
    >
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Brand>
          <img src="/src/assets/logo.png" alt="logo" className="w-[60%]" />
        </Navbar.Brand>

        <Navbar.Container className="flex items-center gap-6">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-4"
          >
            {/* Input feild */}
            <div className="lg:w-[400px] xl:w-[600px] mx-auto">
              <div>
                <div className="group relative">
                  <input
                    type="text"
                    id="example9"
                    className="block w-full rounded-sm border focus:outline-none border-gray-300 px-4 pr-8 py-2 "
                    placeholder="Search for more than 10,000 products"
                  />

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Navbar.Container>

          <Navbar.Container className="flex gap-1">
            <Navbar.Toggle className="block" />
          </Navbar.Container>
        </Navbar.Container>

        {/* Nav Info */}
        <Navbar.Container className="lg:flex hidden list-none justify-between gap-8 items-center ">
          <div className="py-6">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2934 1.77492C11.4572 0.872149 10.2893 0.375 9.00025 0.375C7.70431 0.375 6.53255 0.869141 5.70025 1.76633C4.85892 2.6734 4.449 3.90617 4.54525 5.23734C4.73603 7.86359 6.7345 10 9.00025 10C11.266 10 13.261 7.86402 13.4548 5.2382C13.5524 3.91906 13.1399 2.68887 12.2934 1.77492ZM16.5627 19.625H1.43775C1.23977 19.6276 1.04372 19.586 0.86384 19.5033C0.683963 19.4205 0.52479 19.2987 0.397902 19.1468C0.118605 18.8129 0.006027 18.357 0.0893864 17.8959C0.452043 15.8841 1.58384 14.1942 3.36275 13.0078C4.94314 11.9546 6.94505 11.375 9.00025 11.375C11.0554 11.375 13.0574 11.9551 14.6377 13.0078C16.4167 14.1938 17.5484 15.8837 17.9111 17.8955C17.9945 18.3566 17.8819 18.8125 17.6026 19.1463C17.4757 19.2984 17.3166 19.4203 17.1367 19.5031C16.9568 19.5859 16.7608 19.6275 16.5627 19.625Z"
                fill="#41403E"
              />
            </svg>
          </div>
          <div className="py-6">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00048 17.25C8.72449 17.2497 8.45499 17.1663 8.22704 17.0107C4.85013 14.7183 3.3879 13.1465 2.58138 12.1638C0.862626 10.0691 0.039774 7.91848 0.0629771 5.58957C0.0900475 2.92078 2.23118 0.75 4.83595 0.75C6.73001 0.75 8.04185 1.81691 8.80583 2.70551C8.83003 2.73337 8.85993 2.75572 8.89351 2.77103C8.9271 2.78634 8.96357 2.79427 9.00048 2.79427C9.03739 2.79427 9.07386 2.78634 9.10744 2.77103C9.14103 2.75572 9.17093 2.73337 9.19513 2.70551C9.95911 1.81605 11.2709 0.75 13.165 0.75C15.7698 0.75 17.9109 2.92078 17.938 5.59C17.9612 7.91934 17.1375 10.0699 15.4196 12.1642C14.6131 13.1469 13.1508 14.7187 9.77392 17.0111C9.54592 17.1665 9.27642 17.2498 9.00048 17.25Z"
                fill="#41403E"
              />
            </svg>
          </div>
          <div className="py-6">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5625 19.25C8.32189 19.25 8.9375 18.6344 8.9375 17.875C8.9375 17.1156 8.32189 16.5 7.5625 16.5C6.80311 16.5 6.1875 17.1156 6.1875 17.875C6.1875 18.6344 6.80311 19.25 7.5625 19.25Z"
                fill="#41403E"
              />
              <path
                d="M17.1875 19.25C17.9469 19.25 18.5625 18.6344 18.5625 17.875C18.5625 17.1156 17.9469 16.5 17.1875 16.5C16.4281 16.5 15.8125 17.1156 15.8125 17.875C15.8125 18.6344 16.4281 19.25 17.1875 19.25Z"
                fill="#41403E"
              />
              <path
                d="M19.6281 5.18977C19.5315 5.07162 19.4099 4.97647 19.2719 4.91121C19.134 4.84596 18.9832 4.81224 18.8306 4.8125H5.75309L5.48969 3.31805C5.4616 3.15886 5.37832 3.01466 5.25448 2.91078C5.13063 2.80689 4.97415 2.74997 4.8125 2.75H2.0625C1.88016 2.75 1.7053 2.82243 1.57636 2.95136C1.44743 3.0803 1.375 3.25516 1.375 3.4375C1.375 3.61984 1.44743 3.7947 1.57636 3.92364C1.7053 4.05257 1.88016 4.125 2.0625 4.125H4.23586L6.19781 15.2445C6.2259 15.4036 6.30918 15.5478 6.43302 15.6517C6.55687 15.7556 6.71335 15.8125 6.875 15.8125H17.875C18.0573 15.8125 18.2322 15.7401 18.3611 15.6111C18.4901 15.4822 18.5625 15.3073 18.5625 15.125C18.5625 14.9427 18.4901 14.7678 18.3611 14.6389C18.2322 14.5099 18.0573 14.4375 17.875 14.4375H7.45164L7.2093 13.0625H17.5931C17.8315 13.0622 18.0625 12.9795 18.247 12.8285C18.4315 12.6774 18.5581 12.4673 18.6055 12.2336L19.843 6.04613C19.8728 5.89639 19.869 5.74189 19.8318 5.59379C19.7947 5.4457 19.7251 5.3077 19.6281 5.18977Z"
                fill="#41403E"
              />
            </svg>
          </div>
        </Navbar.Container>

        <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-[#F9F3EC] p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2 drop-shadow-sm"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Profile/Login" className="!py-0 " />
            <Navbar.Link linkName="Wishlist" className="!py-0 " />
            <Navbar.Link linkName="All" className="!py-0 " />
            <Navbar.Link linkName="Dog" className="!py-0 " />
            <Navbar.Link linkName="Cat" className="!py-0 " />
            <Navbar.Link linkName="Bird" className="!py-0 " />
          </Navbar.Container>
        </Navbar.Collapse>
      </Navbar.Container>
    </Navbar>
  );
};
