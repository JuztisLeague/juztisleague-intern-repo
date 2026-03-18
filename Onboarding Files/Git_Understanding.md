# Creating & Reviewing Pull Requests


<img width="865" height="636" alt="Image" src="https://github.com/user-attachments/assets/09208336-8bd9-4c96-9103-4b1959ea2db7" />

Pull Requests are essential in collaborative development, especially in remote teams where contributors work across different time zones and locations. A PR creates a structured checkpoint where peers and mentors can review, question, and debug code before it becomes part of the main application, reducing errors and improving overall code quality.
Evidence of completed steps:
As shown in the screenshot, I completed the full PR workflow on the internship repository:

Branch creation & changes: I created a branch test_1 and made changes to the README file, specifically adding a line of text with personal details and internship information (commit: "Revise README with personal details and internship info") and adding an onboarding test branch description (commit: "Add onboarding test branch description").
Opening a PR with a clear description: PR #64 titled "Revised Readme File Description" was opened with a structured description outlining the changes made and the purpose of practicing the GitHub branching and Pull Request workflow.
Requesting feedback: The PR was reviewed and checked by Piolo, who provided feedback on the necessary changes before approval.
Merging & deleting the branch: As confirmed in the screenshot, the PR was successfully merged (2 commits into main from test_1), with both commits marked as Verified.

What I learned:
A well-structured PR is more than just submitting code; it is about communicating your changes clearly so that reviewers can understand the purpose, scope, and impact without needing to ask for clarification. Writing a proper title and description, as I did in PR #64, makes it significantly easier for teammates and supervisors to review efficiently. Going through this hands-on exercise reinforced that the PR process is what keeps collaborative codebases clean, organized, and error-free before changes ever reach production.

# Writing Meaningful Commit Messages

A good commit message is a well-structured message that answers What, Where, and Why questions regarding the code you added or fixed. Usually, professionals use a format that has a short description, fix, feat, and refactor. 

Commit messages are important in order for the other team to realize and understand the description of every commit you make. Having a lot of developers and lots of commits, however, there are no messages in every commit. This causes the lack of backtracking to what codes were added to the main program, and this will cause issues in the future.
How can poor commit messages cause issues later?

Poor commit messages cause misinformation and the lack of determining the commits during backtracking. You also wait for the time of your supervisor or peers on what to fix or refactor in your commit due to a lack of information. 

<img width="819" height="277" alt="Image" src="https://github.com/user-attachments/assets/72787862-779d-40bd-8e2c-7699781d9c00" />

Evidence of commits made:
As visible in the screenshot from PR #64 on the internship repository, the following commits were made on branch test_1:

Commit d96aebc "Add onboarding test branch description" this is a well-structured commit message. It clearly states what was added and where, making it easy for any reviewer to understand the change without opening the diff.
Commit 03ecb6c "Revise README with personal details and internship info" this is an overly detailed style, describing multiple changes in one message. While it provides context, combining unrelated changes (personal details + internship info) into one commit makes it harder to isolate specific changes during backtracking.

Both commits are marked as Verified and were successfully merged into main via PR #64.

# Debugging with git bisect
Git bisect is the ability to recognize and detect the possible causes of bugs on all the different commits you have made. This command makes it easier for you to determine which commit causes the bug in your program.  
 
You use this especially when you have a lot of developers working on one application. They would commit different code into the main program, and you can't track what causes the bug. Using this method, you can quickly discover the bugs that are needed to be changed.

Manually reviewing commits is very time-consuming, especially for an application with a lot of developers. This causes confusion in checking the different commits manually, rather than using a tool or command that can easily check the different commits that your developer posted for bugs. 

<img width="530" height="550" alt="Image" src="https://github.com/user-attachments/assets/3a4730a2-5cf9-4baa-a4a3-3d15cc7c267d" />

<img width="527" height="183" alt="Image" src="https://github.com/user-attachments/assets/9bbb53d5-4518-421a-9e9e-9fe377d61f13" />

Evidence of completed steps:
As shown in the screenshots, I successfully ran git bisect on the actual internship repository (juztisleague-intern-repo) on branch test_1:

Initiated bisect with git bisect start
Marked the bad commit using git bisect bad HEAD pointing to the most recent commit ce11f72 ("feature Logging Activity")
Marked the good commit using git bisect good d2a7445 the oldest commit ("Create AI Usage Guidelines for Mobile Development")
Git responded with: "Bisecting: 15 revisions left to test after this (roughly 4 steps)" and automatically checked out the middle commit 4e01c37 ("Feature added Axios Activity") confirming the binary search was actively running across my real commit history of 30+ commits

# Advanced Git Commands & When to Use Them

**git checkout** - this command restores one file from your main branch without you touching other files.

git checkout allows you to restore a single file from another branch without affecting any other files in your working directory. In practice, I used this command to restore the _layout.tsx file from the main branch after it had been modified:

<img width="742" height="33" alt="Image" src="https://github.com/user-attachments/assets/7a57371e-fdcb-4379-b402-e059b0f62ae9" />

What surprised me about this command is that it is surgical; every other file I was working on stayed completely untouched. This is especially useful in real projects when you accidentally overwrite a file or introduce breaking changes to one specific file and just need to roll it back cleanly without doing a full branch reset.

**git cherry pick** - this command copies one commit from the other branch.

git cherry-pick lets you copy a single commit from one branch and apply it to another, without merging everything else. Using my internship repo, I cherry-picked the onboarding description commit from test_1 into another branch:

<img width="510" height="35" alt="Image" src="https://github.com/user-attachments/assets/46abc345-d8e1-4e8a-9fec-729c638eeeec" />

