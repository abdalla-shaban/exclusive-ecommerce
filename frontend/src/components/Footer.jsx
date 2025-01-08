import qr from "../assets/images/Qrcode.png";
import googlePlay from "../assets/images/download-googleplay.png";
import appStore from "../assets/images/download-appstore.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const footerContent = [
  {
    title: "Support",
    content: [
      "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
      "exclusive@gmail.com",
      "+88015-88888-9999",
    ],
  },
  {
    title: "Account",
    content: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
  },
  {
    title: "Quick Link",
    content: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black pt-10 text-white">
      <div className="tb-container flex justify-between gap-x-5 gap-y-10 flex-wrap">
        <div className="flex flex-col gap-4">
          <h3 className="title-1 font-bold">Exlusive</h3>
          <h4 className="title-2 font-semibold">Subscribe</h4>
          <p>Get 10% off your first order</p>
          <form>
            <label className="input input-bordered rounded-none flex items-center bg-transparent  !outline-none border-white">
              <input
                type="email"
                name="user_email"
                className="grow py-4 px-3"
                placeholder="Enter your email"
              />
              <button>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                    stroke="#FAFAFA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </label>
          </form>
        </div>
        {footerContent.map(({ title, content }, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <h3 className="title-1 font-bold">{title}</h3>
            <ul className="flex flex-col gap-4">
              {content.map((text, i) => (
                <li key={i}>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-4">
          <h3 className="title-1 font-bold">Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="flex items-start gap-3">
            <img src={qr} alt="Qr Code for download Mobile App" />
            <div className="flex flex-col gap-3">
              <img
                src={googlePlay}
                alt="Google Play to download Mobile App for Android"
              />
              <img
                src={appStore}
                alt="App Store to download Mobile App for IOS"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="py-4 mt-8 text-center border-t border-t-white/30 text-white/30">
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}
