import "./fanspage.styles.scss";

const FansPage = () => {
  return (
    <div className="fanspage-Container">
        <a
          href="https://www.youtube.com/channel/UC8GOuhF_bDzPzv8968q8a4A" className="youtube"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
            alt="" />
          <span>YouTube</span>
          <div>&#10095;</div>
        </a>
        <a
          href="https://www.facebook.com/NintendoSEA/" className="facebook"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="" />
          <span>Facebook</span>
          <div>&#10095;</div>
        </a>
    </div>
  );
};

export default FansPage;
