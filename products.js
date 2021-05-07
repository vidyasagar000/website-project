import logo from './logo.svg';
import './style.css';



function products() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu =() => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">Radient Technologies</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="images/dishwash250ml.jpg" alt="dishwash" />
              <div className="product-name">
                <a href="product.html">DISH WASH 250 ML</a>
              </div>
              <div className="product-price">35₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/DISH-WASH-500ML-SIDE.jpg" alt="Dish wash" />
              <div className="product-name">
                <a href="product.html">DISH WASH 500 ML</a>
              </div>
              <div className="product-price">70₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          

          <div className="product">
              <img className="product-image" src="images/FLOOR-CLEANER-Champa-NEW.jpg" alt="Floor cleaner" />
              <div className="product-name">
                <a href="product.html">FLOOR CLEANER CHAMPA 1 LTR</a>
              </div>
              <div className="product-price">35₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>

            <div className="product">
              <img className="product-image" src="images/FLOOR-CLEANER-CHAMPA-01-1.jpg" alt="Floor cleaner" />
              <div className="product-name">
                <a href="product.html">FLOOR CLEANER CHAMPA 5 LTR</a>
              </div>
              <div className="product-price">175₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>

            <div className="product">
              <img className="product-image" src="images/FLOOR-CLEANER-Jasmin-NEW.jpg" alt="Floor cleaner" />
              <div className="product-name">
                <a href="product.html">FLOOR CLEANER JASMINE 1 LTR</a>
              </div>
              <div className="product-price">35₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>

            <div className="product">
              <img className="product-image" src="images/FLOOR-CLEANER-JASMINE-01.jpg" alt="Floor cleaner" />
              <div className="product-name">
                <a href="product.html">FLOOR CLEANER JASMINE 5 LTR</a>
              </div>
              <div className="product-price">175₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>

            <div className="product">
              <img className="product-image" src="images/Floor-Cleaner-Lemon-1.jpg" alt="Floor cleaner" />
              <div className="product-name">
                <a href="product.html">FLOOR CLEANER LEMON 1 LTR</a>
              </div>
              <div className="product-price">35₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>

            <div className="product">
              <img className="product-image" src="images/FLOOR-CLEANER-lemeon-01.jpg" alt="Floor cleaner" />
              <div className="product-name">
                <a href="product.html">FLOOR CLEANER LEMON 5 LTR</a>
              </div>
              <div className="product-price">175₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>

            <div className="product">
              <img className="product-image" src="images/FLOOR-CLEANER-Nilgiri-new-1.jpg" alt="Floor cleaner" />
              <div className="product-name">
                <a href="product.html">FLOOR CLEANER NILGIRI 1 LTR</a>
              </div>
              <div className="product-price">35₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>

            <div className="product">
              <img className="product-image" src="images/FLOOR-CLEANER-NILGIRI-2.jpg" alt="Floor cleaner" />
              <div className="product-name">
                <a href="product.html">FLOOR CLEANER NILGIRI 5 LTR</a>
              </div>
              <div className="product-price">175₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>

            <div className="product">
              <img className="product-image" src="images/FLOOR-CLEANER-Sandal-1Ltr-NEW-768x768.jpg" alt="Floor cleaner" />
              <div className="product-name">
                <a href="product.html">FLOOR CLEANER SANDAL 1LTR</a>
              </div>
              <div className="product-price">35₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        
            <div className="product">
              <img className="product-image" src="images/FLOOR-CLEANER-SANDAL-2.jpg" alt="Floor cleaner" />
              <div className="product-name">
                <a href="product.html">FLOOR CLEANER SANDAL 5 LTR</a>
              </div>
              <div className="product-price">175₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        
        
            <div className="product">
              <img className="product-image" src="images/Floor-Cleaner-Orginal-Black.jpg" alt="Floor cleaner" />
              <div className="product-name">
                <a href="product.html">FLOOR CLEANER ORIGINAL BLACK 1LTR</a>
              </div>
              <div className="product-price">35₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        
        
            <div className="product">
              <img className="product-image" src="images/HAND-SANITIZER-1Ltr.jpg" alt="Hand sanitizer" />
              <div className="product-name">
                <a href="product.html">HAND SANITIZER 1 LTR</a>
              </div>
              <div className="product-price">399₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        
        
            <div className="product">
              <img className="product-image" src="images/HAND-SANITIZER-100ml-01-1.jpg" alt="Hand sanitizer" />
              <div className="product-name">
                <a href="product.html">HAND SANITIZER 100 ML</a>
              </div>
              <div className="product-price">35₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        
        
            <div className="product">
              <img className="product-image" src="images/HAND-SANITIZER-500ml.jpg" alt="Hand sanitizer" />
              <div className="product-name">
                <a href="product.html">HAND SANITIZER 500 ML</a>
              </div>
              <div className="product-price">199₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        
        
            <div className="product">
              <img className="product-image" src="images/HAND-SANITIZER-5ltr-NEW.jpg" alt="Hand sanitizer" />
              <div className="product-name">
                <a href="product.html">HAND SANITIZER 5 L</a>
              </div>
              <div className="product-price">950₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        
        
            <div className="product">
              <img className="product-image" src="images/HANDWASH GREENAPPLE.jpg" alt="Hand wash" />
              <div className="product-name">
                <a href="product.html">HANDWASH GREENAPPLE 250 ML</a>
              </div>
              <div className="product-price">35₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        
        
            <div className="product">
              <img className="product-image" src="images/Toilet-Cleaner.jpg" alt="Toilet cleaner" />
              <div className="product-name">
                <a href="product.html">TOILET CLEANER 500 ML</a>
              </div>
              <div className="product-price">39₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        
        
            <div className="product">
              <img className="product-image" src="images/Soap-Oil-5ltr-01-300x300.jpg" alt="Soap oil" />
              <div className="product-name">
                <a href="product.html">SOAP OIL 5 LTR</a>
              </div>
              <div className="product-price">149₹</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
        

       </ul>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  );
}

export default products;