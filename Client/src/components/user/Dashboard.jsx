import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaEdit, FaTrash } from 'react-icons/fa';
import axios from '../../Axios';
import UserNavbar from './Navbar';

const Dashboard = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ title: '', content: '' });

  // Fetch user profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return navigate('/login');

      try {
        const res = await axios.get(`/auth/${username}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data.user);
      } catch (err) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`/user/${username}`);
        setBlogs(res.data.blogs);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
      }
    };

    fetchProfile();
    fetchBlogs();
  }, [username, navigate]);

  // Delete blog handler
  const handleDelete = async (blogId) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    const token = localStorage.getItem('token');
    try {
      await axios.delete(`/user/blog/${blogId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBlogs(blogs.filter(blog => blog._id !== blogId));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  // Open edit modal
  const openEdit = (blog) => {
    setSelectedBlog(blog);
    setEditData({ title: blog.title, content: blog.content });
    setIsEditing(true);
  };

  // Save edited blog
  const saveEdit = async (e) => {
    e.preventDefault();
    if (!window.confirm('Confirm update?')) return;

    const token = localStorage.getItem('token');
    try {
      await axios.put(`/user/blog/${selectedBlog._id}`, editData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBlogs(blogs.map(b => (b._id === selectedBlog._id ? { ...b, ...editData } : b)));
      closeModal();
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  // Close modal
  const closeModal = () => {
    setSelectedBlog(null);
    setIsEditing(false);
    setEditData({ title: '', content: '' });
  };

  return (
    <>
      <UserNavbar />

      <main className="min-h-screen bg-gray-50 p-4 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Blogs List */}
        <section className="flex-1 bg-white rounded-lg shadow p-6">
          <header className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Your Blogs</h2>
            <Link
              to={`/${username}/create`}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Create New
            </Link>
          </header>

          {/* Blogs Container */}
          <div className="space-y-4 max-h-[70vh] overflow-y-auto">
            {blogs.length === 0 ? (
              <p className="text-gray-500">No blogs found. Start by creating one!</p>
            ) : (
              blogs.map(blog => (
                <article
                  key={blog._id}
                  className="p-4 border rounded-md bg-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center"
                >
                  <div className="max-w-[70%]">
                    <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                    <p className="text-sm text-gray-700 mt-1 line-clamp-2">{blog.content}</p>
                    <time className="block text-xs text-gray-500 mt-2">
                      Published on {new Date(blog.createdAt).toLocaleDateString()}
                    </time>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3 mt-4 md:mt-0">
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      aria-label="View blog"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaRegEye size={20} />
                    </button>
                    <button
                      onClick={() => openEdit(blog)}
                      aria-label="Edit blog"
                      className="text-yellow-500 hover:text-yellow-700"
                    >
                      <FaEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      aria-label="Delete blog"
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>

        {/* Profile Section */}
        <section className="w-full md:w-96 bg-white rounded-lg shadow p-6 flex flex-col items-center space-y-4">
          {user ? (
            <>
              <img
                src={`http://localhost:5000/uploads/${user.image}`}
                alt={`${user.name} profile`}
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600"
              />
              <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
              <p className="text-gray-600">@{user.username}</p>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-center text-gray-700">{user.bio || 'No bio added yet.'}</p>
              <button
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                onClick={() => alert('Update profile feature coming soon!')}
              >
                Update Profile
              </button>
            </>
          ) : (
            <p>Loading profile...</p>
          )}
        </section>

        {/* Modal for View/Edit Blog */}
        {selectedBlog && (
          <div
            className="fixed inset-0 bg-black/80 bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg max-w-lg w-full p-6 relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>

              {isEditing ? (
                <form onSubmit={saveEdit} className="flex flex-col space-y-4">
                  <input
                    type="text"
                    value={editData.title}
                    onChange={e => setEditData({ ...editData, title: e.target.value })}
                    className="border border-gray-300 rounded p-2 focus:outline-indigo-600"
                    placeholder="Blog Title"
                    required
                    autoFocus
                  />
                  <textarea
                    rows={6}
                    value={editData.content}
                    onChange={e => setEditData({ ...editData, content: e.target.value })}
                    className="border border-gray-300 rounded p-2 focus:outline-indigo-600 resize-none"
                    placeholder="Blog Content"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                  >
                    Save Changes
                  </button>
                </form>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-3">{selectedBlog.title}</h3>
                  {selectedBlog.image && (
                    <img
                      src={`http://localhost:3000${selectedBlog.image}`}
                      alt={selectedBlog.title}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                  )}
                  <p className="text-gray-700 whitespace-pre-wrap">{selectedBlog.content}</p>
                  <time className="block text-xs text-gray-500 mt-3">
                    Created on {new Date(selectedBlog.createdAt).toLocaleDateString()}
                  </time>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Dashboard;
