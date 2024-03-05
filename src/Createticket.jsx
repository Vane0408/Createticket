import React, { useState } from 'react';

const Createticket = () => {
  const [department, setDepartment] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [attachedFile, setAttachedFile] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleSubmit = () => {
    // Perform any actions with the form data here
    console.log('Form Data:', {
      department,
      title,
      description,
      priority,
      status,
      attachedFile,
    });

    // Display a prompt
    alert('Ticket Submitted!');
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachedFile(file);
  };

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(attachedFile);
    downloadLink.download = attachedFile.name;
    downloadLink.click();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-green-200 p-10 rounded-md w-2/3 h-4/4">
        <h2 className="text-2xl font-bold mb-4">SUBMIT A TICKET</h2>


      {/* Department Dropdown */}
      <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="" disabled>
              Select Department
            </option>
            <option value="CEA">CEA</option>
            <option value="CASE">CASE</option>
            <option value="SAO">SAO</option>
            <option value="ACCOUNTING">ACCOUNTING</option>
            <option value="UTILITIES">UTILITIES</option>
          </select>
        </div>
        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            rows="4"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

       
        {/* Priority Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Priority</label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="" disabled>
              Select Priority
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>


      
        {/* Status Dropdown (Open/Closed) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      
        {/* File Attachment */}
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-700">Attach File</label>
          <input
            type="file"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            onChange={handleFileChange}
          />
          <button
            className="absolute top-2 right-2 p-2 text-lg"
            onClick={handleOptionsClick}
          >
            <span className="text-gray-700">...</span>
          </button>

          {showOptions && (
            <div className="absolute top-8 right-2 bg-white p-2 rounded-md shadow-md">
              <button className="block" onClick={handleDownload}>
                Download
              </button>
            </div>
          )}
        </div>

        {/* Submit Ticket Button */}
        <button
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 block mx-auto"
          onClick={handleSubmit}
        >
          SUBMIT TICKET
        </button>
      </div>
    </div>
  );
};

export default Createticket;