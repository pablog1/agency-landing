const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} - Powered with
    <span role="img" aria-label="Love" className="mx-1">
      ♥
    </span>
    by
    <a className="!text-white ml-1" href="https://dango.digital">
      Dango Digital
    </a>
    {/*
     * PLEASE READ THIS SECTION
     * We'll really appreciate if you could have a link to our website
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * Thank you for your support it'll mean a lot for us.
     */}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-400;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
