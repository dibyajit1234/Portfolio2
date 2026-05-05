const API_BASE = '/api';

export const fetchProjects = async () => {
  const response = await fetch(`${API_BASE}/projects`);
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
};

export const addProject = async (project) => {
  const response = await fetch(`${API_BASE}/projects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project),
  });
  if (!response.ok) throw new Error('Failed to add project');
  return response.json();
};

export const deleteProject = async (id) => {
  const response = await fetch(`${API_BASE}/projects/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete project');
};

export const updateProject = async (id, project) => {
  const response = await fetch(`${API_BASE}/projects/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project),
  });
  if (!response.ok) throw new Error('Failed to update project');
  return response.json();
};

export const fetchExperience = async () => {
  const response = await fetch(`${API_BASE}/experience`);
  if (!response.ok) throw new Error('Failed to fetch experience');
  return response.json();
};

export const addExperience = async (experience) => {
  const response = await fetch(`${API_BASE}/experience`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(experience),
  });
  if (!response.ok) throw new Error('Failed to add experience');
  return response.json();
};

export const deleteExperience = async (id) => {
  const response = await fetch(`${API_BASE}/experience/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete experience');
};

export const updateExperience = async (id, experience) => {
  const response = await fetch(`${API_BASE}/experience/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(experience),
  });
  if (!response.ok) throw new Error('Failed to update experience');
  return response.json();
};

export const fetchSkills = async () => {
  const response = await fetch(`${API_BASE}/skills`);
  if (!response.ok) throw new Error('Failed to fetch skills');
  return response.json();
};

export const addSkill = async (skill) => {
  const response = await fetch(`${API_BASE}/skills`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(skill),
  });
  if (!response.ok) throw new Error('Failed to add skill');
  return response.json();
};

export const deleteSkill = async (id) => {
  const response = await fetch(`${API_BASE}/skills/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete skill');
};

export const updateSkill = async (id, skill) => {
  const response = await fetch(`${API_BASE}/skills/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(skill),
  });
  if (!response.ok) throw new Error('Failed to update skill');
  return response.json();
};

export const fetchMessages = async () => {
  const response = await fetch(`${API_BASE}/message`);
  if (!response.ok) throw new Error('Failed to fetch messages');
  return response.json();
};

export const sendMessage = async (messageData) => {
  const response = await fetch(`${API_BASE}/message`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageData),
  });
  if (!response.ok) throw new Error('Failed to send message');
  return response.json();
};

