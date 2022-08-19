import './Home.css';
import HomeFeatureCard from './HomeFeatureCard/HomeFeatureCard';

const Home = () => {
    return (
        <div className="home home-container">
            <p className="page-title">Welcome Home</p>
            <h1 className="main-title">Main title here</h1>
            <h2 className="subtitle">subtitle here</h2>

            <div className="feature-cards">
            <HomeFeatureCard />
            <HomeFeatureCard />
            </div>
        </div>
    )
}

export default Home;