# Lock Component

A simple lock mini puzzle written in Svelte.

## Features

- Generates a random 4-digit secret on mount that is tied to correct sequence to press
- Animation sequence based on delays to exhibit the correct sequence once
- Lock to prevent user intervention during animation (e.g. spamming the reset button)
- Reset button forces a re-render (and hence, a re-generation of the secret and reset of the state)
