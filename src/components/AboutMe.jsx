import React, { useEffect, useRef, useState } from 'react';
import BlackSuitImage from '../husnain.png';
import { Link } from 'react-router-dom';

const skillsData = [
  {
    label: 'Figma',
    value: 100,
    icon: `<svg width="38" height="53" viewBox="0 0 38 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8808 34.4586C22.618 35.852 24.7697 36.6275 26.9964 36.6628C29.2231 36.6981 31.3983 35.9912 33.1788 34.6536C34.9594 33.3159 36.244 31.4237 36.8302 29.2752C37.4163 27.1267 37.2706 24.8442 36.4161 22.7877C35.7016 21.0605 34.5186 19.5675 33.0006 18.4769C34.2955 17.5487 35.3504 16.3252 36.0778 14.9078C36.8053 13.4904 37.1843 11.92 37.1834 10.3268C37.1834 7.66647 36.1266 5.11509 34.2455 3.23393C32.3643 1.35278 29.8129 0.29596 27.1526 0.29596H10.8524C8.72877 0.295346 6.65971 0.968747 4.94323 2.21918C3.22674 3.46962 1.9514 5.23257 1.30087 7.25413C0.650348 9.2757 0.658204 11.4516 1.32331 13.4684C1.98842 15.4852 3.27645 17.2389 5.00193 18.4769C3.70756 19.4056 2.65301 20.6292 1.92555 22.0465C1.1981 23.4638 0.818665 25.0339 0.818665 26.627C0.818665 28.22 1.1981 29.7902 1.92555 31.2075C2.65301 32.6247 3.70756 33.8484 5.00193 34.7771C3.60547 35.7791 2.48992 37.1232 1.76228 38.6803C1.03464 40.2375 0.71933 41.9555 0.846585 43.6695C0.97384 45.3836 1.5394 47.0362 2.489 48.4688C3.43861 49.9015 4.7404 51.066 6.26952 51.8509C7.79864 52.6357 9.50377 53.0145 11.2214 52.9508C12.939 52.8872 14.6114 52.3833 16.0782 51.4874C17.5451 50.5916 18.7571 49.3338 19.5981 47.8348C20.439 46.3358 20.8807 44.6459 20.8808 42.9271V34.4586ZM10.8499 4.05753C9.1872 4.05753 7.59258 4.71805 6.41686 5.89377C5.24114 7.06949 4.58063 8.66411 4.58063 10.3268C4.58063 11.9895 5.24114 13.5842 6.41686 14.7599C7.59258 15.9356 9.1872 16.5961 10.8499 16.5961H17.1192V4.05753H10.8499ZM17.1192 36.6579H10.8499C9.60997 36.6579 8.39787 37.0255 7.36689 37.7144C6.33591 38.4033 5.53236 39.3824 5.05785 40.528C4.58334 41.6735 4.45919 42.9341 4.70109 44.1502C4.94299 45.3663 5.54009 46.4834 6.41686 47.3602C7.29364 48.237 8.41072 48.8341 9.62684 49.076C10.843 49.3179 12.1035 49.1937 13.2491 48.7192C14.3946 48.2447 15.3738 47.4412 16.0626 46.4102C16.7515 45.3792 17.1192 44.1671 17.1192 42.9271V36.6579ZM10.8499 20.3577C9.1872 20.3577 7.59258 21.0182 6.41686 22.1939C5.24114 23.3696 4.58063 24.9643 4.58063 26.627C4.58063 28.2897 5.24114 29.8843 6.41686 31.06C7.59258 32.2358 9.1872 32.8963 10.8499 32.8963H17.1192V20.3577H10.8499ZM20.8808 26.627C20.8808 28.29 21.5414 29.885 22.7174 31.0609C23.8933 32.2369 25.4883 32.8975 27.1513 32.8975C28.8144 32.8975 30.4093 32.2369 31.5853 31.0609C32.7612 29.885 33.4219 28.29 33.4219 26.627C33.4219 24.9639 32.7612 23.369 31.5853 22.193C30.4093 21.0171 28.8144 20.3564 27.1513 20.3564C25.4883 20.3564 23.8933 21.0171 22.7174 22.193C21.5414 23.369 20.8808 24.9639 20.8808 26.627ZM27.1501 16.5961C28.8128 16.5961 30.4074 15.9356 31.5831 14.7599C32.7589 13.5842 33.4194 11.9895 33.4194 10.3268C33.4194 8.66411 32.7589 7.06949 31.5831 5.89377C30.4074 4.71805 28.8128 4.05753 27.1501 4.05753H20.8808V16.5961H27.1501Z" fill="#959595"/>
        </svg>`
  },
  {
    label: 'Adobe XD',
    value: 100,
    icon: `<svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_587_797)">
            <path d="M16.7114 14.9692L26.7423 35.0309M16.7114 35.0309L26.7423 14.9692M51.8194 12.4615V37.5386C51.8194 40.199 50.7626 42.7504 48.8815 44.6315C47.0003 46.5127 44.4489 47.5695 41.7886 47.5695H16.7114C14.0511 47.5695 11.4997 46.5127 9.61851 44.6315C7.73736 42.7504 6.68054 40.199 6.68054 37.5386V12.4615C6.68054 9.80112 7.73736 7.24973 9.61851 5.36857C11.4997 3.48742 14.0511 2.4306 16.7114 2.4306H41.7886C44.4489 2.4306 47.0003 3.48742 48.8815 5.36857C50.7626 7.24973 51.8194 9.80112 51.8194 12.4615Z" stroke="#959595" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M41.7886 25.0001V33.5263C41.7886 33.7239 41.7496 33.9195 41.674 34.1021C41.5984 34.2846 41.4876 34.4505 41.3479 34.5902C41.2081 34.7299 41.0423 34.8408 40.8597 34.9164C40.6772 34.992 40.4815 35.0309 40.2839 35.0309H36.7731C35.4429 35.0309 34.1673 34.5025 33.2267 33.5619C32.2861 32.6214 31.7577 31.3457 31.7577 30.0155C31.7577 28.6853 32.2861 27.4096 33.2267 26.469C34.1673 25.5285 35.4429 25.0001 36.7731 25.0001H41.7886ZM41.7886 25.0001V17.4769" stroke="#959595" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <filter id="filter0_d_587_797" x="0.680542" y="0.430603" width="57.1389" height="57.1389" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_587_797"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_587_797" result="shape"/>
            </filter>
            </defs>
            </svg>`
  },
  {
    label: 'Adobe Photoshop',
    value: 85,
    icon: `<svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.0695 12.4615V37.5386C48.0695 40.199 47.0127 42.7504 45.1316 44.6315C43.2504 46.5127 40.699 47.5695 38.0387 47.5695H12.9615C10.3011 47.5695 7.74976 46.5127 5.86861 44.6315C3.98745 42.7504 2.93063 40.199 2.93063 37.5386V12.4615C2.93063 9.80112 3.98745 7.24973 5.86861 5.36857C7.74976 3.48742 10.3011 2.4306 12.9615 2.4306H38.0387C40.699 2.4306 43.2504 3.48742 45.1316 5.36857C47.0127 7.24973 48.0695 9.80112 48.0695 12.4615Z" stroke="#959595" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.9615 35.0309V25M12.9615 25V14.9692H17.9769C19.3071 14.9692 20.5828 15.4976 21.5234 16.4382C22.4639 17.3787 22.9924 18.6544 22.9924 19.9846C22.9924 21.3148 22.4639 22.5905 21.5234 23.5311C20.5828 24.4716 19.3071 25 17.9769 25H12.9615ZM38.0387 22.4923C37.2713 20.9551 35.699 19.9846 33.9812 19.9846H33.0232C32.0256 19.9846 31.0688 20.3809 30.3634 21.0864C29.658 21.7918 29.2616 22.7486 29.2616 23.7462C29.2616 24.7438 29.658 25.7006 30.3634 26.406C31.0688 27.1115 32.0256 27.5078 33.0232 27.5078H34.2771C35.2747 27.5078 36.2315 27.9041 36.9369 28.6095C37.6423 29.3149 38.0387 30.2717 38.0387 31.2693C38.0387 32.267 37.6423 33.2237 36.9369 33.9292C36.2315 34.6346 35.2747 35.0309 34.2771 35.0309H33.3191C32.4767 35.0309 31.6508 34.7963 30.9342 34.3534C30.2176 33.9105 29.6384 33.2767 29.2616 32.5232" stroke="#959595" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
  },
  {
    label: 'Shopify',
    value: 60,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#7cb342" d="M37.216,11.78c-0.023-0.211-0.211-0.305-0.351-0.305s-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343	c-0.234-0.234-0.68-0.164-0.867-0.117c-0.023,0-0.469,0.141-1.195,0.375c-0.726-2.086-1.968-3.984-4.194-3.984h-0.211	C24.187,4.375,23.391,4,22.735,4c-5.155,0-7.639,6.444-8.412,9.725c-2.015,0.633-3.445,1.054-3.609,1.125	c-1.125,0.351-1.148,0.375-1.289,1.429c-0.117,0.797-3.046,23.456-3.046,23.456L29.179,44l12.373-2.671	C41.575,41.282,37.24,11.991,37.216,11.78z M27.937,9.483c-0.562,0.164-1.242,0.375-1.921,0.609V9.671	c0-1.265-0.164-2.296-0.469-3.117C26.718,6.695,27.445,7.984,27.937,9.483L27.937,9.483z M24.117,6.812	c0.305,0.797,0.516,1.922,0.516,3.468v0.234c-1.265,0.398-2.601,0.797-3.984,1.242C21.422,8.804,22.899,7.351,24.117,6.812	L24.117,6.812z M22.617,5.359c0.234,0,0.469,0.094,0.656,0.234c-1.664,0.773-3.421,2.718-4.148,6.655	c-1.101,0.351-2.156,0.656-3.163,0.984C16.806,10.233,18.915,5.359,22.617,5.359z"></path><path fill="#558b2f" d="M36.865,11.428c-0.141,0-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343	C31.17,8.757,31.053,8.71,30.96,8.71L29.249,44l12.373-2.671c0,0-4.335-29.338-4.359-29.549	C37.169,11.569,37.005,11.475,36.865,11.428z"></path><path fill="#fff" d="M24.792,18.593l-1.475,4.449c0,0-1.337-0.715-2.927-0.715c-2.374,0-2.489,1.498-2.489,1.867	c0,2.028,5.301,2.812,5.301,7.583c0,3.757-2.374,6.177-5.578,6.177c-3.872,0-5.808-2.397-5.808-2.397l1.037-3.411	c0,0,2.028,1.752,3.734,1.752c1.129,0,1.59-0.876,1.59-1.521c0-2.651-4.333-2.766-4.333-7.145c0-3.665,2.628-7.214,7.952-7.214	C23.777,17.994,24.792,18.593,24.792,18.593z"></path>
</svg>`
  },
  {
    label: 'Hubspot',
    value: 70,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 489 511.8"><path fill="#FF7A59" fill-rule="nonzero" d="M375.25 168.45V107.5c16.43-7.68 26.97-24.15 27.08-42.29V63.8c0-25.95-21.05-46.99-47-46.99h-1.37c-25.95 0-46.99 21.04-46.99 46.99v1.41a46.985 46.985 0 0027.29 42.3v60.94c-23.13 3.53-44.98 13.18-63.19 27.84L103.88 66.16c1.19-4.29 1.83-8.73 1.89-13.17v-.11C105.77 23.68 82.09 0 52.88 0 23.68 0 0 23.68 0 52.88c0 29.18 23.64 52.85 52.81 52.89 9.17-.08 18.16-2.59 26.06-7.23l164.62 128.07a133.501 133.501 0 00-22.16 73.61c0 27.39 8.46 54.17 24.18 76.58l-50.06 50.06a43.926 43.926 0 00-12.43-1.81c-23.96 0-43.38 19.42-43.38 43.37 0 23.96 19.42 43.38 43.38 43.38 23.95 0 43.37-19.42 43.37-43.38v-.13a41.81 41.81 0 00-2.02-12.5l49.52-49.56a133.687 133.687 0 0081.54 27.78c73.76 0 133.57-59.81 133.57-133.57 0-66.05-48.3-122.2-113.61-132.06l-.14.07zm-20.39 200.4c-36.79-1.52-65.85-31.79-65.85-68.62 0-35.43 26.97-65.06 62.23-68.38h3.62c35.8 2.73 63.46 32.58 63.46 68.48 0 35.91-27.66 65.76-63.45 68.48l-.01.04zm0 0z"/></svg>`
  }
];

