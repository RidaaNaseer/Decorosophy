import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

const Sidebar = ({ onSelectCategory, onSelectSubcategory }) => {
  const [openCategories, setOpenCategories] = useState({
    furniture: false,
    vases: false,
    candles: false,
    lights: false,
    art: false,
  });

  const toggleCategory = (category) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    toggleCategory(category.toLowerCase());
  };

  const handleSubcategoryClick = (subcategory) => {
    onSelectSubcategory(subcategory);
  };

  return (
    <>
      <style>
        {`
    .sidebar-button {
      background-color: transparent;
      color: #333;
      border: none;
      text-align: left;
      padding: 10px;
      width: 100%;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
    }

    .sidebar-button:hover {
      background-color: #e0e0e0;
      color: #000;
    }

    .sidebar-button span {
      float: right;
    }
    
   
   
    .subcategory-item {
      cursor: pointer;
    }

    .subcategory-item:hover {
      color: #000;
      text-decoration: underline;
    }
  `}
      </style>

      <div className="sidebar p-4 border-end">
        <h5>Products</h5>
        <ul className="list-unstyled">
          <Button
            className="d-flex justify-content-between align-items-center sidebar-button"
            onClick={() => handleCategoryClick("Furniture")}
            aria-controls="furniture-subcategories"
            aria-expanded={openCategories.furniture}
          >
            Furniture
            <span>{openCategories.furniture ? "-" : "+"}</span>
          </Button>
          <Collapse in={openCategories.furniture}>
            <div id="furniture-subcategories">
              <ul className="list-unstyled ms-4">
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("Sofa")}
                >
                  Sofa
                </li>
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("Beds")}
                >
                  Beds
                </li>
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("Tables")}
                >
                  Tables
                </li>
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("Chairs")}
                >
                  Chairs
                </li>
              </ul>
            </div>
          </Collapse>

          <Button
            className="d-flex justify-content-between align-items-center sidebar-button"
            onClick={() => handleCategoryClick("Vases")}
            aria-controls="vases-subcategories"
            aria-expanded={openCategories.vases}
          >
            Vases
            <span>{openCategories.vases ? "-" : "+"}</span>
          </Button>
          <Collapse in={openCategories.vases}>
            <div id="vases-subcategories">
              <ul className="list-unstyled ms-4">
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("DVases")}
                >
                  Decorative Vases
                </li>
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("FVases")}
                >
                  Flower Vases
                </li>
              </ul>
            </div>
          </Collapse>

          <Button
            className="d-flex justify-content-between align-items-center sidebar-button"
            onClick={() => handleCategoryClick("Candles")}
            aria-controls="candles-subcategories"
            aria-expanded={openCategories.candles}
          >
            Candles
            <span>{openCategories.candles ? "-" : "+"}</span>
          </Button>
          <Collapse in={openCategories.candles}>
            <div id="candles-subcategories">
              <ul className="list-unstyled ms-4">
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("SCandles")}
                >
                  Scented Candles
                </li>
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("DCandles")}
                >
                  Decorative Candles
                </li>
              </ul>
            </div>
          </Collapse>

          <Button
            className="d-flex justify-content-between align-items-center sidebar-button"
            onClick={() => handleCategoryClick("Lights")}
            aria-controls="lights-subcategories"
            aria-expanded={openCategories.lights}
          >
            Lights
            <span>{openCategories.lights ? "-" : "+"}</span>
          </Button>
          <Collapse in={openCategories.lights}>
            <div id="lights-subcategories">
              <ul className="list-unstyled ms-4">
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("CLights")}
                >
                  Ceiling Lights
                </li>
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("TLights")}
                >
                  Table Lamps
                </li>
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("FLights")}
                >
                  Floor Lamps
                </li>
              </ul>
            </div>
          </Collapse>

          <Button
            className="d-flex justify-content-between align-items-center sidebar-button"
            onClick={() => handleCategoryClick("Art")}
            aria-controls="art-subcategories"
            aria-expanded={openCategories.art}
          >
            Art
            <span>{openCategories.art ? "-" : "+"}</span>
          </Button>
          <Collapse in={openCategories.art}>
            <div id="art-subcategories">
              <ul className="list-unstyled ms-4">
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("Paintings")}
                >
                  Paintings
                </li>
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("Sculps")}
                >
                  Sculptures
                </li>
                <li
                  className="subcategory-item"
                  onClick={() => handleSubcategoryClick("Frames")}
                >
                  Frames
                </li>
              </ul>
            </div>
          </Collapse>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
