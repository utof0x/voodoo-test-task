import { Product, BlackDisclosure } from "components";
import { requestProducts } from "utils/functions";

export const Content = async () => {
  const { products } = await requestProducts();

  return (
    <section className="flex flex-col items-center pt-6 laptop:pt-[100px] pb-[80px] px-6 laptop:px-[120px] bg-lightSand">
      <BlackDisclosure />
      <div className="flex justify-center tablet:justify-around desktop:justify-between flex-wrap max-w-[1272px] mt-12">
        {products.map((product) => {
          const { id, title } = product;
          const imageSrc = product.images[0].src;

          return (
            <Product
              key={id}
              id={id}
              conditionMark="USED"
              condition="Slightly used"
              name={title}
              imageSrc={imageSrc}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center py-12">
        <div className="text-sm tablet:text-xl text-center">
          Be the first one to know when we launch our beta!
        </div>
        <div className="flex items-center mt-6">
          <input
            type="text"
            placeholder="E-mail"
            className="w-[236px] tablet:w-[518px] h-[43px] pl-4 rounded text-base placeholder:text-base text-black placeholder:text-black font-semibold placeholder:font-semibold"
          />
          <a
            href="#"
            className="flex items-center justify-center w-[94px] h-[43px] ml-3 rounded bg-orange font-semibold text-base"
          >
            Sign-up
          </a>
        </div>
      </div>
    </section>
  );
};
