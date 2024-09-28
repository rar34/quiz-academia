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
                    <button className='btn btn-secondary btn-sm mt-4 mb-6 mr-4' onClick={handlePreviousQuestion}>Previous</button>
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
        questionText: 'bps এর পূর্ণরুপ কী?',
        options: [
            { optionId: 'a', optionText: 'bit per second' },
            { optionId: 'b', optionText: 'byte per second' },
            { optionId: 'c', optionText: 'binary per second' },
            { optionId: 'd', optionText: 'bit per system' }
        ],
        correctOptionId: 'a'
    },
    {
        questionId: 2,
        questionText: 'ডেটা কমিউনিকেশনের মূল উপাদান কয়টি?',
        options: [
            { optionId: 'a', optionText: '৫টি' },
            { optionId: 'b', optionText: '৩টি' },
            { optionId: 'c', optionText: '৭টি' },
            { optionId: 'd', optionText: '৪টি' }
        ],
        correctOptionId: 'a'
    },
    {
        questionId: 3,
        questionText: 'নিচের কোনটিতে সাধারণত Infrared সিগনাল ব্যবহার করা হয় ?',
        options: [
            { optionId: 'a', optionText: 'WAN' },
            { optionId: 'b', optionText: 'LAN' },
            { optionId: 'c', optionText: 'TV Remote Control' },
            { optionId: 'd', optionText: 'Communication' }
        ],
        correctOptionId: 'c'
    },
    {
        questionId: 4,
        questionText: 'যখন কপার তারসমুহ প্যাঁচানো অবস্থায় থাকে তখন ফলাফল কি হয়?',
        options: [
            { optionId: 'a', optionText: 'EMI কমে' },
            { optionId: 'b', optionText: 'পরিবাহিতা কমে' },
            { optionId: 'c', optionText: 'রোধ কমে' },
            { optionId: 'd', optionText: 'তার স্থায়ী হয়' }
        ],
        correctOptionId: 'a'
    },
    {
        questionId: 5,
        questionText: 'Co-oxial Cable কে EMI থেকে রক্ষার জন্য ব্যবহৃত হয় ?',
        options: [
            { optionId: 'a', optionText: 'ইনসুলেটর' },
            { optionId: 'b', optionText: 'মেটালিক ফরেন' },
            { optionId: 'c', optionText: 'মেটালিক শিল্ড' },
            { optionId: 'd', optionText: 'জ্যাকেট' }
        ],
        correctOptionId: 'c'
    },
    {
        questionId: 6,
        questionText: 'ডেটা স্থানান্তরের হারকে বলে?',
        options: [
            { optionId: 'a', optionText: 'ব্যান্ড মিটার' },
            { optionId: 'b', optionText: 'ব্যান্ড উইথ' },
            { optionId: 'c', optionText: 'ডেটা ট্রান্সমিশন' },
            { optionId: 'd', optionText: 'ডেটা কানেকশন' }
        ],
        correctOptionId: 'b'
    },
    {
        questionId: 7,
        questionText: 'নিচের কোনটি অ্যাসিনক্রোনাস ট্রান্সমিশন বুঝায়?',
        options: [
            { optionId: 'a', optionText: 'স্টার্ট/স্টপ ট্রান্সমিশন' },
            { optionId: 'b', optionText: 'স্টপ ট্রান্সমিশন' },
            { optionId: 'c', optionText: 'স্টার্ট ট্রান্সমিশন' },
            { optionId: 'd', optionText: 'লিনিয়ার ট্রান্সমিশন' }
        ],
        correctOptionId: 'a'
    },
    {
        questionId: 8,
        questionText: 'ন্যারো ব্রান্ডে সর্বোচ্চ ডেটা স্পিড কত bps?',
        options: [
            { optionId: 'a', optionText: '৩৫' },
            { optionId: 'b', optionText: '৪৫' },
            { optionId: 'c', optionText: '২০০' },
            { optionId: 'd', optionText: '৩০০' }
        ],
        correctOptionId: 'd'
    },
    {
        questionId: 9,
        questionText: 'একটি চ্যানেল দিয়ে ৩ সেকেন্ডে ৮১০০ বিট স্থানান্তরিত হলে তার ব্যান্ডউইথ কত?',
        options: [
            { optionId: 'a', optionText: '৬০০ bps' },
            { optionId: 'b', optionText: '১৮০০ bps' },
            { optionId: 'c', optionText: '২৭০০ bps' },
            { optionId: 'd', optionText: '৫৪০০ bps' }
        ],
        correctOptionId: 'c'
    },
    {
        questionId: 10,
        questionText: ' ভয়েস ব্যান্ড এর সর্বোচ্চ গতি কত?',
        options: [
            { optionId: 'a', optionText: '6900 bps' },
            { optionId: 'b', optionText: '6900 kbps' },
            { optionId: 'c', optionText: '9600 bps' },
            { optionId: 'd', optionText: '9600 kbps' }
        ],
        correctOptionId: 'c'
    },
    
];