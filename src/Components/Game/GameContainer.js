import React, { useEffect, useState } from "react";
import { start, getQuestion, getAnswer } from "../ApiCalls";
import { getTitle } from "../../Utils";
import Game from ".";
import { Modal, Card, Button } from "@mui/material";

const GameContainer = () => {
  const [question, setQuestion] = useState();
  const [nextQuestion, setNextQuestion] = useState();
  const [score, setScore] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const startGame = async () => {
    const { numberOfQuestions, firstQuestionId } = await start();
    setNumberOfQuestions(numberOfQuestions);
    setNextQuestion(firstQuestionId);
  };

  useEffect(() => {
    startGame();
  }, []);

  const restart = () => {
    setScore(0);
    setShowModal(false);
    setQuestion(undefined);
    setNumberOfQuestions(0);
    startGame();
  };

  const handleAnswer = async (answer) => {
    const { correctAnswer, nextQuestion } = await getAnswer(question.id);
    if (answer === correctAnswer) {
      setScore(score + (1 / numberOfQuestions) * 100);
    }
    setNextQuestion(nextQuestion);
    if (nextQuestion === null) {
      setShowModal(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuestion(nextQuestion);
      setQuestion(data);
    };
    fetchData();
  }, [nextQuestion]);

  return question ? (
    <>
      {showModal ? (
        <Modal onClose={() => {}} open={true}>
          <Card>
            {getTitle(score)}
            <Card>
              <Button onClick={restart}>Start Over</Button>
            </Card>
          </Card>
        </Modal>
      ) : (
        <Game
          title={question.title}
          answers={question.answers}
          onAnswer={handleAnswer}
          score={score}
        />
      )}
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default GameContainer;
