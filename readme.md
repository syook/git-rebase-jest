# Small Exercise to Understand `git rebase` & Jest
[![Build Status](https://travis-ci.org/syook/git-rebase-jest.svg?branch=math-program-test)](https://travis-ci.org/syook/git-rebase-jest)

### Things I understood

When pulling a brach that is ahead of your local branch, one of the best strategies is to use `git pull -- rebase origin <branch>`. This allows Git to move local commits to the top of the tree after syncing with the remote repo. Rebase basically helps resolve conflits on commit basis than on the file by file basis that we normally used to do. This has many positive gains for repo & project maintenance.

Consider a scenario where you branched out of master in the morning and you're done building your feature by afternoon. Your feature contains 10 commits. In the interin while you were doing your thing, other developer has pushed and merged to master. At this point your master is ahead from your local branch by x commits. So you do the usual and do `git pull origin master` into your branch. You recevie a host of unknown changes and confilcts arise.

The alternative and more effective way to manage this is by doing `git pull --rebase origin master` this way you can resolve your conflicts file by file, commmit by commit.

You would do something like this

```sh
git add <the file you resolved>
git rebase --continue
```

and follow along till all conflicts are resolved.

The best part is you can abort anytime you wish without headaches by doing

`git rebase --abort`

Star the repo if you understood a thing or two