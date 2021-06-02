var hints = [{id: "power15a-h1", type: "hint", dependencies: [], title: "Visualize the expansion", text: "Think about what would result if you expand it?", variabilization: {}}, {id: "power15a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["power15a-h1"], title: "Verifying Power Function Form", text: "Is the function in the form $${kx}^p$$?", choices: ["Yes", "No"], variabilization: {}}, {id: "power15a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["No"], dependencies: ["power15a-h2"], title: "Drawing Conclusions", text: "Does this mean it is a power function?", choices: ["Yes", "No"], variabilization: {}}, {id: "power15a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["power15a-h3"], title: "Verifying Polynomial Form", text: "Is the function in the form $${ax}^p$$ + $${bx}^p-\\left(1\\right)$$ + c?", choices: ["Yes", "No"], variabilization: {}}, ]; export {hints};