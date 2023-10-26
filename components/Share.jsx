import Link from "next/link";
import ShareTile from "./ShareTile";
export default function Share() {
  return (
    <div className="share-div">
      <div className="event-title-div">
        <h1 className="new-event-title">Share and Refer</h1>
        <div className="links-div">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="backward"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </Link>
          <Link href="/page3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="backward"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
      <p className="new-event-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
        eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
        eiusmodLorem
      </p>
      {/* shraeTile */}
      <div className="share-tile-container">
        <ShareTile color="#EAF5FE"/>
        <ShareTile color="#FDE8CD"/>
        <ShareTile color="#FCE1DF"/>
      </div>
    </div>
  );
}
