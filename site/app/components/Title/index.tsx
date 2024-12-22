import React from "react";

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <section className="text-center my-14 px-6">
      <h1 className="text-4xl font-bold text-blue-600">{title}</h1>
      <p className="text-gray-500 mt-6 text-xl">{subtitle}</p>
    </section>
  );
};

export default Title;
