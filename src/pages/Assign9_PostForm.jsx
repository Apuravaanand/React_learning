import React, { useState } from 'react';

// SIMPLE REUSABLE INPUT
const Field = ({ label, children }) => (
  <div className="mb-4 flex flex-col gap-1">
    <label className="text-sm font-bold text-gray-700">{label}</label>
    {children}
  </div>
);

function Assign9_PostForm() {
  // 1. STRONG: One object for all data
  const [form, setForm] = useState({
    title: '',
    type: 'News',
    body: '',
    isPublic: false
  });

  // 2. SIMPLE: One function for ALL inputs
  const updateForm = (e) => {
    const { name, value, type, checked } = e.target;
    // If it's a checkbox, use 'checked', otherwise use 'value'
    const finalValue = type === 'checkbox' ? checked : value;
    
    setForm({ ...form, [name]: finalValue });
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log("Sending to API:", form);
    
    // Simple fetch logic
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(form)
    });
    alert("Data Sent!");
  };

  const inputStyle = "border p-2 rounded focus:border-blue-500 outline-none";

  return (
    <form onSubmit={submitData} className="max-w-md mx-auto p-6 shadow-lg rounded-xl bg-white mt-10">
      <h2 className="text-xl font-black mb-5 border-b pb-2">Create Entry</h2>

      {/* TEXT INPUT */}
      <Field label="Title">
        <input name="title" value={form.title} onChange={updateForm} className={inputStyle} placeholder="Enter title..." />
      </Field>

      {/* SELECT INPUT */}
      <Field label="Post Type">
        <select name="type" value={form.type} onChange={updateForm} className={inputStyle}>
          <option>News</option>
          <option>Tutorial</option>
          <option>Event</option>
        </select>
      </Field>

      {/* TEXTAREA */}
      <Field label="Description">
        <textarea name="body" value={form.body} onChange={updateForm} className={inputStyle} rows="3" />
      </Field>

      {/* CHECKBOX */}
      <div className="flex items-center gap-2 mb-6">
        <input type="checkbox" name="isPublic" checked={form.isPublic} onChange={updateForm} id="pub" />
        <label htmlFor="pub" className="text-sm">Make this post public?</label>
      </div>

      <button className="w-full bg-black text-white p-3 rounded font-bold hover:opacity-80 transition">
        Submit Entry
      </button>
    </form>
  );
}

export default Assign9_PostForm;