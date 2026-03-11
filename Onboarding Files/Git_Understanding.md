# Creating & Reviewing Pull Requests

Pull Request is really important, especially when you're in a workspace that is conducting remotely, and those people are from different places around the globe. This gives the ability to share and understand code properly from different people. They have the time to check and debug your code before combining it with the main code of the overall application. 

A well-structured PR is the ability to explain the necessary additions to the code you committed on GitHub. This means that a well-structured PR is easily understood and can properly merge with the main program without any problems. 

The PR is explained thoroughly, and the peers and mentors give feedback on the necessary changes you make to your PR to the main program. I understand that it is much easier for your peers, workmates, or supervisor to understand properly your PR in order to easily debug and realize your code additions.

# Writing Meaningful Commit Messages

A good commit message is a well-structured message that answers What, Where, and Why questions regarding the code you added or fixed. Usually, professionals use a format that has a short description, fix, feat, and refactor. 

Commit messages are important in order for the other team to realize and understand the description of every commit you make. Having a lot of developers and lots of commits, however, there are no messages in every commit. This causes the lack of backtracking to what codes were added to the main program, and this will cause issues in the future.
How can poor commit messages cause issues later?

Poor commit messages cause misinformation and the lack of determining the commits during backtracking. You also wait for the time of your supervisor or peers on what to fix or refactor in your commit due to a lack of information. 

# Debugging with git bisect
Git bisect is the ability to recognize and detect the possible causes of bugs on all the different commits you have made. This command makes it easier for you to determine which commit causes the bug in your program.  
 
You use this especially when you have a lot of developers working on one application. They would commit different code into the main program, and you can't track what causes the bug. Using this method, you can quickly discover the bugs that are needed to be changed.

Manually reviewing commits is very time-consuming, especially for an application with a lot of developers. This causes confusion in checking the different commits manually, rather than using a tool or command that can easily check the different commits that your developer posted for bugs. 

# Advanced Git Commands & When to Use Them

**git checkout** -  this command restores one file from your main branch without you touching other files.

**git cherry pick** - this command copies one commit from the other branch.

**git log** - this shows the different commit history you have made.

**git blame** - shows the user who changed each line and when that line was changed.

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

HEAD
Focus Bear onboarding activity - version 1
=======
Focus Bear onboarding activity - version 2
feature-update-2

These markers show the two conflicting versions of the file. The section above the divider represents the current branch's version, while the section below represents the incoming branch's version.

To resolve the conflict, I manually edited the file and decided to combine the information into a final version that made sense for the test repository:

**Focus Bear onboarding activity - resolved version**

After removing the conflict markers and saving the file, I staged the changes and completed the merge by committing the resolved version. This finalized the merge process and removed the conflict.

Through this exercise, I learned how merge conflicts occur when multiple branches modify the same section of a file. I also learned how Git uses conflict markers to show the differences between versions, allowing developers to manually decide which change should be kept. Practicing this process helped me better understand how collaborative development works and why careful branch management, pull requests, and clear commit messages are important when multiple developers are working on the same codebase.
