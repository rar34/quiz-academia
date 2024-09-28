"use client"
import React from 'react';
import { useState } from 'react';

const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionChange = (questionId, selectedOptionId) => {
        setUserAnswers({ ...userAnswers, [questionId]: selectedOptionId });
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const handleSubmitQuiz = () => {
        let totalScore = 0;
        quizData.forEach((question) => {
            if (userAnswers[question.questionId] === question.correctOptionId) {
                totalScore += 1;
            }
        });
        setScore(totalScore);
        setShowResults(true);
    };

    if (showResults) {
        return (
            <div className='my-10 container mx-auto min-h-[70vh]'>
                <h1 className='text-3xl text-secondary font-semibold mb-4'>Quiz Results</h1>
                <p className='font-bold'>Your score is: {score} out of {quizData.length}</p>
            </div>
        );
    }

    const currentQuestion = quizData[currentQuestionIndex];
    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl font-bold text-secondary my-10'>Quiz Section</h1>
            <h2 className='text-xl mb-3 font-semibold'>{currentQuestion.questionText}</h2>
            <div className='flex flex-col'>
                {currentQuestion.options.map((option) => (
                    <label className='mb-2' key={option.optionId}>
                        <input className='mr-2'
                            type="radio"
                            name={currentQuestion.questionId}
                            value={option.optionId}
                            checked={userAnswers[currentQuestion.questionId] === option.optionId}
                            onChange={() => handleOptionChange(currentQuestion.questionId, option.optionId)}
                        />
                        {option.optionText}
                    </label>
                ))}
            </div>
            <div>
                {currentQuestionIndex > 0 && (
                    <button className='btn btn-secondary btn-sm mt-4 mb-6' onClick={handlePreviousQuestion}>Previous</button>
                )}
                {currentQuestionIndex < quizData.length - 1 && (
                    <button className='btn btn-secondary btn-sm mt-4 mb-6' onClick={handleNextQuestion}>Next</button>
                )}
                {currentQuestionIndex === quizData.length - 1 && (
                    <button className='btn btn-primary btn-sm mt-4 mb-6 ml-4' onClick={handleSubmitQuiz}>Submit Quiz</button>
                )}
            </div>
        </div>
    );
};

export default QuizPage;

const quizData = [
    {
        questionId: 1,
        questionText: 'What is the capital of France?',
        options: [
            { optionId: 'a', optionText: 'Berlin' },
            { optionId: 'b', optionText: 'Madrid' },
            { optionId: 'c', optionText: 'Paris' },
            { optionId: 'd', optionText: 'Lisbon' }
        ],
        correctOptionId: 'c'
    },
    {
        questionId: 2,
        questionText: 'Which planet is known as the Red Planet?',
        options: [
            { optionId: 'a', optionText: 'Earth' },
            { optionId: 'b', optionText: 'Mars' },
            { optionId: 'c', optionText: 'Jupiter' },
            { optionId: 'd', optionText: 'Saturn' }
        ],
        correctOptionId: 'b'
    },
    // Add more questions as needed
];