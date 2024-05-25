import { useState } from 'react';

export default function Quizscreen() {
  const questions = [
    {
      question: 'Html Stands For____________________________',
      options: [
        'Hyper Text Makeup Language',
        'html',
        'Case Cading Style Sheet',
        'Hypertext markup language',
      ],
      correctAns: 'Hypertext markup language',
    },
    {
      question: 'Css Stands For _______________________',
      options: [
        'Casecading Style Sheet',
        'Java',
        'Ram',
        'Hypertext markup language',
      ],
      correctAns: 'Casecading Style Sheet',
    },
    {
      question: 'Js Stands For _______________________',
      options: ['Java Style', 'Java Script', 'Script', 'Script Src'],
      correctAns: 'Java Script',
    },
    {
      question: 'Dom Stands For _______________________',
      options: ['Document Object Model', 'html', 'Css', 'Java'],
      correctAns: 'Document Object Model',
    },
    {
      question: 'Ram Stands For _______________________',
      options: ['Read Only Memory', 'Dom', 'Random Acccess Memory', 'For Pc'],
      correctAns: 'Random Acccess Memory',
    },
    {
      question: 'Rom Stands For _______________________',
      options: [
        'Hyper Text Markup Language',
        'html',
        'HTml',
        'Read Only Memory',
      ],
      correctAns: 'Read Only Memory',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  // Check currentIndex se pehle ki length se zyada hai ya nahi
  if (currentIndex < questions.length) {
    return (
      <>
        <div className="main">
          <div className="navbar">
            <h1>Quiz Application + Firebase</h1>
            <button className="addQuizBtn">Go to Add Quiz Page</button>
          </div>
          <div className="question-parent">
            <h3>
              Question:{currentIndex + 1}/ {questions.length}
            </h3>
            <h2 id="question">{questions[currentIndex].question}</h2>
          </div>
          <div id="answer-parent">
            {questions[currentIndex].options.map((x, i) => (
              <div key={i} className="answer">
                <button
                  onClick={() => {
                    setCurrentIndex(currentIndex + 1);
                  }}
                >
                  {x}
                </button>
              </div>
            ))}
          </div>
          <div className="btn-div">
            <button>Next</button>
          </div>
        </div>{' '}
      </>
    );
  } else {
    // Agar currentIndex length se zyada hai, toh koi action perform karein
    return (
      <>
        <div className="main">
          <h1>Quiz Completed!</h1>
          {/* Agar aap chahein toh yahaan kuch aur UI add kar sakte hain */}
        </div>
      </>
    );
  }
}
