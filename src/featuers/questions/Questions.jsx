import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "./questiosSlice";

const Questions = () => {
  const state = useSelector((state) => state);
  const questions = useSelector((state) => state.questions.data);
  const loading = useSelector((state) => state.questions.loading);
  console.log(state);
  console.log("questions>>", questions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);
  if (loading === true) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((quest) => (
          <li key={quest.id}>{quest.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
