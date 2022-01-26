import React from "react";
import Link from "next/link";

const Footer2 = () => {
  return (
    <div className="container grid grid-cols-2 lg:grid-cols-4">
      <div className="py-4 .px-8">
        <h1>Fatherhood Frenzy</h1>
        <p>We out here bb grill</p>
      </div>
      <div className="flex flex-col flex-start py-4 px-8">
        <span>Site links</span>
        <Link href="/contact">Contact Us</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <div className="flex flex-col flex-start py-4 px-8">
        <span>Social Media</span>
        <Link href="/contact">Contact Us</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <div className="flex flex-col flex-start py-4 px-8">
        <span>Other</span>
        <Link href="/contact">Contact Us</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default Footer2;
