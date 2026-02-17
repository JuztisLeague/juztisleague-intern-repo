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
