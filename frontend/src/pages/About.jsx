import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Forever, where style meets timeless elegance. Founded
            with a passion for fashion, Forever is a clothing brand dedicated to
            creating apparel that reflects individuality, confidence, and
            comfort. At Forever, we believe that fashion is more than just
            clothing; it’s an expression of your unique story. Our collections
            are thoughtfully designed to combine the latest trends with classic
            staples, ensuring that every piece you wear becomes a part of your
            journey.
          </p>
          <p>
            Whether you're stepping out for a casual day, making a statement at
            an event, or seeking everyday essentials, Forever has something for
            everyone. We prioritize quality craftsmanship, sustainable
            practices, and attention to detail in every stitch, ensuring you
            look and feel your best. Join us in celebrating your forever
            moments, because at Forever, style never fades.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Forever, our mission is to empower individuals to express their
            unique style with confidence and authenticity. We are committed to
            crafting high-quality, fashion-forward clothing that seamlessly
            blends comfort and elegance, inspiring self-expression in every
            moment.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">At Forever, we don't just sell clothes – we craft experiences that make you feel confident, stylish, and uniquely you. </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">At Forever, we understand that your time is valuable. That’s why we’ve designed every aspect of your shopping experience to be as effortless and seamless as possible. </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">At Forever, our customers are at the heart of everything we do. We’re committed to providing a shopping experience that exceeds your expectations, every time. </p>
        </div>
      </div>

      <NewsLetterBox/>
    </div>
  );
};

export default About;
