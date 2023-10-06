import React                       from "react";
import TextTransition from "react-text-transition";

const TEXTS = [
 "Hi Welcome to SDP Events",
 "You are Watching\n Event Management System",
 "There are a collection\n of Events conducted by us",
];

const TextTrans = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h3>
      <center>
      <TextTransition springConfig>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
      </center>
    </h3>
  );
};
export default TextTrans;