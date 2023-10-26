import Image from "next/image";
export default function Product() {
  return (

      <div className="product">
        <Image
          src="https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/6/2021/09/Nespray-Web-Article-4_ENG-2-copy.jpg"
          height={270}
          width={310}
          alt=""
        />
        <div className="product-detail">
          <div>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="9"
                height="9"
                rx="1.5"
                stroke="#D9D9D9"
              />
              <rect
                x="0.5"
                y="11.5"
                width="9"
                height="9"
                rx="1.5"
                stroke="#D9D9D9"
              />
              <rect
                x="11.5"
                y="11.5"
                width="9"
                height="9"
                rx="1.5"
                stroke="#D9D9D9"
              />
              <rect
                x="11.5"
                y="0.5"
                width="9"
                height="9"
                rx="1.5"
                stroke="#D9D9D9"
              />
            </svg>
            Design
          </div>

          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625C18.4219 23.625 23.625 18.4219 23.625 12C23.625 5.57812 18.4219 0.375 12 0.375ZM12 21.375C6.79688 21.375 2.625 17.2031 2.625 12C2.625 6.84375 6.79688 2.625 12 2.625C17.1562 2.625 21.375 6.84375 21.375 12C21.375 17.2031 17.1562 21.375 12 21.375ZM14.8594 16.5C15.1406 16.6875 15.4688 16.6406 15.6562 16.3594L16.5469 15.1875C16.7344 14.9062 16.6875 14.5781 16.4062 14.3906L13.3125 12.0938V5.4375C13.3125 5.15625 13.0312 4.875 12.75 4.875H11.25C10.9219 4.875 10.6875 5.15625 10.6875 5.4375V13.1719C10.6875 13.3125 10.7344 13.5 10.875 13.5938L14.8594 16.5Z"
                fill="#D9D9D9"
              />
            </svg>
            3 Month
          </div>
        </div>
        <h1>AWS Certified Solutions Architect</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod
          tempor
        </p>

        <div className="pricing">
          <div>
            <Image
              src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaAxUq4l52PZjZp7YBV7LDj0usme7DY8rgHO7_luPEWapWZ7GjVqKWDZUiXlcs1WlrEnYkXqIK1KXDaIrBw3DuUJ19QdMQ=w1920-h981"
              height={60}
              width={60}
              alt="picture of a girl"
              quality={100}
            />
            Lina
          </div>
          <div>
            <p className="original-price">$100</p>
            <p className="discounted-price">$80</p>
          </div>
        </div>
      </div>
  );
}
