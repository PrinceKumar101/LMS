import express, { Request, Response } from 'express';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample route to test the server
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});
// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
