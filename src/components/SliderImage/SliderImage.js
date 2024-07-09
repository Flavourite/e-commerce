function SliderImage({ image }) {
  return (
    <section className="prod_container">
      <div className="slider_img_container">
        <img className="slider_img" src={image} alt="img" />
      </div>
      <div className="prod_name_price">
        <div>
          <h3 className="header">Product Name :</h3>
          <p>Lorem ipsum</p>
        </div>
        <p className="price">$55</p>
      </div>
      <div>
        <a className="add_cart_btn" href="./index.html">
          Add to cart
        </a>
      </div>
    </section>
  );
}

export default SliderImage;
