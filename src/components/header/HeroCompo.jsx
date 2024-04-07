import { Button } from "keep-react";


const Hero = () => {
  return (
    <div className="bg-[#F9F3EC] min-h-[75vh] py-28 md:px-0 px-6">
      <div className="max-w-screen-xl px-4 md:px-8 lg:px-14 mx-auto">
        <div className="md:flex justify-evenly ">
          <div className="relative md:mx-0 mx-auto" id="circle">
            <img
              src="/src/assets/flouffy-g2FtlFrc164-unsplash 2.png"
              className="absolute bottom-0 w-[240px]"
              alt=""
            />
          </div>
          <div className="space-y-5 md:pt-0 pt-10">
            <p className="text-[#DEAD6F]">Save 10 - 20 % off</p>
            <h1 className="md:text-6xl text-5xl text-[#41403E]">
              Best destination{" "}
              <div>
                for <span className="text-[#DEAD6F]">Your pets</span>
              </div>
            </h1>
            <Button
              color="secondary"
              className="bg-[#F9F3EC] hover:bg-[#F9F3EC] border border-[#41403E] text-[#41403E] hover:text-[#41403E]"
              size="sm"
              variant="outline"
            >
              Shop Now{" "}
              <svg
                className="ml-1 -mt-1"
                height="10"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9204 15.4204L16.5454 9.79545C16.6499 9.69106 16.7329 9.56708 16.7895 9.4306C16.8461 9.29413 16.8752 9.14782 16.8752 9.00007C16.8752 8.85232 16.8461 8.70602 16.7895 8.56954C16.7329 8.43307 16.6499 8.30909 16.5454 8.2047L10.9204 2.5797C10.8159 2.47525 10.6919 2.39239 10.5555 2.33587C10.419 2.27934 10.2727 2.25024 10.125 2.25024C9.97729 2.25024 9.83102 2.27934 9.69455 2.33587C9.55808 2.39239 9.43408 2.47525 9.32963 2.5797C9.11868 2.79065 9.00017 3.07675 9.00017 3.37507C9.00017 3.6734 9.11868 3.9595 9.32963 4.17045L13.0343 7.87507H2.25C1.95163 7.87507 1.66548 7.9936 1.4545 8.20458C1.24353 8.41556 1.125 8.70171 1.125 9.00007C1.125 9.29844 1.24353 9.58459 1.4545 9.79557C1.66548 10.0065 1.95163 10.1251 2.25 10.1251H13.0343L9.32963 13.8297C9.22479 13.9339 9.1416 14.0579 9.08483 14.1944C9.02806 14.3309 8.99884 14.4772 8.99884 14.6251C8.99884 14.7729 9.02806 14.9193 9.08483 15.0558C9.1416 15.1923 9.22479 15.3162 9.32963 15.4204C9.43401 15.525 9.55799 15.608 9.69447 15.6646C9.83095 15.7212 9.97725 15.7503 10.125 15.7503C10.2727 15.7503 10.4191 15.7212 10.5555 15.6646C10.692 15.608 10.816 15.525 10.9204 15.4204Z"
                  fill="#41403E"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;