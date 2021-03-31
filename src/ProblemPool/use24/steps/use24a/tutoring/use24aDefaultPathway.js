var hints = [{id: "use24a-h1", type: "hint", dependencies: [], title: "Using PEMDAS", text: "The Order of Operations, PEMDAS, is Parenthese, Exponents, Multiplication, Division, Addition, and Subtraction."}, {id: "use24a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["use24a-h1"], title: "P-Parentheses", text: "Are there any parentheses?", choices: ["Yes", "No"]}, {id: "use24a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["use24a-h2"], title: "First Operation", text: "What is 4-2?"}, {id: "use24a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["use24a-h3"], title: "Second Operation", text: "What is 3(4-2)?"}, {id: "use24a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["use24a-h4"], title: "Third Operation", text: "What is 6 subtracted by the result of the second operation? This is equal to 6-3(4-2)."}, {id: "use24a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["use24a-h5"], title: "E-Exponents", text: "Are there any exponents?", choices: ["Yes", "No"]}, {id: "use24a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["use24a-h6"], title: "Fourth Operation", text: "What is $${\\left(2\\right)}^3$$?"}, {id: "use24a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["use24a-h7"], title: "MD- Multiplication or Division", text: "Is there any multiplication or division?", choices: ["Yes", "No"]}, {id: "use24a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["use24a-h8"], title: "Fifth Operation", text: "What is 3 times the result of the third operation?"}, {id: "use24a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["use24a-h9"], title: "AS- Addition or Subtraction", text: "Is there any addition or subtraction?", choices: ["Yes", "No"]}, {id: "use24a-h11", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["13"], dependencies: ["use24a-h10"], title: "Sixth Operation", text: "What is $$\\left(5\\right)+\\left(8\\right)+\\left(0\\right)$$?"}, ]; export {hints};