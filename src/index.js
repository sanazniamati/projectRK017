import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Label, Text, Tag } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Label x={200} y={100} opacity={0.75}>
          <Tag
            fill={"black"}
            pointerDirection={"down"}
            pointerWidth={10}
            pointerHeight={10}
            lineJoin={"round"}
            shadowColor={"black"}
            shadowBlur={10}
            shadowOffsetX={10}
            shadowOffsetY={10}
            shadowOpacity={0.5}
          />
          <Text
            text={"Tooltip pointing down"}
            fontFamily={"Calibri"}
            fontSize={18}
            padding={5}
            fill={"white"}
          />
        </Label>
        {/*label with left pointer*/}
        <Label x={20} y={130} opacity={0.75}>
          <Tag
            fill={"green"}
            pointerDirection={"left"}
            pointerWidth={20}
            pointerHeight={28}
            lineJoin={"round"}
          />
          <Text
            text={"Label pointing left"}
            fontFamily={"Calibri"}
            fontSize={18}
            padding={5}
            fill={"white"}
          />
          {/*  simple label*/}
        </Label>
        <Label x={180} y={190} opacity={0.75}>
          <Tag fill={"yellow"} />
          <Text
            text={"Simple label"}
            fontFamily={"Calibri"}
            fontSize={18}
            padding={5}
            fill={"black"}
          />
        </Label>
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
