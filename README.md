<h1>Project Recursion</h1>

This project is about solving 2 problems using recursive methods:<br>

- 1. Fibonacci series<br>
- 2. Merge sort<br>
     <br>

The activities performed:<br>

- Init git, and created repo for this project on github<br>
- Init npm and import testing module, jest<br>
- Added scripts to test and run watch using npm<br>

Included babel package, to enable import/export directive: <br>

- npm install --save-dev @babel/preset-env<br>
- babel script included, babel.config.js

NOTE: Important to note that the fibonacci sequence starts with <br>
1, 1, 2, 3, 5, 8..etc, this means that previous fibonacci sequence needs<br>
correction.

NOTE: This line,

<pre>
  "type" : "module",
</pre>

has been added to package.json. This is to inform npm that this<br>
script, fibonacci.js, is actually a module.

Objectives:

1. [done] Code for getting the nth term of fibonacci sequence using iterative method<br>
2. [done] Code for getting the nth term of fibonacci sequence using recursive method<br>
3. [done] Test for fibonacci iterative method<br>
4. [done] Test for fibonacci recursive method<br>
5. [done] Merge sort using recursion<br>
6. [done] Test for merge sort using recursion<br>

Amendments:

1. The output from the fibonacci series must be an array of fibonacci sequence to the<br>
   nth term. <br>
   NOTE: This time '0' is part of the sequence. So, at the 8th term of this sequence is '13'.<br>

The following is how to start an 'npm test' to watch only one file:<br>

<pre>
npm test -- merge_sort_recursion.test.js --watch
</pre>

Another tool to add to the current development process is using 'node':<br>

<pre>
   node --watch fibonacci.cjs <br>
</pre>

This will allow 'node' to execute fibonacci.cjs anytime it detects that there is a change in the file.<br>

The following files has this at the top of the file:<br>

<pre>
   #!/usr/bin/env node
</pre>

The files have also been enabled for execution via:<br>

<pre>
  chmod u+x fibonacci.js merge_sort_recursion.js<br>
</pre>

This will allow the scripts to be executed via 'node' on the cli,<br>

<pre>
  ./fibonacci.js
</pre>

NOTE: Only commands such as console.log() or console.dir() will print out to the console at the<br>
moment.<br>

The following will allow access to functions in the file:

<pre>
  node -e "require('./merge_sort_recursion.js').merge_sort([4,6,5,1,7,8,9,2,3])"
</pre>
