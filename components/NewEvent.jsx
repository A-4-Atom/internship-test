import Link from "next/link";
export default function NewEvent() {
  return (
    <div className="new-event">
      <div className="event-title-div">
        <h1 className="new-event-title">Create new event</h1>
        <div className="links-div">
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

      <form className="new-event-form">
        <label htmlFor="name">Event Name</label>
        <br />
        <input
          type="text"
          name="name"
          className="name-input"
          placeholder="Adobe XD Auto - Animate : Your Guide to Creating"
        />

        <div className="form-time">
          <div>
            <label htmlFor="start-date">Start date / Time</label>
            <br />
            <input
              type="datetime-local"
              name="start-date"
              className="form-time-input"
              placeholder="September 24, 2017 07:59 am"
            />
          </div>
          <div>
            <label htmlFor="end-date">End date / Time</label>
            <br />
            <input
              type="datetime-local"
              name="end-date"
              className="form-time-input"
              placeholder="September 24, 2017 07:59 am"
            />
          </div>
        </div>
        <label htmlFor="location">Location</label>
        <br />
        <input
          type="text"
          name="location"
          className="form-location-input"
          placeholder="2118 Thornridge Cir, Syracuse, Connecticut 35624"
        />
        <div className="form-time">
          <div>
            <label htmlFor="notification">Notification</label>
            <br />
            <select
              name="notification"
              id="pet-select"
              className="form-notification"
            >
              <option value="">--Please choose an option--</option>
              <option value="dog">10 Mins</option>
              <option value="cat">30 Mins</option>
              <option value="hamster">1 Hour</option>
              <option value="parrot">2 Hours</option>
            </select>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              className="form-time-input"
              placeholder="jessica.hansome@example.com"
            />
          </div>
        </div>

        <label htmlFor="description">Event Description</label>
        <br />
        <textarea
          type="text"
          name="description"
          className="form-description-input"
        />
        <div className="submit-button-div">
          <button type="button" className="submit-button">
            Save Now
          </button>
        </div>
      </form>
    </div>
  );
}