Commit d96aebc "Add onboarding test branch description" was selectively applied without pulling in any of the surrounding commits. What surprised me here was that cherry-pick creates a brand new commit hash for the copied commit, meaning the histories of both branches stay independent even though they now share the same change.

**git log** - this shows the different commit history you have made.

git log displays the full commit history of the repository. Running it with --oneline in the internship repo gave a clean summary of all 30+ commits:

<img width="530" height="550" alt="Image" src="https://github.com/user-attachments/assets/3a4730a2-5cf9-4baa-a4a3-3d15cc7c267d" />

This was directly useful during the git bisect activity. I used the output of git log --oneline to identify d2a7445 as the oldest good commit and HEAD as the bad commit to begin the binary search. Seeing 30+ commits laid out in one view made it clear just how much work had accumulated across different activities.

**git blame** - shows the user who changed each line and when that line was changed.

git blame shows the author and timestamp of every single line in a file. I ran it against the README file in the internship repo:

<img width="483" height="33" alt="Image" src="https://github.com/user-attachments/assets/583771ff-d171-4eec-9a01-6bf106be7c7e" />

The output revealed exactly which lines were added by which commit, including commit 03ecb6c ("Revise README with personal details and internship info"), showing my own additions line by line with the timestamp.
This was the most surprising command of the four. I expected it to show general file history, but it goes down to the individual line level, meaning in a large team project, you can pinpoint not just who introduced a bug, but the exact line and the exact moment it was written. For long-running applications with many contributors, this removes all guesswork from debugging and code reviews entirely.

Well, using these files in a real time projects is when you have long-running projects, since what happens is that many collaborators come in to edit the code, and this causes confusion about the different commits and the causes of the bugs in your system. In this way, you can easily track who and when the commits have been made and determine which commits cause the bugs. You can even restore a file if it is corrupted.

The one that surprises me is the git blame command, since this is very useful for the developers, especially those who have a long-running application. This has the ability to determine who changed the line and when it was changed. This is very useful, especially in determining what causes the bug in your application.

#  Merge Conflicts & Conflict Resolution

Conflict occurs when different symbols or content appear in the same file. This makes Git confused about which branch has the right content and which file to keep, since both branches have different information. 

Opening my Git Desktop client to check where or which part of the file has the conflict, this usually has conflict markers shown, and this is easily determined. Once it is determined, I then manually edit the file to have its correct version.

I have learned that merge conflicts occur when a file in different branches has different code content. This causes problems, especially during many improvements and changes to the program, and then merging the code to the main branch. I also learned that to fix these conflicts, you need to edit the file itself in order to align with the other file once you merge them.

# Branching & Team Collaboration

It is problematic to push directly to the main branch because it usually has the stable and production-ready version of the project. If you push code that has bugs, it will break the entire project. This will affect the team's efforts to make the main branch.

Branches help with reviewing code since this allows developers to work on their changes separately from the main branch. Once the changes are complete, the developers then creates its pull request in order for other developers to review and check for possible bugs or improvements. This is in order for the process of development to ensure quality and efficiency. 

If two people edit the same file on different branches, Git will try to merge the changes when the branches are combined. However, if both people edit on the same line merge conflict will occur because Git can't decide which change to keep, and the developers must manually fix this problem.

# Staging vs. Committing
Staging is a process that prepares specific changes that is to be included in the next commit using the **git add** command.  This allows you to select which modified files or parts of the files will be saved. As for committing, it is the process of permanently saving the stage changes into your repository, which is using the **git commit** command. 

They separated these commands in order for developers to have more control over their commits. It also allows developers to organize their changes into meaningful commits instead of committing everything at once.

You want to stage changes without committing when you are still working on another part of the project. This allows you to review the staged changes. Ensure that they are correct and group related changes together before committing. 

# Reflection

During the Git onboarding activities for my Focus Bear internship, I practiced using Git and GitHub in a test repository to better understand how collaboration works in real software development. One of the key exercises was intentionally creating and resolving a merge conflict so that I could learn how developers handle conflicting changes when working on the same project.

To perform this task, I first created two branches from the main branch in my test repository: feature-update-1 and feature-update-2. Both branches modified the same file so that a conflict would occur during the merge process. The file I edited was a simple test file called example.txt, which I used for the onboarding exercise.

In the feature-update-1 branch, I edited the file and changed the content to:

**Focus Bear onboarding activity - version 1**

After committing that change, I switched to the feature-update-2 branch and edited the same line in the same file to:

**Focus Bear onboarding activity - version 2**

Because both branches changed the same line differently, Git could not automatically merge them. When I attempted to merge feature-update-2 into main using my Git client, Git detected a merge conflict and stopped the merge process. The Git client displayed a warning message indicating that example.txt contained conflicting changes. I also captured a screenshot of this merge conflict in my Git desktop client as evidence of the task.

When I opened the file, Git had inserted conflict markers that looked like this:


Focus Bear onboarding activity - version 1
=======
Focus Bear onboarding activity - version 2
feature-update-2

These markers show the two conflicting versions of the file. The section above the divider represents the current branch's version, while the section below represents the incoming branch's version.

To resolve the conflict, I manually edited the file and decided to combine the information into a final version that made sense for the test repository:

**Focus Bear onboarding activity - resolved version**

After removing the conflict markers and saving the file, I staged the changes and completed the merge by committing the resolved version. This finalized the merge process and removed the conflict.

Through this exercise, I learned how merge conflicts occur when multiple branches modify the same section of a file. I also learned how Git uses conflict markers to show the differences between versions, allowing developers to manually decide which change should be kept. Practicing this process helped me better understand how collaborative development works and why careful branch management, pull requests, and clear commit messages are important when multiple developers are working on the same codebase.
