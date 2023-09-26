import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import SaveAltRoundedIcon from "@mui/icons-material/SaveAltRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Button from "@mui/material/Button";
const Page1Second = () => {
  const [arrLength,setArrLength] = useState(20);
  const contentApi = Array.from({ length: arrLength }, (_, i) => i + 1);
  console.log(contentApi);

  function getRandomNumber(min, max) {
    // Generate a random number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="content_page_load">
      <div className="size_manager">
        <header>
          <h3>More like this</h3>
        </header>
        <div className="photo-gallery">
          {[1, 2, 3, 4, 5].map((elem, index) => {
            return (
              <div className="column">
                {contentApi.map((elem, index) => {
                  const createRandomObject = () => {
                    const randomX = getRandomNumber(200, 300);
                    const randomY = getRandomNumber(250, 400);

                    const randomObject = {
                      x: randomX,
                      y: randomY,
                    };
                    return randomObject;
                  };
                  const randomObj = createRandomObject();
                  return (
                    <div className="photo" key={index}>
                      <img
                        src={`https://picsum.photos/${randomObj.x}/${randomObj.y}`}
                        alt={`image${index}`}
                      />
                      <span className="img_cover">
                        <div className="top_selector">
                          <span className="current_user">
                            Anil
                            <KeyboardArrowDownRoundedIcon />
                          </span>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "red",
                              borderRadius: "30px",
                              fontWeight: "bold",
                              fontSize: "14px",
                              width: "60px",
                              padding: "5px",
                              ":hover": { backgroundColor: "darkred" },
                            }}
                          >
                            Save
                          </Button>
                        </div>
                        <div className="bottom_selector">
                          <button>
                            <ArrowOutwardRoundedIcon />
                            fiverr.com
                          </button>
                          <SaveAltRoundedIcon
                            sx={{
                              color: "black",
                              bgcolor: "white",
                              borderRadius: "50%",
                              rotate: "180deg",
                              mx: "5px",
                            }}
                            fontSize="medium"
                          />
                          <MoreHorizRoundedIcon
                            sx={{
                              color: "black",
                              bgcolor: "white",
                              borderRadius: "50%",
                              mx: "10px",
                            }}
                            fontSize="medium"
                          />
                        </div>
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <Button sx={{color:'red',}} onClick={()=>{
          setArrLength(arrLength + 5)
        }}>Show More..</Button>
      </div>
    </div>
  );
};

export default Page1Second;