const AboutMe = () => {
  const sectionRef = useRef(null);
  const [progressValues, setProgressValues] = useState(skillsData.map(() => 0));

  useEffect(() => {
    let intervals = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgressValues(skillsData.map(() => 0));

          skillsData.forEach((skill, index) => {
            let current = 0;
            const interval = setInterval(() => {
              setProgressValues(prev => {
                const updated = [...prev];
                if (current <= skill.value) {
                  updated[index] = current++;
                }
                return updated;
              });

              if (current > skill.value) clearInterval(interval);
            }, 45);
            intervals.push(interval);
          });
        } else {
          setProgressValues(skillsData.map(() => 0));
          intervals.forEach(clearInterval);
        }
      },
      { threshold: 0.4 }
    );

    const section = sectionRef.current; // ✅ fixed for ESLint

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <section ref={sectionRef} id="aboutme" className="bg-black text-white py-16">
      <div className="max-w-[1400px] mx-auto text-center px-5">
        <h2 className="block text-center mb-5 md:text-[40px] text-[20px] font-bold text-white">About Me</h2>
        <p className="text-center text-txtblack mb-8 md:mb-16 text-[16px] md:text-[20px] font-semibold">
          User Interface And User Experience And Also Video Editing
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 md:mb-[100px] mb-[50px]">
          <div className="relative md:w-[40%]" data-aos="fade-right" data-aos-delay="200">
            <img src={BlackSuitImage} alt="profile" className="rounded-md grayscale relative z-10" />
            <div className="bg-default absolute bottom-0 w-full h-[80%] rounded-t-[50%] right-0"></div>
          </div>

          <div className="md:w-[60%] flex flex-col items-start gap-10" data-aos="fade-left" data-aos-delay="400">
            <p className="text-txtblack text-left xl:text-[24px] lg:text-[20px] text-[16px]">
              A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of
              code, sculpting intangible structures that shape our technological world. With fingers poised over
              keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms
              and solutions.
            </p>
            <Link
              to="/CVDownload"
              className="flex gap-3 text-[16px] font-semibold text-white px-[40px] py-3 rounded-xl hover:bg-default border border-[#575757] transition-all ease-in-out duration-500"
            >
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.1222 13.4361L10.1222 1.39511"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.0382 10.5084L10.1222 13.4364L7.20619 10.5084"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.755 6.12802H15.688C17.723 6.12802 19.372 7.77702 19.372 9.81302V14.697C19.372 16.727 17.727 18.372 15.697 18.372L4.55699 18.372C2.52199 18.372 0.871994 16.722 0.871994 14.687V9.80202C0.871994 7.77302 2.51799 6.12802 4.54699 6.12802H5.48899"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download CV
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-[1100px] m-auto">
          {skillsData.map((skill, index) => (
            <div key={index} className="text-center" data-aos="zoom-in-up" data-aos-delay={index * 100}>
              <div className="w-36 h-36 mx-auto relative mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" stroke="#444" strokeWidth="8" fill="none" />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    stroke="#f97316"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="326.72"
                    strokeDashoffset={326.72 - (326.72 * progressValues[index]) / 100}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.2s' }}
                  />
                </svg>
                <div
                  className="absolute inset-0 flex items-center justify-center top-0 bottom-0 m-auto w-[50px] h-[50px]"
                  dangerouslySetInnerHTML={{ __html: skill.icon }}
                />
              </div>

              <h2 className="text-default font-bold text-xl mb-2">{progressValues[index]}%</h2>
              <p className="lg:text-lg text-sm text-txtblack font-semibold">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
