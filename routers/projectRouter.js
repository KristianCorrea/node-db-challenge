const express = require("express");
const api = require("./projectModel");
const router = express.Router();

// retrieving a list of projects
router.get("/projects", (req, res) => {
  api
    .getProjects()
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

// retrieving a list of resources
router.get("/resources", (req, res) => {
  api
    .getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

// adding projects
router.post("/projects", (req, res) => {
  api
    .addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

// adding resources
router.post("/resources", (req, res) => {
  api
    .addResource(req.body)
    .then((resources) => {
      res.status(201).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

// retrieving a list of tasks.
// include the project name and project description.
router.get("/tasks", (req, res) => {
  api
    .getTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

// adding tasks
router.post("/tasks", (req, res) => {
  api
    .addTask(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

// stretch - find project
router.get("/projects/:id", (req, res) => {
  api
    .findProject(req.params.id)
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

// stretch - update project
router.put("/projects/:id", (req, res) => {
  api
    .updateProject(req.body, req.params.id)
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update projects" });
    });
});

// stretch - remove project
router.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  api
    .removeProject(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete project" });
    });
});

module.exports = router;
