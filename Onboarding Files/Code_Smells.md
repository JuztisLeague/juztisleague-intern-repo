# Identifying & Fixing Code Smells

Code smells that I find in my code are Magic Numbers & Strings, Long Functions, and Duplicate Code. As a coder or a developer, I do have tendencies and habits that show this code smells. I never really do it on purpose, but it's also my way to really understand the logic of the code. Once I have learned the logic, I then revise the code to something much more efficient and reliable. 

Well, refactoring improves the readability and maintainability of the code because it's now much simpler and easier to understand. If I stick to my habits in coding, other developers might not understand the program I created since it is long and inefficient in terms of run time. I do try my best to resolve these habits.

Code smells are a minor problem that can lead to a bigger issue once being seen later on. Avoiding is a way to improve debugging since minor coding problems have been taken away, which makes way for people to understand the code faster and easier. It is easy to debug since it is more uniform and consistent. 

Magic Numbers & Strings – Using hardcoded values instead of constants.
Sample:

<img width="216" height="109" alt="Image" src="https://github.com/user-attachments/assets/756e4e7c-13b9-4611-bd81-d6e990ddc1f8" />

Solution:

<img width="277" height="167" alt="Image" src="https://github.com/user-attachments/assets/73539769-b7b0-464b-a666-70bbc849ab6e" />

Long Functions – Functions that do too much and should be broken into smaller parts.
Sample:

<img width="520" height="223" alt="Image" src="https://github.com/user-attachments/assets/99fadbea-43f3-4f35-890b-5268f7aff4c6" />

Solution:

<img width="634" height="483" alt="Image" src="https://github.com/user-attachments/assets/5fb74f75-3e77-4f68-9d1a-37e59c57e0fa" />

Duplicate Code – Copy-pasting logic instead of reusing functions.
Sample:

<img width="521" height="222" alt="Image" src="https://github.com/user-attachments/assets/de410202-34bd-4ef9-a7ca-9fb79fa238ff" />

Solution:

<img width="522" height="197" alt="Image" src="https://github.com/user-attachments/assets/79ae32b5-9ab1-4bab-8334-38aaa3bb995f" />

Large Classes (God Objects) – Classes that handle too many responsibilities.
Sample:

<img width="277" height="201" alt="Image" src="https://github.com/user-attachments/assets/53943bf9-8ebc-4443-a42c-3a0f952d0c87" />

Solution:

<img width="328" height="397" alt="Image" src="https://github.com/user-attachments/assets/6eed097c-75bb-4c94-8bc1-2e38249fca1f" />

Deeply Nested Conditionals – Complex if/else trees that make code harder to follow.
Sample:

<img width="511" height="369" alt="Image" src="https://github.com/user-attachments/assets/93a37521-7dff-4caa-b2d4-573e7982059b" />

Solution:

<img width="690" height="166" alt="Image" src="https://github.com/user-attachments/assets/f11ebc06-5476-4d94-8248-60b3e4f8e500" />

Commented-Out Code – Unused code that clutters the codebase.
Sample:

<img width="429" height="211" alt="Image" src="https://github.com/user-attachments/assets/6656a58c-6b55-49a4-8722-4a638c1e40de" />

Solution:

<img width="407" height="145" alt="Image" src="https://github.com/user-attachments/assets/f40643ba-93b1-4194-b62e-30fc0ffde099" />

Inconsistent Naming – Variable names that don't clearly describe their purpose.
Sample:

<img width="472" height="243" alt="Image" src="https://github.com/user-attachments/assets/f3e39f6f-9d6e-41b0-b384-4f09b81cc7ba" />

Solution:

<img width="485" height="240" alt="Image" src="https://github.com/user-attachments/assets/d0ad4c60-94c9-480c-90d2-1234bc64a0ea" />
