

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-200 dark:bg-gray-800 text-[#fff]">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2024 My Blog. All Rights Reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
