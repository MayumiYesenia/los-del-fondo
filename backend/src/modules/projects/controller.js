const mongoose = require('mongoose');
const { Project } = require('../../DB/mongodb');
const db = require('../../DB/mysql');

exports.createProject = async (req, res) => {
  try {
    const { userId, name, surname, status } = req.body;
    const userExists = await db.oneUser('users', userId);

    if(!userExists) {
      return res.status(404).json({ message: 'User not found' });
    }
    const newProject = new Project({
      userId,
      name,
      surname,
      status,
    });
    await newProject.save();
    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error });
  }
};

exports.getUserProjects = async (req, res) => {
  try {
    const { userId } = req.params;
    const projects = await Project.find({ userId });
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving projects', error });
  }
};
