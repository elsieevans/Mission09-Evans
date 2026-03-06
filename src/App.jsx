import './App.css'
// Make sure the JSON file is named exactly like this and inside the 'src' folder
import teamData from './CollegeBasketballTeams.json';

// #1: The Heading Component
function Welcome() {
  return (
    <header>
      <h1>NCAA Basketball Directory</h1>
      <p>Browse the schools, mascots, and locations of teams competing in college basketball.</p>
    </header>
  );
}

// #2: The Team Card Component
// It receives one team's info as "props" and formats it
function TeamCard({ school, mascot, city, state }) {
  return (
    <div className="team-card">
      <h3>{school}</h3>
      <p><strong>Mascot:</strong> {mascot}</p>
      <p><strong>Location:</strong> {city}, {state}</p>
    </div>
  );
}

// #3: The Team List Component
// This "maps" (loops) through the JSON file data
function TeamList() {
  return (
    <div className="team-container">
      {/* The JSON structure is an object with a key called "teams" 
        which is an array. We map through that array here.
      */}
      {teamData.teams.map((singleTeam) => (
        <TeamCard 
          key={singleTeam.tid} // React needs a unique key (tid is the Team ID in the JSON)
          school={singleTeam.school} 
          mascot={singleTeam.name} 
          city={singleTeam.city} 
          state={singleTeam.state} 
        />
      ))}
    </div>
  );
}

// The main App function that puts the three components together
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;