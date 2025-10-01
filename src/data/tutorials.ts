export interface Tutorial {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  readTime: string;
  tags: string[];
  content: string;
  codeExamples: Array<{
    language: string;
    code: string;
    description: string;
  }>;
}

export const tutorials: Tutorial[] = [
  {
    id: "react-hooks-guide",
    title: "Complete Guide to React Hooks",
    description: "Master React Hooks with this comprehensive guide covering useState, useEffect, useContext, and custom hooks.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    author: "Sarah Johnson",
    readTime: "15 min read",
    tags: ["React", "JavaScript", "Hooks"],
    content: `React Hooks revolutionized the way we write React components. In this comprehensive guide, we'll explore all the essential hooks and learn how to use them effectively.

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have since become the standard way to write React components.

## useState Hook

The useState hook allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it.`,
    codeExamples: [
      {
        language: "javascript",
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
        description: "Basic useState example with a counter"
      },
      {
        language: "javascript",
        code: `import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs once
  
  if (loading) return <p>Loading...</p>;
  return <div>{JSON.stringify(data)}</div>;
}`,
        description: "useEffect hook for data fetching"
      }
    ]
  },
  {
    id: "typescript-basics",
    title: "TypeScript Fundamentals for Beginners",
    description: "Learn TypeScript from scratch with practical examples and best practices.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop",
    author: "Michael Chen",
    readTime: "12 min read",
    tags: ["TypeScript", "JavaScript", "Beginner"],
    content: `TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, and interfaces to JavaScript.

## Why TypeScript?

TypeScript helps catch errors early through type checking, provides better IDE support, and makes code more maintainable and self-documenting.`,
    codeExamples: [
      {
        language: "typescript",
        code: `// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];

// Interfaces
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

const user: User = {
  name: "John Doe",
  age: 30
};`,
        description: "TypeScript basic types and interfaces"
      }
    ]
  },
  {
    id: "responsive-web-design",
    title: "Modern Responsive Web Design Techniques",
    description: "Build beautiful responsive websites using CSS Grid, Flexbox, and modern CSS features.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=450&fit=crop",
    author: "Emily Rodriguez",
    readTime: "10 min read",
    tags: ["CSS", "Web Design", "Responsive"],
    content: `Creating responsive websites is essential in today's multi-device world. This tutorial covers modern CSS techniques for building adaptive layouts.`,
    codeExamples: [
      {
        language: "css",
        code: `.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
}`,
        description: "Responsive grid layout with CSS Grid"
      }
    ]
  }
];
