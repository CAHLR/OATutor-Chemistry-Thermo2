var hints = [{id: "FunNota15d-h1", type: "hint", dependencies: [], title: "Evaluating functions", text: "Given the equation for a function, we should replace the input variable in the equation with the value provided and then calculate the result.", variabilization: {}}, {id: "FunNota15d-h2", type: "hint", dependencies: ["FunNota15d-h1"], title: "Replacement", text: "Replace the variable x with a, and we get $$-f(a)=-(2a-5)$$.", variabilization: {}}, {id: "FunNota15d-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-2a+5"], dependencies: ["FunNota15d-h2"], title: "Simplification", text: "Simplify the expression -(2a-5). What do you get?", variabilization: {}}, ]; export {hints};