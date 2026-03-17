# Set Up AI Tools for Development

<img width="883" height="341" alt="image" src="https://github.com/user-attachments/assets/912d02d8-ae27-4de8-8e6e-da3676c725ce" />

<img width="834" height="427" alt="image" src="https://github.com/user-attachments/assets/2509de60-5646-4071-ae9b-eb538d1b1b94" />

<img width="815" height="533" alt="image" src="https://github.com/user-attachments/assets/75b512f2-507e-4abf-b390-edcb75115943" />

<img width="846" height="477" alt="image" src="https://github.com/user-attachments/assets/1691296f-24e0-48ce-9213-23d8f97d0e5c" />


In this activity, I explored and utilized three AI tools for development, namely GitHub Copilot (VS Code extension), ChatGPT, and Claude. I have prior experience using ChatGPT even before my internship at Focus Bear, but this activity allowed me to more intentionally use these tools for coding, debugging, and understanding new concepts. While I have installed GitHub Copilot in Visual Studio Code, I primarily used ChatGPT and Claude for generating explanations and solving coding-related problems, while Copilot was used occasionally for inline code suggestions.

One concrete example of using AI in coding was when I was working on a React component and needed to fix a state management issue. I used ChatGPT to help debug the problem. Below is a simplified version of the code I worked on:

const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
  setCount(count + 1);
};

I noticed that the value was only increasing by 1 instead of 2. After asking ChatGPT, I learned about state batching in React and was introduced to a better approach using a functional update:

setCount(prev => prev + 1);
setCount(prev => prev + 1);

This was a new concept for me, and it helped me understand how React handles asynchronous state updates. This is an example of how AI helped me not only fix a bug but also learn a deeper concept in React development.

In addition, I used Claude AI to explain unfamiliar code structures and simplify complex logic. For example, I asked Claude to explain how a Redux reducer works, and it provided a step-by-step breakdown of how actions update the state. This helped reinforce my understanding of state management, especially since I am still improving my skills in Redux. Compared to ChatGPT, I noticed that Claude sometimes provides more detailed explanations in paragraph form, which is helpful when trying to understand concepts deeply.

For GitHub Copilot, although I have not used it extensively yet, I was able to test its auto-suggestion feature inside VS Code. For instance, when creating a function, Copilot automatically suggested a full implementation based on the function name. This is useful for speeding up repetitive coding tasks such as creating components or utility functions. However, I realized that Copilot works best when you already have a clear idea of what you want to build, as it mainly assists with code completion rather than explanation.

As evidence of my usage, I have been actively interacting with ChatGPT and Claude during my recent coding sessions, especially while working on debugging and understanding concepts related to React and JavaScript. These interactions typically involve asking questions, pasting code snippets, and requesting explanations or improvements, which reflects real-time use of AI tools in development.

Overall, this experience reinforced the importance of AI as a support tool in coding. I learned that ChatGPT and Claude are highly effective for debugging, learning, and understanding concepts, while GitHub Copilot is more suited for improving coding speed through auto-completion. Moving forward, I plan to integrate all three tools into my workflow using Copilot for faster coding, and ChatGPT and Claude for deeper understanding and problem-solving to become a more efficient and knowledgeable developer.
