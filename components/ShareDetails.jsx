import Link from "next/link";
export default function ShareDetails() {
  return (
    <div className="share-details-div">
      <div className="event-title-div">
        <h1 className="new-event-title">Share and Refer</h1>
        <div className="links-div">
          <Link href="/page2">
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
          <Link href="/page4">
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

      <div className="calendar-detail">
        <div className="wrapper">
          <div className="calendar-header">
            <span id="prev" class="material-symbols-rounded">
              &lt;
            </span>
            <p class="current-date">September 2021</p>
            <span id="next" class="material-symbols-rounded">
              &gt;
            </span>
          </div>
          <div class="calendar">
            <ul class="weeks">
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
            <ul class="days">
              <li class="inactive">29</li>
              <li class="inactive">30</li>
              <li class="inactive">31</li>
              <li class="">1</li>
              <li class="">2</li>
              <li class="">3</li>
              <li class="">4</li>
              <li class="">5</li>
              <li class="">6</li>
              <li class="">7</li>
              <li class="">8</li>
              <li class="">9</li>
              <li class="">10</li>
              <li class="">11</li>
              <li class="">12</li>
              <li class="">13</li>
              <li class="">14</li>
              <li class="">15</li>
              <li class="">16</li>
              <li class="">17</li>
              <li class="">18</li>
              <li class="">19</li>
              <li class="">20</li>
              <li class="">21</li>
              <li class="">22</li>
              <li class="">23</li>
              <li class="">24</li>
              <li class="">25</li>
              <li class="">26</li>
              <li class="">27</li>
              <li class="">28</li>
              <li class="">29</li>
              <li class="">30</li>
              <li class="inactive">1</li>
              <li class="inactive">2</li>
            </ul>
          </div>
        </div>
        <div className="vertical-bar"></div>
        <div className="class-timing">
            <h2 className="class-timing-heading">Sep 12, Monday</h2>
            <div className="timing">
                <p>2 PM</p>
                <div className="horizontal-bar"></div>
            </div>
            <div className="class-tile">
                Adobe XD Live Class
            </div>
            <div className="timing">
                <p>3 PM</p>
                <div className="horizontal-bar"></div>
            </div>
            <div className="timing">
                <p>4 PM</p>
                <div className="horizontal-bar"></div>
            </div>
            <div className="timing">
                <p>5 PM</p>
                <div className="horizontal-bar"></div>
            </div>
        </div>
      </div>
    </div>
  );
}
