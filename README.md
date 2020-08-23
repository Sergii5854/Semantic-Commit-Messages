# Semantic-Commit-Messages

Let's explain the Semantic Commits term and demonstrate practical examples of commit messages, inspired by the Conventional Commit specification

###Commit
[Understanding Semantic Commit Messages Using Git and Angular](https://nitayneeman.com/posts/understanding-semantic-commit-messages-using-git-and-angular/)

[Commit Message Emoji](https://gist.github.com/parmentf/035de27d6ed1dce0b36a) Example table of commit type and emoji.

## Code review (peer review)

[Great concept of conventional comments.](https://conventionalcomments.org/)

#### Comments that are easy to grok and grep.

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html
- https://medium.com/dev-genius/make-a-meaningful-git-commit-message-with-semantic-commit-message-b39a79b13aa3
