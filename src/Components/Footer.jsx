import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-[#B1B1B1] pt-10 pb-4 sm:pb-7 sm:pt-12">
      <div className="container mx-auto px-6 sm:px-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="sm:font-bold font-extrabold mb-3 sm:mb-2">Questions? Contact us.</h5>
            <ul>
              <li>
                <a href="#" className="underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Account
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Company</h5>
            <ul>
              <li>
                <a href="#" className="underline">
                  Media Center
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Ways to Watch
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Legal</h5>
            <ul>
              <li>
                <a href="#" className="underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Additional Links</h5>
            <ul>
              <li>
                <a href="#" className="underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Speed Test
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Legal Notices
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Only on Netflix
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-10 mb-7">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            data-icon="LanguagesSmall"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
              fill="currentColor"
            ></path>
          </svg>
          <select
            name=""
            id=""
            className="px-2 py-1 w-28 text-lg font-semibold bg-[#0F0F0F] text-white outline-none rounded-md border-[1px] border-[#5E5E5E]"
          >
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="mt-10 text-center text-sm font-semibold">
          &copy; {new Date().getFullYear()} NETFLIX || All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
