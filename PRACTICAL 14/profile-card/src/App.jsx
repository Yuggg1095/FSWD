import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Profile Card Demo</h1>
      <ProfileCard
        name="Darshil kothiya"
        photo="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        bio="Frontend developer passionate about React and UI design."
      />
      
    </div>
  );
}

export default App;