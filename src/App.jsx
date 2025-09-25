import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  MessageCircle, 
  Bell, 
  Search, 
  Plus, 
  Heart, 
  MessageSquare, 
  Share2, 
  Camera, 
  Send, 
  MoreHorizontal,
  Users,
  Globe,
  Lock,
  Settings,
  LogOut,
  Check,
  X,
  UserPlus,
  UserCheck,
  UserX,
  Play,
  Image as ImageIcon,
  Mic,
  Paperclip,
  Smile,
  TrendingUp,
  Flag,
  ThumbsUp
} from 'lucide-react';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const [suggestedFriends, setSuggestedFriends] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [showLogin, setShowLogin] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [newPost, setNewPost] = useState('');

  // Mock data initialization
  useEffect(() => {
    // Mock posts
    setPosts([
      {
        id: 1,
        user: { id: 2, name: 'Sarah Johnson', avatar: 'https://placehold.co/40x40/6366f1/white?text=SJ' },
        content: 'Just finished my morning run! 🏃‍♀️ Feeling energized for the day ahead.',
        image: 'https://placehold.co/600x400/f59e0b/white?text=Morning+Run',
        likes: 24,
        comments: 8,
        shares: 3,
        timestamp: '2 hours ago'
      },
      {
        id: 2,
        user: { id: 3, name: 'Mike Chen', avatar: 'https://placehold.co/40x40/10b981/white?text=MC' },
        content: 'Working on a new project that I\'m really excited about! Stay tuned for updates.',
        likes: 42,
        comments: 12,
        shares: 7,
        timestamp: '4 hours ago'
      }
    ]);

    // Mock friends
    setFriends([
      { id: 2, name: 'Sarah Johnson', avatar: 'https://placehold.co/40x40/6366f1/white?text=SJ', status: 'online' },
      { id: 3, name: 'Mike Chen', avatar: 'https://placehold.co/40x40/10b981/white?text=MC', status: 'online' },
      { id: 4, name: 'Emma Davis', avatar: 'https://placehold.co/40x40/f59e0b/white?text=ED', status: 'offline' }
    ]);

    // Mock friend requests
    setFriendRequests([
      { id: 5, name: 'Alex Rodriguez', avatar: 'https://placehold.co/40x40/ef4444/white?text=AR' },
      { id: 6, name: 'Lisa Wang', avatar: 'https://placehold.co/40x40/8b5cf6/white?text=LW' }
    ]);

    // Mock suggested friends
    setSuggestedFriends([
      { id: 7, name: 'David Kim', avatar: 'https://placehold.co/40x40/06b6d4/white?text=DK', mutualFriends: 12 },
      { id: 8, name: 'Rachel Green', avatar: 'https://placehold.co/40x40/84cc16/white?text=RG', mutualFriends: 8 }
    ]);

    // Mock notifications
    setNotifications([
      { id: 1, type: 'like', user: 'Sarah Johnson', content: 'liked your post', timestamp: '10 minutes ago' },
      { id: 2, type: 'comment', user: 'Mike Chen', content: 'commented on your photo', timestamp: '1 hour ago' },
      { id: 3, type: 'friend_request', user: 'Alex Rodriguez', content: 'sent you a friend request', timestamp: '2 hours ago' }
    ]);

    // Mock messages
    setMessages([
      { id: 1, user: 'Sarah Johnson', avatar: 'https://placehold.co/40x40/6366f1/white?text=SJ', lastMessage: 'Hey! How are you?', timestamp: '10:30 AM', unread: true },
      { id: 2, user: 'Mike Chen', avatar: 'https://placehold.co/40x40/10b981/white?text=MC', lastMessage: 'Thanks for the help!', timestamp: 'Yesterday', unread: false }
    ]);
  }, []);

  const handleLogin = () => {
    setCurrentUser({
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      bio: 'Software developer and coffee enthusiast ☕',
      avatar: 'https://placehold.co/80x80/3b82f6/white?text=JD',
      cover: 'https://placehold.co/800x200/1e40af/white?text=Bernest+Cover'
    });
    setShowLogin(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setShowLogin(true);
  };

  const handlePost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        user: currentUser,
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0,
        timestamp: 'Just now'
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleFriendRequest = (userId, action) => {
    if (action === 'accept') {
      setFriends([...friends, friendRequests.find(f => f.id === userId)]);
      setFriendRequests(friendRequests.filter(f => f.id !== userId));
    } else {
      setFriendRequests(friendRequests.filter(f => f.id !== userId));
    }
  };

  if (showLogin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Bernest</h1>
            <p className="text-gray-600">Connect with friends and family</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email or Phone</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email or phone"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            <button 
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
            >
              Log In
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Forgot Password?
            </button>
            <p className="mt-4 text-gray-600">
              Don't have an account?{' '}
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Bernest</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search Bernest"
                  className="bg-transparent border-none outline-none text-sm w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-6">
                <button 
                  onClick={() => setActiveTab('home')}
                  className={`p-2 rounded-full ${activeTab === 'home' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <Home className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveTab('friends')}
                  className={`p-2 rounded-full ${activeTab === 'friends' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <Users className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveTab('messages')}
                  className={`p-2 rounded-full relative ${activeTab === 'messages' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <MessageCircle className="w-5 h-5" />
                  {messages.some(m => m.unread) && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                  )}
                </button>
                <button 
                  onClick={() => setActiveTab('notifications')}
                  className={`p-2 rounded-full relative ${activeTab === 'notifications' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <Bell className="w-5 h-5" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                  )}
                </button>
              </nav>
              
              <div className="flex items-center space-x-2">
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden md:block text-sm font-medium text-gray-700">
                  {currentUser.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={currentUser.avatar} 
                  alt={currentUser.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{currentUser.name}</p>
                  <p className="text-sm text-gray-600">@{currentUser.username}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <button className="flex items-center space-x-3 w-full p-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </button>
                <button className="flex items-center space-x-3 w-full p-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-3 w-full p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>

            {/* Friends */}
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Friends</h3>
              <div className="space-y-3">
                {friends.slice(0, 4).map(friend => (
                  <div key={friend.id} className="flex items-center space-x-3">
                    <div className="relative">
                      <img 
                        src={friend.avatar} 
                        alt={friend.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                        friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{friend.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Friend Requests */}
            {friendRequests.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-4 mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Friend Requests</h3>
                <div className="space-y-3">
                  {friendRequests.map(request => (
                    <div key={request.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={request.avatar} 
                          alt={request.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-900">{request.name}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleFriendRequest(request.id, 'accept')}
                          className="p-1 text-green-600 hover:bg-green-50 rounded-full"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleFriendRequest(request.id, 'decline')}
                          className="p-1 text-red-600 hover:bg-red-50 rounded-full"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'home' && (
              <div className="space-y-6">
                {/* Create Post */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={currentUser.avatar} 
                      alt={currentUser.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <textarea
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="What's on your mind?"
                        className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="3"
                      />
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                            <Camera className="w-5 h-5" />
                            <span>Photo/Video</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
                            <Smile className="w-5 h-5" />
                            <span>Feeling/Activity</span>
                          </button>
                        </div>
                        <button 
                          onClick={handlePost}
                          disabled={!newPost.trim()}
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Posts Feed */}
                {posts.map(post => (
                  <div key={post.id} className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <img 
                        src={post.user.avatar} 
                        alt={post.user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-gray-900">{post.user.name}</h4>
                          <span className="text-gray-500 text-sm">{post.timestamp}</span>
                        </div>
                        <p className="text-gray-700 mt-1">{post.content}</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>

                    {post.image && (
                      <img 
                        src={post.image} 
                        alt="Post content"
                        className="rounded-lg w-full mb-4"
                      />
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-6">
                        <button 
                          onClick={() => handleLike(post.id)}
                          className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
                        >
                          <Heart className="w-5 h-5" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                          <MessageSquare className="w-5 h-5" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
                          <Share2 className="w-5 h-5" />
                          <span>{post.shares}</span>
                        </button>
                      </div>
                      <button className="text-gray-600 hover:text-blue-600">
                        <Flag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'friends' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Suggested Friends</h2>
                  <div className="space-y-4">
                    {suggestedFriends.map(friend => (
                      <div key={friend.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={friend.avatar} 
                            alt={friend.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{friend.name}</p>
                            <p className="text-sm text-gray-600">{friend.mutualFriends} mutual friends</p>
                          </div>
                        </div>
                        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                          <UserPlus className="w-4 h-4" />
                          <span>Add Friend</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-4 border-b">
                  <h2 className="text-xl font-bold text-gray-900">Messages</h2>
                </div>
                <div className="divide-y">
                  {messages.map(message => (
                    <div 
                      key={message.id} 
                      className={`p-4 hover:bg-gray-50 cursor-pointer ${message.unread ? 'bg-blue-50' : ''}`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img 
                            src={message.avatar} 
                            alt={message.user}
                            className="w-12 h-12 rounded-full"
                          />
                          {message.unread && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-gray-900 truncate">{message.user}</p>
                            <span className="text-sm text-gray-500">{message.timestamp}</span>
                          </div>
                          <p className="text-gray-600 text-sm truncate mt-1">{message.lastMessage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-4 border-b">
                  <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
                </div>
                <div className="divide-y">
                  {notifications.map(notification => (
                    <div key={notification.id} className="p-4 hover:bg-gray-50">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          {notification.type === 'like' && <ThumbsUp className="w-4 h-4 text-blue-600" />}
                          {notification.type === 'comment' && <MessageSquare className="w-4 h-4 text-blue-600" />}
                          {notification.type === 'friend_request' && <UserPlus className="w-4 h-4 text-blue-600" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900">
                            <span className="font-semibold">{notification.user}</span> {notification.content}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">{notification.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Trending</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">#BernestLaunch</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">#SocialMedia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-700">#ConnectWithFriends</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Your Profile</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <img 
                    src={currentUser.avatar} 
                    alt={currentUser.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{currentUser.name}</p>
                    <p className="text-sm text-gray-600">{currentUser.bio}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">{friends.length}</span> friends
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
