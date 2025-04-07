import { useId } from "preact/hooks";
import HeroAnimation from "../islands/HeroAnimation.tsx";

export interface Props {
  /**
   * @title Title First Part
   * @description First part of the title
   * @default Generate
   */
  titleFirstPart?: string;

  /**
   * @title Title Highlight
   * @description Highlighted part of the title
   * @default new MCPs
   */
  titleHighlight?: string;

  /**
   * @title Title Last Part
   * @description Last part of the title
   * @default from Github's repositories
   */
  titleLastPart?: string;

  /**
   * @title Input Placeholder
   * @description Placeholder text for the input field
   * @default https://github.com/...
   */
  inputPlaceholder?: string;

  /**
   * @title Button Text
   * @description Text for the submit button
   * @default Generate
   */
  buttonText?: string;

  /**
   * @title Button URL
   * @description URL to navigate when button is clicked
   * @default #
   */
  buttonUrl?: string;

  /**
   * @title Description Text
   * @description Text above the input field
   * @default Enter your GitHub link repo here and generate a brand new MCP link
   */
  descriptionText?: string;

  /**
   * @title Repository Link
   * @description GitHub repository link entered by the user
   */
  repoLink?: string;

  /**
   * @title Enable Animations
   * @description Enable GSAP animations
   * @default true
   */
  enableAnimations?: boolean;
}

export default function Hero({
  titleFirstPart = "Generate ",
  titleHighlight = "new MCPs",
  titleLastPart = "from Github's repositories",
  inputPlaceholder = "https://github.com/...",
  buttonText = "Generate",
  buttonUrl = "#",
  descriptionText =
    "Enter your GitHub link repo here and generate a brand new MCP link",
  repoLink = "",
  enableAnimations = true,
}: Props) {
  // Generate unique ID for this section
  const heroId = useId();
  const sectionId = `hero-${heroId}`;

  return (
    <>
      {/* Include GSAP script */}
      {enableAnimations && (
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js">
        </script>
      )}

      {/* Include Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Add hover animation styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hero-button {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        
        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #E7380C;

        }
        
        .hero-button:active {
          transform: translateY(0);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `,
        }}
      />

      <div
        id={sectionId}
        class="w-full flex-1 flex flex-col justify-center items-center h-[calc(100vh-140px)] min-h-[500px] px-4 md:px-0 font-[Inter] tracking-tight"
      >
        <div class="flex flex-col justify-center items-center gap-10 max-w-4xl py-8">
          <div class="text-center title-animation">
            <span class="text-neutral-700 text-4xl md:text-6xl font-medium leading-tight font-[Inter] tracking-tighter">
              {titleFirstPart}
            </span>
            <span class="text-orange-600 text-5xl md:text-7xl italic leading-tight md:leading-tight font-['Instrument_Serif'] tracking-tighter">
              {titleHighlight}
              <br />
            </span>
            <span class="text-neutral-700 text-4xl md:text-6xl font-medium leading-tight font-[Inter] tracking-tighter">
              {titleLastPart}
            </span>
          </div>

          <div class="w-full p-6 md:p-12 bg-[#EEEEEB] rounded-2xl flex flex-col justify-start items-end gap-8 input-card">
            <div class="self-stretch flex flex-col justify-start items-center gap-2">
              <div class="self-stretch text-center text-neutral-800 text-base md:text-lg font-normal leading-tight tracking-tight">
                {descriptionText}
              </div>
            </div>

            <div class="self-stretch flex flex-col justify-start items-end gap-4">
              <div class="self-stretch pl-6 md:pl-10 pr-2 py-2 bg-white rounded-full border border-neutral-400 inline-flex justify-between items-center">
                <input
                  type="text"
                  placeholder={inputPlaceholder}
                  name="repoLink"
                  class="w-full bg-transparent text-neutral-800 placeholder:text-neutral-400 text-lg font-medium leading-tight outline-none tracking-tight"
                  value={repoLink}
                />
                <a
                  href={buttonUrl}
                  class="hero-button px-6 py-3.5 bg-orange-600 rounded-full flex justify-center items-center gap-2 text-white text-lg font-medium leading-tight"
                >
                  {buttonText}
                  <div class="w-5 h-5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation island */}
      {enableAnimations && <HeroAnimation selector={`#${sectionId}`} />}
    </>
  );
}
