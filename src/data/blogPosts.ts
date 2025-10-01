export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "future-of-web-development",
    title: "The Future of Web Development in 2025",
    excerpt: "Explore the emerging trends and technologies that will shape web development in the coming years.",
    content: `The web development landscape is constantly evolving. As we move through 2025, several key trends are emerging that will shape how we build web applications.

## AI-Powered Development

Artificial Intelligence is becoming an integral part of the development process. From code completion to automated testing, AI tools are making developers more productive than ever.

## Edge Computing

Edge computing is revolutionizing how we think about application architecture. By processing data closer to the source, we can achieve lower latency and better performance.

## WebAssembly Adoption

WebAssembly (Wasm) continues to gain traction, allowing developers to run high-performance code in the browser. This opens up new possibilities for web applications.`,
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Industry Trends",
    author: "Alex Thompson"
  },
  {
    id: "javascript-best-practices",
    title: "10 JavaScript Best Practices Every Developer Should Know",
    excerpt: "Level up your JavaScript skills with these essential best practices and coding patterns.",
    content: `Writing clean, maintainable JavaScript code is crucial for any developer. Here are 10 best practices that will improve your code quality.

## 1. Use const and let Instead of var

Modern JavaScript provides better variable declaration options that help prevent common bugs.

## 2. Embrace Async/Await

Async/await syntax makes asynchronous code more readable and easier to debug compared to callbacks and promises.

## 3. Use Arrow Functions Wisely

Arrow functions are great, but understanding when to use them and when to use regular functions is important.`,
    date: "March 12, 2025",
    readTime: "6 min read",
    category: "JavaScript",
    author: "Sarah Johnson"
  },
  {
    id: "react-performance-optimization",
    title: "React Performance Optimization: A Complete Guide",
    excerpt: "Learn how to identify and fix performance bottlenecks in your React applications.",
    content: `Performance is crucial for user experience. In this guide, we'll explore various techniques to optimize your React applications.

## Understanding React Rendering

React's virtual DOM is efficient, but unnecessary re-renders can still slow down your app. Understanding when and why components re-render is the first step to optimization.

## Using React.memo

React.memo is a higher-order component that can prevent unnecessary re-renders by memoizing the component.

## Optimizing with useMemo and useCallback

These hooks help you memoize expensive computations and callback functions, preventing unnecessary recalculations.`,
    date: "March 10, 2025",
    readTime: "12 min read",
    category: "React",
    author: "Michael Chen"
  }
];
