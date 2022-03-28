import Link from "next/link";

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white ">
      <div className="bg-gray-50 pt-5 mt-8">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <Link href="/food">
              <a className="text-4xl italic font-bold text-brand-600">Zuck</a>
            </Link>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-brand-600 font-bold">Pages</div>
            <Link href="/food">
              <a className="my-3 block text-gray-600">Food Items</a>
            </Link>
            <Link href="/offers">
              <a className="my-3 block text-gray-600">Offers</a>
            </Link>
            <Link href="/favourites">
              <a className="my-3 block text-gray-600">Favourites</a>
            </Link>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-brand-600 font-bold">Contact us</div>
            <Link href="https://www.twitter.com/codetastic1">
              <a className="my-3 block text-gray-600" target="_blank">
                Twitter
              </a>
            </Link>
            <Link href="https://www.github.com/sushilburagute">
              <a className="my-3 block text-gray-600" target="_blank">
                Github
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-10 text-center border-t border-gray-100">
        <p className="text-sm text-gray-500">&copy; 2022 Sushil Buragute. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
