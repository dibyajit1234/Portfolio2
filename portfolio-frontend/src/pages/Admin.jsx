import React, { useState, useEffect } from 'react';
import { 
  fetchProjects, addProject, deleteProject, updateProject,
  fetchExperience, addExperience, deleteExperience, updateExperience,
  fetchSkills, addSkill, deleteSkill, updateSkill,
  fetchMessages 
} from '../api/client';
import { Button } from '../components/ui/Button';
import { Trash2, Pencil } from 'lucide-react';

const Input = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="block font-mono text-xs text-secondary mb-2 uppercase tracking-widest">{label}</label>
    <input 
      className="w-full bg-surface border border-[rgba(255,255,255,0.1)] rounded-sm px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors"
      {...props}
    />
  </div>
);

export function Admin() {
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [messages, setMessages] = useState([]);

  // Edit States
  const [editingProject, setEditingProject] = useState(null);
  const [editingExp, setEditingExp] = useState(null);
  const [editingSkill, setEditingSkill] = useState(null);

  // Load Data
  const loadData = () => {
    fetchProjects().then(setProjects).catch(console.error);
    fetchExperience().then(setExperiences).catch(console.error);
    fetchSkills().then(setSkills).catch(console.error);
    fetchMessages().then(setMessages).catch(console.error);
  };

  useEffect(() => {
    loadData();
  }, []);

  const resetProjectForm = () => {
    setProjectForm({ title: '', description: '', techStack: '', githib: '', liveUrl: '', image: '' });
    setEditingProject(null);
  };
  const resetExpForm = () => {
    setExpForm({ organization: '', role: '', startDate: '', endDate: '', Description: '' });
    setEditingExp(null);
  };
  const resetSkillForm = () => {
    setSkillForm({ name: '', category: 'FRONTEND' });
    setEditingSkill(null);
  };

  // Form States
  const [projectForm, setProjectForm] = useState({ title: '', description: '', techStack: '', githib: '', liveUrl: '', image: '' });
  const [expForm, setExpForm] = useState({ organization: '', role: '', startDate: '', endDate: '', Description: '' });
  const [skillForm, setSkillForm] = useState({ name: '', category: 'FRONTEND' }); 

  // Handlers
  const handleAddProject = async (e) => {
    e.preventDefault();
    if (editingProject) {
        await updateProject(editingProject, projectForm);
    } else {
        await addProject(projectForm);
    }
    resetProjectForm();
    loadData();
  };

  const handleAddExperience = async (e) => {
    e.preventDefault();
    const payload = {
        ...expForm,
        startDate: new Date(expForm.startDate).toISOString(),
        endDate: expForm.endDate ? new Date(expForm.endDate).toISOString() : null
    };
    if (editingExp) {
        await updateExperience(editingExp, payload);
    } else {
        await addExperience(payload);
    }
    resetExpForm();
    loadData();
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    if (editingSkill) {
        await updateSkill(editingSkill, skillForm);
    } else {
        await addSkill(skillForm);
    }
    resetSkillForm();
    loadData();
  };

  const handleEditProject = (p) => {
    setEditingProject(p.id);
    setProjectForm(p);
  };

  const handleEditExp = (e) => {
    setEditingExp(e.id);
    setExpForm({
        ...e,
        Description: e.Description || e.description || '', // Handle DTO variations
        startDate: e.startDate ? e.startDate.split('T')[0] : '',
        endDate: e.endDate ? e.endDate.split('T')[0] : ''
    });
  };

  const handleEditSkill = (s) => {
    setEditingSkill(s.id);
    setSkillForm(s);
  };

  return (
    <div className="min-h-screen bg-background text-primary p-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-12">
            <h1 className="font-display text-4xl font-bold">Admin Dashboard</h1>
            <a href="/" className="font-mono text-sm text-secondary hover:text-primary">← Back to Site</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Projects Management */}
          <section className="bg-surface p-8 rounded-lg border border-[rgba(255,255,255,0.05)]">
            <h2 className="font-display text-2xl mb-6">Manage Projects</h2>
            <form onSubmit={handleAddProject} className="mb-8 border-b border-[rgba(255,255,255,0.05)] pb-8">
              <Input label="Title" value={projectForm.title} onChange={e => setProjectForm({...projectForm, title: e.target.value})} required />
              <Input label="Description" value={projectForm.description} onChange={e => setProjectForm({...projectForm, description: e.target.value})} required />
              <Input label="Tech Stack (comma separated)" value={projectForm.techStack} onChange={e => setProjectForm({...projectForm, techStack: e.target.value})} required />
              <Input label="GitHub URL" value={projectForm.githib} onChange={e => setProjectForm({...projectForm, githib: e.target.value})} />
              <Input label="Live URL" value={projectForm.liveUrl} onChange={e => setProjectForm({...projectForm, liveUrl: e.target.value})} />
              <Input label="Image URL" value={projectForm.image} onChange={e => setProjectForm({...projectForm, image: e.target.value})} />
              <div className="flex gap-4">
                <Button type="submit" variant="primary">{editingProject ? 'Update Project' : 'Add Project'}</Button>
                {editingProject && <Button type="button" variant="secondary" onClick={resetProjectForm}>Cancel</Button>}
              </div>
            </form>
            <div className="space-y-4">
              {projects.map(p => (
                <div key={p.id} className="flex justify-between items-center bg-[#111] p-4 rounded border border-[rgba(255,255,255,0.05)]">
                  <div>
                    <h3 className="font-bold">{p.title}</h3>
                    <p className="text-sm text-secondary">{p.techStack}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEditProject(p)} className="text-secondary hover:text-white p-2"><Pencil size={18}/></button>
                    <button onClick={async () => { await deleteProject(p.id); loadData(); }} className="text-red-500 hover:text-red-400 p-2"><Trash2 size={18}/></button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Management */}
          <section className="bg-surface p-8 rounded-lg border border-[rgba(255,255,255,0.05)]">
            <h2 className="font-display text-2xl mb-6">Manage Experience</h2>
            <form onSubmit={handleAddExperience} className="mb-8 border-b border-[rgba(255,255,255,0.05)] pb-8">
              <Input label="Organization" value={expForm.organization} onChange={e => setExpForm({...expForm, organization: e.target.value})} required />
              <Input label="Role" value={expForm.role} onChange={e => setExpForm({...expForm, role: e.target.value})} required />
              <Input type="date" label="Start Date" value={expForm.startDate} onChange={e => setExpForm({...expForm, startDate: e.target.value})} required />
              <Input type="date" label="End Date" value={expForm.endDate} onChange={e => setExpForm({...expForm, endDate: e.target.value})} />
              <Input label="Description" value={expForm.Description} onChange={e => setExpForm({...expForm, Description: e.target.value})} required />
              <div className="flex gap-4">
                <Button type="submit" variant="primary">{editingExp ? 'Update Experience' : 'Add Experience'}</Button>
                {editingExp && <Button type="button" variant="secondary" onClick={resetExpForm}>Cancel</Button>}
              </div>
            </form>
            <div className="space-y-4">
              {experiences.map(e => (
                <div key={e.id} className="flex justify-between items-center bg-[#111] p-4 rounded border border-[rgba(255,255,255,0.05)]">
                  <div>
                    <h3 className="font-bold">{e.role} at {e.organization}</h3>
                    <p className="text-sm text-secondary">{new Date(e.startDate).toLocaleDateString()}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEditExp(e)} className="text-secondary hover:text-white p-2"><Pencil size={18}/></button>
                    <button onClick={async () => { await deleteExperience(e.id); loadData(); }} className="text-red-500 hover:text-red-400 p-2"><Trash2 size={18}/></button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Management */}
          <section className="bg-surface p-8 rounded-lg border border-[rgba(255,255,255,0.05)]">
            <h2 className="font-display text-2xl mb-6">Manage Skills</h2>
            <form onSubmit={handleAddSkill} className="mb-8 border-b border-[rgba(255,255,255,0.05)] pb-8">
              <Input label="Skill Name" value={skillForm.name} onChange={e => setSkillForm({...skillForm, name: e.target.value})} required />
              <div className="mb-4">
                <label className="block font-mono text-xs text-secondary mb-2 uppercase tracking-widest">Category</label>
                <select 
                  className="w-full bg-surface border border-[rgba(255,255,255,0.1)] rounded-sm px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors"
                  value={skillForm.category} onChange={e => setSkillForm({...skillForm, category: e.target.value})}
                >
                  <option value="FRONTEND">FRONTEND</option>
                  <option value="BACKEND">BACKEND</option>
                  <option value="DATABASE">DATABASE</option>
                  <option value="DEVOPS">DEVOPS</option>
                  <option value="TOOLS">TOOLS</option>
                </select>
              </div>
              <div className="flex gap-4">
                <Button type="submit" variant="primary">{editingSkill ? 'Update Skill' : 'Add Skill'}</Button>
                {editingSkill && <Button type="button" variant="secondary" onClick={resetSkillForm}>Cancel</Button>}
              </div>
            </form>
            <div className="space-y-2">
              {skills.map(s => (
                <div key={s.id} className="flex justify-between items-center bg-[#111] p-3 rounded border border-[rgba(255,255,255,0.05)]">
                  <span className="font-mono text-sm">{s.name} <span className="text-secondary text-xs">({s.category})</span></span>
                  <div className="flex gap-2">
                    <button onClick={() => handleEditSkill(s)} className="text-secondary hover:text-white"><Pencil size={16}/></button>
                    <button onClick={async () => { await deleteSkill(s.id); loadData(); }} className="text-red-500 hover:text-red-400"><Trash2 size={16}/></button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Messages View */}
          <section className="bg-surface p-8 rounded-lg border border-[rgba(255,255,255,0.05)]">
            <h2 className="font-display text-2xl mb-6">Messages</h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {messages.length === 0 ? <p className="text-secondary">No messages yet.</p> : null}
              {messages.map(m => (
                <div key={m.id} className="bg-[#111] p-4 rounded border border-[rgba(255,255,255,0.05)]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">{m.subject}</h3>
                    <span className="text-xs text-secondary font-mono">{new Date(m.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="text-sm text-secondary mb-2">From: {m.name} ({m.email})</p>
                  <p className="text-sm bg-[#0a0a0a] p-3 rounded">{m.message}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
