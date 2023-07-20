import React, { useState } from "react";
import hotsport from "./assets/hotspot.png";
import './Services.css'

const Services = () => {

  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  const [showText5, setShowText5] = useState(false);
  const [showText6, setShowText6] = useState(false);

  const handleReadMore1 = () => {
    setShowText1(!showText1);
  };

  const handleReadMore2 = () => {
    setShowText2(!showText2);
  };

  const handleReadMore3 = () => {
    setShowText3(!showText3);
  };
  const handleReadMore4 = () => {
    setShowText4(!showText4);
  };
  const handleReadMore5 = () => {
    setShowText5(!showText5);
  };
  const handleReadMore6 = () => {
    setShowText6(!showText6);
  };
  return(
    <section className="services">
    <div className="services-header">
      <h1>Our Services</h1>
      <hr></hr>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        hendrerit magna sed ante ultricies vestibulum. Mauris et
      </p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <img src={hotsport} alt="Image 1" className="image" />
            <h2 className="heading">Heading 1</h2>
            <hr />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit magna sed ante ultricies vestibulum. Mauris et
              enim in neque pellentesque laoreet. Nulla sit amet ligula
              vitae sem dapibus sagittis ac vel enim. Sed nec nisl eget
              urna euismod lacinia.
              {showText1 && (
                <>
                  {" "}
                  enim in neque pellentesque laoreet. Nulla sit amet
                  ligula vitae sem dapibus sagittis ac vel enim. Sed nec
                  nisl eget urna euismod lacinia.
                  <br />
                  enim in neque pellentesque laoreet. Nulla sit amet
                  ligula vitae sem dapibus sagittis ac vel enim. Sed nec
                  nisl eget urna euismod lacinia.
                </>
              )}
            </p>
            <div
              className="read-more-container"
              onClick={handleReadMore1}
            >
              {showText1 ? (
                <>
                  <p className="read-more-text">
                    Read Less <i className="fas fa-arrow-left"></i>
                  </p>
                  <div className="arrow up"></div>
                </>
              ) : (
                <>
                  <p className="read-more-text">
                    Read More <i className="fas fa-arrow-right"></i>
                  </p>
                  <div className="arrow"></div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={hotsport} alt="Image 2" className="image" />
            <h2 className="heading">Heading 2</h2>
            <hr />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit magna sed ante ultricies vestibulum. Mauris et
              enim in neque pellentesque laoreet. Nulla sit amet ligula
              vitae sem dapibus sagittis ac vel enim. Sed nec nisl eget
              urna euismod lacinia.
              {showText2 && (
                <>
                  {" "}
                  enim in neque pellentesque laoreet. Nulla sit amet
                  ligula vitae sem dapibus sagittis ac vel enim. Sed nec
                  nisl eget urna euismod lacinia.
                  <br />
                  enim in neque pellentesque laoreet. Nulla sit amet
                  ligula vitae sem dapibus sagittis ac vel enim. Sed nec
                  nisl eget urna euismod lacinia.
                </>
              )}
            </p>
            <div
              className="read-more-container"
              onClick={handleReadMore2}
            >
              {showText2 ? (
                <>
                  <p className="read-more-text">
                    Read Less <i className="fas fa-arrow-left"></i>
                  </p>
                  <div className="arrow up"></div>
                </>
              ) : (
                <>
                  <p className="read-more-text">
                    Read More <i className="fas fa-arrow-right"></i>
                  </p>
                  <div className="arrow"></div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={hotsport} alt="Image 3" className="image" />
            <h2 className="heading">Heading 3</h2>
            <hr />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit magna sed ante ultricies vestibulum. Mauris et
              enim in neque pellentesque laoreet. Nulla sit amet ligula
              vitae sem dapibus sagittis ac vel enim. Sed nec nisl eget
              urna euismod lacinia.
              {showText3 && (
                <>
                  {" "}
                  enim in neque pellentesque laoreet. Nulla sit amet
                  ligula vitae sem dapibus sagittis ac vel enim. Sed nec
                  nisl eget urna euismod lacinia.
                  <br />
                  enim in neque pellentesque laoreet. Nulla sit amet
                  ligula vitae sem dapibus sagittis ac vel enim. Sed nec
                  nisl eget urna euismod lacinia.
                </>
              )}
            </p>
            <div
              className="read-more-container"
              onClick={handleReadMore3}
            >
              {showText3 ? (
                <>
                  <p className="read-more-text">
                    Read Less <i className="fas fa-arrow-left"></i>
                  </p>
                  <div className="arrow up"></div>
                </>
              ) : (
                <>
                  <p className="read-more-text">
                    Read More <i className="fas fa-arrow-right"></i>
                  </p>
                  <div className="arrow"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <img src={hotsport} alt="Image 4" className="image" />
            <h2 className="heading">
              Heading 4 <hr />
            </h2>

            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit magna sed ante ultricies vestibulum. Mauris et
              enim in neque pellentesque laoreet. Nulla sit amet ligula
              vitae sem dapibus sagittis ac vel enim. Sed nec nisl eget
              urna euismod lacinia.
              {showText4 && (
                <>
                  {" "}
                  enim in neque pellentesque laoreet. Nulla sit amet
                  ligula vitae sem dapibus sagittis ac vel enim. Sed nec
                  nisl eget urna euismod lacinia.
                  <br />
                  enim in neque pellentesque laoreet. Nulla sit amet
                  ligula vitae sem dapibus sagittis ac vel enim. Sed nec
                  nisl eget urna euismod lacinia.
                </>
              )}
            </p>
            <div
              className="read-more-container"
              onClick={handleReadMore4}
            >
              {showText4 ? (
                <>
                  <p className="read-more-text">
                    Read Less <i className="fas fa-arrow-left"></i>
                  </p>
                  <div className="arrow up"></div>
                </>
              ) : (
                <>
                  <p className="read-more-text">
                    Read More <i className="fas fa-arrow-right"></i>
                  </p>
                  <div className="arrow"></div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={hotsport} alt="Image 5" className="image" />
            <h2 className="heading">Heading 5</h2>
            <hr />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit magna sed ante ultricies vestibulum. Mauris et
              enim in neque pellentesque laoreet. Nulla sit amet ligula
              vitae sem dapibus sagittis ac vel enim. Sed nec nisl eget
              urna euismod lacinia.
              {showText5 && (
                <>
                  {" "}
                  enim in neque pellentesque laoreet. Nulla sit amet
                  ligula vitae sem dapibus sagittis ac vel enim. Sed nec
                  nisl eget urna euismod lacinia.
                  <br />
                  enim in neque pellentesque laoreet. Nulla sit amet
                  ligula vitae sem dapibus sagittis ac vel enim. Sed nec
                  nisl eget urna euismod lacinia.
                </>
              )}
            </p>
            <div
              className="read-more-container"
              onClick={handleReadMore5}
            >
              {showText5 ? (
                <>
                  <p className="read-more-text">
                    Read Less <i className="fas fa-arrow-left"></i>
                  </p>
                  <div className="arrow up"></div>
                </>
              ) : (
                <>
                  <p className="read-more-text">
                    Read More <i className="fas fa-arrow-right"></i>
                  </p>
                  <div className="arrow"></div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={hotsport} alt="Image 3" className="image" />
            <h2 className="heading">Heading 3</h2>
            <hr />
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit magna sed ante ultricies vestibulum. Mauris et
              enim in neque pellentesque laoreet. Nulla sit amet ligula
              vitae sem dapibus sagittis ac vel enim. Sed nec nisl eget
              urna euismod lacinia.
              {showText6 && (
                <>
                  {" "}
                  enim in neque pellentesque laoreet. Nulla sit amet
                  ligula vitae sem dapibus sagittis ac vel enim. Sed nec
                  nisl eget urna euismod lacinia.
                  <br />
                  enim in neque pellentesque laoreet. Nulla sit amet
                  ligula vitae sem dapibus sagittis ac vel enim. Sed nec
                  nisl eget urna euismod lacinia.
                </>
              )}
            </p>
            <div
              className="read-more-container"
              onClick={handleReadMore6}
            >
              {showText6 ? (
                <>
                  <p className="read-more-text">
                    Read Less <i className="fas fa-arrow-left"></i>
                  </p>
                  <div className="arrow up"></div>
                </>
              ) : (
                <>
                  <p className="read-more-text">
                    Read More <i className="fas fa-arrow-right"></i>
                  </p>
                  <div className="arrow"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Services;