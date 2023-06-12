"use client";
import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import exercisesContext from "@/context/exercisesContext";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { LeftArrow, RightArrow, onWheel } from "./Arrows";
import ExerciseCardAlt from "./ExerciseCardAlt";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

interface Props {
  data?: any;
  bodyParts?: any;
}
export default function HorizontalScrollBar({ data, bodyParts }: Props) {
  // export default function HorizontalScrollBar({ data }: Props) {
  const { setBodyPart, bodyPart } = useContext(exercisesContext);
  // console.log({ bodyPart });
  // can save and restore position if needed
  const [position, setPosition] = React.useState(100);
  const restorePosition = React.useCallback(
    ({ scrollContainer }: scrollVisibilityApiType) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft = position;
      }
    },
    [position]
  );

  const savePosition = React.useCallback(
    ({ scrollContainer }: scrollVisibilityApiType) =>
      !!scrollContainer.current &&
      setPosition(scrollContainer.current.scrollLeft),
    []
  );
  return (
    <div className="w-[90vw]">
      <div className=" max-w-7xl mx-auto">
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onInit={restorePosition}
          onScroll={savePosition}
          onWheel={onWheel}
        >
          {data?.map((item: any) => (
            <div
              key={item.id || item}
              itemID={item.id || item}
              title={item.id || item}
              className="mb-5"
            >
              {bodyParts ? (
                <BodyPart item={item} />
              ) : (
                <ExerciseCardAlt exercise={item} />
              )}
            </div>
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
}
