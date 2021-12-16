const Cards = (props) => {
  return (
    <div className="max-w-xl mx-auto rounded-2xl bg-white lg:mt-2 2xl:mt-8 px-10 py-5">
      <div className="max-w-lg mx-auto">
        <h3 className="2xl:font-bold 2xl:text-2xl lg:text-xl mb-2 text-center text-colorHeading">
          {props.title}
        </h3>
        <p className="text-colorParagraph text-[15px] lg:text-sm text-center lg:mb-3 2xl:mb-5 px-5">
          {props.desc}
        </p>
      </div>
      {props.children}
    </div>
  );
};

export default Cards;
