"use client";

import linkedin from "../../static/img/linkedin.png";
import github from "../../static/img/github.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="mx-auto lg:max-w-screen-2xl py-5 mx-10 text-black-400">
      <div class="lg:flex lg:items-center lg:justify-between">
        {/* LEFT SIDE - NAME, ROLE, LOCATION */}

        {/* NAME */}
        <div className="lg:flex tracking-tight">
          <div className="items-center pr-10 font-bold leading-7 text-3xl">
            <span className="text-black">{"{ "}</span>
            <span className="text-indigo-400">Portfolio Website</span>
            <span className="text-black">{" }"}</span>
          </div>

          {/* LOCATION */}
          <div class="mt-2 flex items-center text-sm">
            <svg
              class="mr-1.5 h-5 w-5 flex-shrink-0 "
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                clipRule="evenodd"
              />
            </svg>
            Vancouver, Canada
          </div>
        </div>

        <div class="mt-5 flex lg:ml-4 lg:mt-0">
          <span class="hidden sm:block">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-400 hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Resume
            </button>
          </span>

          <span class="ml-3 hidden sm:block">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-400 hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Projects
            </button>
          </span>

          <span class="ml-3 hidden sm:block">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-400 hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              Contact
            </button>
          </span>
          <span class="ml-10 hidden sm:block">
            <Link href={"https://www.linkedin.com/in/carsonjtodd/"}>
              <Image
                src={linkedin} // Path to your image
                alt="LinkedIn"
                width={36} // Desired width of the image
                height={36} // Desired height of the image
                className="mr-2"
              />
            </Link>
          </span>
          <span class="ml-3 hidden sm:block">
            <Link href={"https://github.com/Carsonjt"}>
              <Image
                src={github} // Path to your image
                alt="Github"
                width={36} // Desired width of the image
                height={36} // Desired height of the image
                className="mr-2"
              />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
