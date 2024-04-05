"use client";
import { Navbar } from "keep-react";
import { CaretDown } from "phosphor-react";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="border px-0">
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
                      className="h-5 w-5"
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
        <Navbar.Container className="lg:flex hidden list-none justify-between gap-6 items-center">
          <div className="py-6">
            <p className="text-[#908F8D] text-sm text-right">Phone</p>
            <p className="text-[#41403E] text-sm">+980-34984089</p>
          </div>
          <div className="py-6">
            <p className="text-[#908F8D] text-sm text-right">Email</p>
            <p className="text-[#41403E] text-sm">waggy@gmail.com</p>
          </div>
        </Navbar.Container>

        <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link
              linkName="Home"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link
              linkName="Projects"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link
              linkName="Blogs"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link linkName="News" className="!py-0" />
            <Navbar.Link linkName="Resources" className="!py-0" />
          </Navbar.Container>
        </Navbar.Collapse>
      </Navbar.Container>
    </Navbar>
  );
};
