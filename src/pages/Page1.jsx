import React, { useEffect, useState } from "react";
import { Button, Hidden } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SystemUpdateAltRoundedIcon from "@mui/icons-material/SystemUpdateAltRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Avatar from "@mui/material/Avatar";
import EmojiPicker from "emoji-picker-react";

const Page1 = () => {
  const [openComment, setOpenComment] = useState(true);
  const [selectedEmoji, setSelectedEmoji] = useState("1f60a");
  const [inputValue, setInputValue] = useState("");
  const [commentState, setCommentState] = useState(false);
  const [emojiActive,setEmojiActive] = useState(false);

  function onClick(emojiData, event) {
    setInputValue(
      (inputValue) =>
        inputValue + (emojiData.isCustom ? emojiData.unified : emojiData.emoji)
    );
    setSelectedEmoji(emojiData.unified);
  }
  const buttonSx = {
    // width:'20px',
    borderRadius: "50%",
    color: "black",
    height: "60px",
    // border:'2px solid black'
  };

  const commentsApi = [
    {
      comment: "This is a great post!",
      likes: 12,
      date: "2023-09-26",
      username: "user123",
    },
    {
      comment: "I love the content on this website!",
      likes: 8,
      date: "2023-09-25",
      username: "webuser45",
    },
    {
      comment: "Keep up the good work!",
      likes: 15,
      date: "2023-09-24",
      username: "visitor22",
    },
    {
      comment: "Fantastic article! Thanks for sharing.",
      likes: 10,
      date: "2023-09-23",
      username: "reader007",
    },
    {
      comment: "This is very informative. I learned a lot!",
      likes: 6,
      date: "2023-09-22",
      username: "knowledgeSeeker",
    },
    {
      comment: "I can't wait to see more from you!",
      likes: 7,
      date: "2023-09-21",
      username: "enthusiast85",
    },
    {
      comment: "Your website is my go-to source for information!",
      likes: 9,
      date: "2023-09-20",
      username: "infoBuff",
    },
    {
      comment: "I shared this with my friends. They loved it too!",
      likes: 11,
      date: "2023-09-19",
      username: "socialSharer",
    },
    {
      comment: "The design of your website is amazing!",
      likes: 13,
      date: "2023-09-18",
      username: "designFanatic",
    },
    {
      comment: "I'm a regular visitor here. Your content never disappoints.",
      likes: 14,
      date: "2023-09-17",
      username: "loyalFollower",
    },
  ];

  // You now have 10 comments in the commentsApi array.
 useEffect(()=>{
  window.onscroll=()=>{
    setEmojiActive(false)
  }
 },[])
  return (
    <div className="page1_container">
      <div className="size_manager">
        <div className="left">
          <div className="video_container"></div>
        </div>
        <div className="right">
          <div className="content_bar">
            <div className="content_left">
              <Button sx={buttonSx} variant="text">
                <MoreHorizRoundedIcon fontSize="large" />
              </Button>
              <Button sx={{ ...buttonSx, rotate: "180deg" }} variant="text">
                <SystemUpdateAltIcon fontSize="large" />
              </Button>
            </div>
            <div className="content_right">
              <Button
                sx={{
                  height: "60px",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                variant="text"
              >
                Anil <KeyboardArrowDownRoundedIcon />
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  width: "80px",
                  padding: "10px",
                  ":hover": { backgroundColor: "darkred" },
                }}
              >
                Save
              </Button>
            </div>
          </div>
          <div
            className="owner_specification"
            style={{
              overflowY: `${!openComment ? "hidden" : "scroll"}`,
            }}
          >
            <div className="detail_container">
              <a href="#">dribble.com</a>
              <h1>WEBSITE UI/UX DESIGN</h1>
              <p>
                tudio VØR | Multi-disciplinary creative studio. We design
                solutions for business problems. No project is too ambitious.
                hey@vorstud.io | Connect with them on Dribbble; the global
                community for designers and creative professionals...
                <Button variant="text" sx={{ color: "black" }}>
                  more
                </Button>
              </p>
            </div>
            <div className="content_owner_thumbnail">
              <div className="profile">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pinimg.com/75x75_RS/6a/e9/29/6ae929a3a8fc410a085acb216a02e122.jpg"
                  sx={{ width: 56, height: 56 }}
                />
                <span>
                  Royalz Creation <br /> 37.4k followers
                </span>
              </div>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(0,0,0,.1)",
                  borderRadius: "30px",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  width: "90px",
                  padding: "10px",
                  boxShadow: "none",
                  color: "black",
                  ":hover": {
                    backgroundColor: "rgba(0,0,0,.2)",
                  },
                }}
              >
                Follow
              </Button>
            </div>
            <div className="comments_data">
              <h3
                onClick={() => {
                  setOpenComment(!openComment);
                }}
              >
                Comments{" "}
                {openComment ? (
                  <KeyboardArrowDownRoundedIcon fontSize="large" />
                ) : (
                  <KeyboardArrowUpRoundedIcon fontSize="large" />
                )}
              </h3>
              <div className="user_comments">
                {openComment &&
                  commentsApi.map((elem, index) => {
                    return (
                      <div key={index} className="individual_comments">
                        <div className="up_content">
                          <span className="avatar">
                            <Avatar
                              alt="Remy Sharp"
                              src="https://i.pinimg.com/75x75_RS/6a/e9/29/6ae929a3a8fc410a085acb216a02e122.jpg"
                              sx={{ width: 24, height: 24 }}
                            />
                            <h4>{elem.username}</h4>
                          </span>
                          <p>{elem.comment}</p>
                          <Button
                            sx={{
                              height: "30px",
                              borderRadius: "50px",
                              color: "black",
                            }}
                          >
                            <MoreHorizRoundedIcon
                              sx={{ mx: "10px", cursor: "pointer" }}
                            />
                          </Button>
                        </div>
                        <div className="like_year_date">
                          <span className="time">{elem.date}</span>
                          <span className="likes">
                            <FavoriteRoundedIcon className="likeIcon" />
                            {elem.likes}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="comment_input">
            <div className="comment_detail">
              <h3>{commentsApi.length} comments</h3>
              <FavoriteRoundedIcon fontSize="large" sx={{
                cursor:'pointer',
                transition:'.3s',
                color:'rgba(0,0,0,.2)',
                ":hover":{
                  color:'red',
                  scale:'1.2'
                }
              }}/>
            </div>
            <div className="comment_inter">
              <Button
                variant="contained"
                sx={{
                  height: "60px",
                  borderRadius: "50%",
                  fontWeight: "bold",
                  fontSize: "20px",
                  bgcolor: "rgba(0,0,0,.1)",
                  color: "black",
                  boxShadow: "none",
                  mx: "5px",
                  ":hover": {
                    bgcolor: "rgba(0,0,0,.2)",
                  },
                }}
              >
                A
              </Button>
              <div className="comment_control">
                <input
                  className="in_com"
                  placeholder="Add a comment...."
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value)}}
                  onKeyDown={() => {
                    setCommentState(true);
                  }}
                />
                <Button
                  sx={{
                    height: "60px",
                    borderRadius: "50%",
                    fontSize: "30px",
                    color: "black",
                  }}
                  onClick={()=> setEmojiActive(!emojiActive)}
                >
                  😀
               </Button>
                {commentState && inputValue.length != 0 ? (
                  <Button
                    variant="contained"
                    sx={{
                      height: "40px",
                      borderRadius: "50px",
                      bgcolor: "red",
                      mx: "10px",
                    }}
                  >
                    <SendRoundedIcon />
                  </Button>
                ) : null}
              </div>
            </div>
            {emojiActive && (
              <div className="emoji_holder">
                <EmojiPicker onEmojiClick={onClick}/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
