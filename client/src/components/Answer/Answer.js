import * as React from "react";
import { Usercard } from "../Usercard/Usercard";
//import { styled } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// // import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// //import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// // import Typography from "@material-ui/core/Typography";
// // import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import Delete from "@material-ui/icons/Delete";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// //import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import {
  AnswerBody,
  AnswerContent,
  AnswerFooter,
  AnswerHeader,
  BodyTxt,
  TxtHeader,
  FilterContainer,
  Txt,
  Icon,
  VotesContainer,
  VoteUp,
  VoteDown,
} from "./AnswerStyle.js";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export const Answer = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <AnswerHeader>
        <TxtHeader>Answers</TxtHeader>
        <FilterContainer>
          <TxtHeader>Filters here</TxtHeader>
        </FilterContainer>
      </AnswerHeader>
      <AnswerBody>
        <VotesContainer>
          <Icon>
            <VoteUp />
          </Icon>
          <Txt>211</Txt>
          <Icon>
            <VoteDown />
          </Icon>
        </VotesContainer>
        <AnswerContent>
          <Usercard name="Java JJ" created_at="Asked 4days ago" />
          <BodyTxt>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </BodyTxt>
        </AnswerContent>
      </AnswerBody>
      <AnswerFooter>
        <Txt color="red">Delete</Txt>
      </AnswerFooter>
      {/* 
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </AnswerFooter>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <AnswerBody>
            <VotesContainer>
              <Icon>
                <VoteUp />
              </Icon>
              <Txt>211</Txt>
              <Icon>
                <VoteDown />
              </Icon>
            </VotesContainer>
            <AnswerContent>
              <Usercard name="Java JJ" created_at="Asked 4days ago" />
              <BodyTxt>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </BodyTxt>
            </AnswerContent>
          </AnswerBody>
          <AnswerFooter>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </AnswerFooter>
        </CardContent>
      </Collapse> */}
    </div>
  );
};
