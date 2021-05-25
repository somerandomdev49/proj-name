<h1 align="center">Project Name</h1>

> A command-line utility for when you have no ideas.

This project uses [Deno](https://deno.land/)!
This utility creates simple words for project names. (most of them don't exist)

<h3 align="center">Example</h3>

```matlab

$ proj-name
    [ 4 ]
    tenb

$ proj-name 5
    [ 5 ]
    nuwot
    
$ proj-name 7
    [ 7 ]
   bepohen

```

<h3 align="center">Installing</h3>

I use a simple [shell script](https://gist.github.com/somerandomdev49/c1022b6d6fcf8fa0396d19a749c33a2e)
to install a deno script in a folder (eg. `~/bin/` , which I have in my PATH).

##### The command I use:

```js
$ make-deno index.ts proj-name
```
