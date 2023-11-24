export const Article = ({ img, tittle, subtext, text }) => {
  return (
    <article className="flex h-[162px] ">
      <div className="w-[100px] flex-none">
        <img src={img} alt="" />
      </div>
      <div className="pl-6">
        <p className="text-GrayishBlue text-3xl mb-[18px] font-bold">
          {tittle}
        </p>
        <h2 className="font-bold mb-[18px] hover:text-SoftOrange cursor-pointer">
          {subtext}
        </h2>
        <p className="text-DarkGrayishBlue text-[16px]">{text}</p>
      </div>
    </article>
  );
};
