import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <p className="copyright__text">
          DevelopMeg 2020 &copy; All right reserved
        </p>
         <p className="copyright__text">
          Main photo in page by{" "}
          <a className="link" href=" https://unsplash.com/">
            Unsplash
          </a>
        </p>
        <p className="copyright__text">
          Icon in page by{" "}
          <a className="link" href=" https://icons8.com/icons">
            Icons8
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
