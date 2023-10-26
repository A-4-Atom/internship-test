import Image from "next/image";
import Product from "./Product";
import Link from "next/link";
export default function ClassDetails() {
  return (
    <div className="class-details">
      <div className="buttons">
        <div className="links-div">
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
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </Link>
          <Link href="">
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
      <Image
        className="class-image"
        src="https://img.freepik.com/free-photo/confident-teacher-explaining-lesson-pupils_74855-9751.jpg"
        width={1380}
        height={920}
        alt="teacher and students in class"
      />
      <div className="class-description">
        <h2>O6 Super Coins on the way</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
          eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
          eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
          eiusmod
        </p>
      </div>
      <div className="class-description">
        <h2>Who this course is for?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
          eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
          eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
          eiusmod
        </p>
      </div>
      <div className="class-description">
        <h2>Archievable</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
          eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
          eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do
          eiusmodLWho this course is for? Lorem ipsum dolor sit amet,
          consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do
          eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
          eiusmodeiusmodadipiscing elit, sed do eiusmodL
        </p>
      </div>

      <div className="review">
        <div className="review-image-container">
          <Image
            src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaAxUq4l52PZjZp7YBV7LDj0usme7DY8rgHO7_luPEWapWZ7GjVqKWDZUiXlcs1WlrEnYkXqIK1KXDaIrBw3DuUJ19QdMQ=w1920-h981"
            height={60}
            width={60}
            alt="picture of a girl"
            quality={100}
          />
          <div>
            <h4>Bulkin Simons</h4>
            <svg
              width="130"
              height="22"
              viewBox="0 0 130 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.51575 0.40484C9.7113 -0.134947 10.3774 -0.134947 10.5729 0.40484L12.9384 6.93459C13.0208 7.16216 13.2072 7.31765 13.4212 7.33734L19.5611 7.90248C20.0687 7.9492 20.2745 8.67646 19.8878 9.05679L15.2098 13.6576C15.0468 13.8179 14.9756 14.0695 15.0254 14.3091L16.4545 21.1882C16.5727 21.7568 16.0339 22.2064 15.5993 21.9016L10.3427 18.2153C10.1595 18.0869 9.92911 18.0869 9.74591 18.2153L4.48928 21.9016C4.05473 22.2064 3.5159 21.7568 3.63406 21.1882L5.06326 14.3091C5.11306 14.0695 5.04186 13.8179 4.87884 13.6576L0.20085 9.05679C-0.185866 8.67646 0.0199544 7.9492 0.527516 7.90248L6.66745 7.33734C6.88143 7.31765 7.06782 7.16216 7.15027 6.93459L9.51575 0.40484Z"
                fill="#FDB022"
              />
              <path
                d="M36.9936 0.40484C37.1891 -0.134947 37.8552 -0.134947 38.0508 0.40484L40.4163 6.93459C40.4987 7.16216 40.6851 7.31765 40.8991 7.33734L47.039 7.90248C47.5465 7.9492 47.7524 8.67646 47.3656 9.05679L42.6877 13.6576C42.5246 13.8179 42.4534 14.0695 42.5032 14.3091L43.9324 21.1882C44.0506 21.7568 43.5118 22.2064 43.0772 21.9016L37.8205 18.2153C37.6373 18.0869 37.407 18.0869 37.2238 18.2153L31.9672 21.9016C31.5326 22.2064 30.9938 21.7568 31.1119 21.1882L32.5411 14.3091C32.5909 14.0695 32.5197 13.8179 32.3567 13.6576L27.6787 9.05679C27.2919 8.67646 27.4978 7.9492 28.0053 7.90248L34.1453 7.33734C34.3592 7.31765 34.5456 7.16216 34.6281 6.93459L36.9936 0.40484Z"
                fill="#FDB022"
              />
              <path
                d="M64.4714 0.40484C64.6669 -0.134947 65.333 -0.134947 65.5286 0.40484L67.8941 6.93459C67.9765 7.16216 68.1629 7.31765 68.3769 7.33734L74.5168 7.90248C75.0244 7.9492 75.2302 8.67646 74.8435 9.05679L70.1655 13.6576C70.0024 13.8179 69.9312 14.0695 69.981 14.3091L71.4102 21.1882C71.5284 21.7568 70.9896 22.2064 70.555 21.9016L65.2984 18.2153C65.1152 18.0869 64.8848 18.0869 64.7016 18.2153L59.445 21.9016C59.0104 22.2064 58.4716 21.7568 58.5898 21.1882L60.0189 14.3091C60.0688 14.0695 59.9975 13.8179 59.8345 13.6576L55.1565 9.05679C54.7698 8.67646 54.9756 7.9492 55.4832 7.90248L61.6231 7.33734C61.8371 7.31765 62.0235 7.16216 62.1059 6.93459L64.4714 0.40484Z"
                fill="#FDB022"
              />
              <path
                d="M91.9492 0.40484C92.1448 -0.134947 92.8109 -0.134947 93.0064 0.40484L95.3719 6.93459C95.4544 7.16216 95.6408 7.31765 95.8547 7.33734L101.995 7.90248C102.502 7.9492 102.708 8.67646 102.321 9.05679L97.6433 13.6576C97.4803 13.8179 97.4091 14.0695 97.4589 14.3091L98.8881 21.1882C99.0062 21.7568 98.4674 22.2064 98.0328 21.9016L92.7762 18.2153C92.593 18.0869 92.3626 18.0869 92.1795 18.2153L86.9228 21.9016C86.4882 22.2064 85.9494 21.7568 86.0676 21.1882L87.4968 14.3091C87.5466 14.0695 87.4754 13.8179 87.3123 13.6576L82.6343 9.05679C82.2476 8.67646 82.4535 7.9492 82.961 7.90248L89.1009 7.33734C89.3149 7.31765 89.5013 7.16216 89.5837 6.93459L91.9492 0.40484Z"
                fill="#FDB022"
              />
              <path
                d="M119.427 0.40484C119.622 -0.134947 120.289 -0.134947 120.485 0.40484L122.85 6.93459C122.932 7.16216 123.119 7.31765 123.332 7.33734L129.472 7.90248C129.98 7.9492 130.185 8.67646 129.8 9.05679L125.121 13.6576C124.958 13.8179 124.887 14.0695 124.937 14.3091L126.366 21.1882C126.484 21.7568 125.945 22.2064 125.511 21.9016L120.254 18.2153C120.071 18.0869 119.84 18.0869 119.657 18.2153L114.401 21.9016C113.967 22.2064 113.427 21.7568 113.545 21.1882L114.974 14.3091C115.025 14.0695 114.954 13.8179 114.79 13.6576L110.112 9.05679C109.725 8.67646 109.931 7.9492 110.439 7.90248L116.579 7.33734C116.792 7.31765 116.979 7.16216 117.061 6.93459L119.427 0.40484Z"
                fill="#FDB022"
              />
            </svg>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
          eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
          eiusmodLorem
        </p>
      </div>

      <div className="recommendations">
        <div className="nav">
          <p>Students also bought</p>
          <div className="nav-buttons">
            <div>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.453125 7.20312C0.03125 7.67188 0.03125 8.375 0.453125 8.79688L6.82812 15.1719C7.29688 15.6406 8 15.6406 8.42188 15.1719L9.5 14.1406C9.92188 13.6719 9.92188 12.9688 9.5 12.5469L4.95312 8L9.5 3.5C9.92188 3.07812 9.92188 2.32812 9.5 1.90625L8.42188 0.828125C8 0.40625 7.29688 0.40625 6.82812 0.828125L0.453125 7.20312Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 8.79688C9.92188 8.375 9.92188 7.67188 9.5 7.20312L3.125 0.828125C2.65625 0.40625 1.95312 0.40625 1.53125 0.828125L0.453125 1.90625C0.03125 2.375 0.03125 3.07812 0.453125 3.5L5 8.04688L0.453125 12.5469C0.03125 12.9688 0.03125 13.6719 0.453125 14.1406L1.53125 15.1719C1.95312 15.6406 2.65625 15.6406 3.125 15.1719L9.5 8.79688Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="products-container">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}
