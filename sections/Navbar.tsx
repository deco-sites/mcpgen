import { JSX } from "preact";
import { useId } from "preact/hooks";
import NavbarAnimation from "../islands/NavbarAnimation.tsx";

export interface Props {
  /**
   * @title Button Text
   * @description Text for the CTA button
   * @default Get in touch
   */
  buttonText?: string;

  /**
   * @title Button URL
   * @description URL to navigate when button is clicked
   * @default #
   */
  buttonUrl?: string;

  /**
   * @title Enable Animations
   * @description Enable GSAP animations
   * @default true
   */
  enableAnimations?: boolean;
}

export default function Navbar({
  buttonText = "Get in touch",
  buttonUrl = "#",
  enableAnimations = true,
}: Props) {
  const navbarId = useId();
  const sectionId = `navbar-${navbarId}`;

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
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Add hover animation styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .navbar-button {
          transition: all 0.2s ease-in-out;
        }
        
        .navbar-button:hover {
          background-color: #9E9E9E;
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .navbar-button:active {
          transform: translateY(0);
        }
      `,
        }}
      />

      <div
        id={sectionId}
        class="w-full max-w-screen-2xl px-5 md:px-20 py-6 h-[70px] flex justify-between items-center font-[Inter] tracking-tight"
      >
        <div class="flex justify-start items-center">
          <img
            src="/logodocs2mcp.svg"
            alt="docs2mcp logo"
            width="128"
            height="32"
            class="h-8"
          />
        </div>
        <a
          href={buttonUrl}
          class="navbar-button px-4 py-2 bg-stone-300 rounded-full flex justify-center items-center gap-2 cursor-pointer"
        >
          <div class="justify-center text-neutral-800 text-base font-medium leading-tight tracking-tight">
            {buttonText}
          </div>
        </a>
      </div>

      {/* Animation island */}
      {enableAnimations && <NavbarAnimation selector={`#${sectionId}`} />}
    </>
  );
}
