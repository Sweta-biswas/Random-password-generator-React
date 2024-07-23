import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import statement
import './App.css';
import AuthPage from './AuthPage';
import Navbar from './navbar';
import Footer from './Footer';
import longIcon from './long-icon.svg';
import complexIcon from './complex-Icon.svg';
import uniqueIcon from './unique-Icon.svg';

const App = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(15);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let allChars = '';

    if (includeUppercase) allChars += upperCaseChars;
    if (includeLowercase) allChars += lowerCaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const handleLengthChange = (e) => {
    setPasswordLength(Number(e.target.value));
  };

  const [faqs, setFaqs] = useState([
    {
      question: 'Why should I use a password generator?',
      answer: 'Using a password generator helps you create strong, unique passwords that are hard to guess, reducing the risk of your accounts being hacked.',
      open: false
    },
    {
      question: 'Do I need a unique password for every account?',
      answer: 'Yes, using a unique password for each account ensures that if one password is compromised, your other accounts remain secure.',
      open: false
    },
    {
      question: 'What are the top 10 worst passwords?',
      answer: 'The top 10 worst passwords include "123456", "password", "123456789", "12345678", "12345", "1234567", "1234567890", "qwerty", "abc123", and "111111". Avoid using these passwords.',
      open: false
    },
    {
      question: 'What is the best password generator?',
      answer: 'The best password generator is one that provides strong, unique passwords, is easy to use, and is secure. Avast Password Generator is a great choice.',
      open: false
    },
    {
      question: 'Can a password generator track my passwords?',
      answer: 'No, a password generator typically does not track or store your passwords. Its sole function is to create strong, random passwords for you to use.',
      open: false
    },
    {
      question: 'How often should I change my passwords?',
      answer: 'It is recommended to change your passwords every few months, especially for critical accounts such as email, banking, and social media, to maintain security.',
      open: false
    },
    {
      question: 'Are passwords generated by password generators really random?',
      answer: 'Yes, passwords generated by reputable password generators are designed to be random, using algorithms to ensure they are difficult to predict or crack.',
      open: false
    },
    {
      question: 'Can I use a password generator on my phone?',
      answer: 'Yes, many password generators are available as mobile apps or can be accessed through mobile-friendly websites, making it easy to generate strong passwords on the go.',
      open: false
    },
    {
      question: 'What makes a password strong and secure?',
      answer: 'A strong password is typically at least 12 characters long, includes a mix of uppercase and lowercase letters, numbers, and symbols, and does not contain easily guessable information like names or common words.',
      open: false
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <Router>
      <div className="app">
        <Routes> 
          <Route path="/auth" element={<AuthPage />} /> 
          <Route path="/" element={(
            <>
              <Navbar />
              <header className="header">
                <h1>
                <span className="black-text">Random</span>
                <span className="blue-text"> Password </span>
                <span className="black-text">Generator</span>
                </h1>
                <p>
                <span className="black-text">Create Strong and Secure </span>
                <span className="blue-text">Password </span>
                <span className="black-text">to keep your </span>
                <span className="blue-text">Account Safe Online</span>
                </p>
              </header>
              <div className="password-generator">
                <div className="password-display">
                  <input type="text" value={password} readOnly />
                  <button onClick={generatePassword}>Generate</button>
                </div>
                <div className="password-settings">
                  <label>Password length:</label>
                  <input
                    type="range"
                    min="4"
                    max="32"
                    value={passwordLength}
                    onChange={handleLengthChange}
                  />
                  <span>{passwordLength}</span>
                  <div className="checkboxes">
                    <label>
                      <input
                        type="checkbox"
                        checked={includeUppercase}
                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                      />
                      ABC
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={includeLowercase}
                        onChange={(e) => setIncludeLowercase(e.target.checked)}
                      />
                      abc
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                      />
                      123
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                      />
                      #$&
                    </label>
                  </div>
                </div>
              </div>
              <section className="password-strength">
                <h2>What makes a password strong?</h2>
                <div className="strength-cards">
                  <div className="strength-card">
                    <img src={longIcon} alt="Long" />
                    <h3>Long</h3>
                    <p>The longer a password, the more secure it is. A strong password should be at least 10 characters long.</p>
                  </div>
                  <div className="strength-card">
                    <img src={complexIcon} alt="Complex" />
                    <h3>Complex</h3>
                    <p>Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names.</p>
                  </div>
                  <div className="strength-card">
                    <img src={uniqueIcon} alt="Unique" />
                    <h3>Unique</h3>
                    <p>A strong password should be unique to each account to reduce vulnerability in the event of a hack.</p>
                  </div>
                </div>
              </section>
              <section className="faq">
                <h2>Password generator FAQs</h2>
                <p>Questions about this random password generator? Answers below!</p>
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={"faq-item " + (faq.open ? "open" : "")}
                    onClick={() => toggleFAQ(i)}
                  >
                    <div className="faq-question">
                      {faq.question}
                      <span className="faq-icon">{faq.open ? '-' : '+'}</span>
                    </div>
                    {faq.open && <div className="faq-answer">{faq.answer}</div>}
                  </div>
                ))}
              </section>
              <Footer />
            </>
          )} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
