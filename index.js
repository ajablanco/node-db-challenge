const express = require('express');
const server = express();
const PORT = process.env.PORT || 5000;
const helmet = require('helmet');

const projectsRouter = require('./projects/projectsRouter');
const resourcesRouter = require('./projects/resourcesRouter');
const tasksRouter = require('./projects/tasksRouter');

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter);


server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});