import ImageSlider from '../components/ImageSlider';
import useStore from '../Routes/Zustand';
import '../styles/Home.css';
export default function Home() {
    const {ToggleBtn,Username} = useStore();
  return (
    <div className="home">
      <div className="image">
        <ImageSlider/>
      </div>
      <div className="text">
        {ToggleBtn ? <h1>Welcome {Username}</h1> : <h1>Join us</h1>}
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          natus ab reprehenderit ullam, doloribus id nemo quia enim nam optio
          molestiae maxime iste omnis. Nisi enim laudantium ipsum quis
          obcaecati! Velit, distinctio quo. Quidem ipsa voluptatum nobis
          officiis sed quod numquam cumque sint consectetur optio eum ex ipsum,
          fuga saepe quae maiores animi facilis, est tenetur libero quasi?
          Sapiente, quaerat? Sequi voluptatibus minima molestiae? Eaque mollitia
          in nobis iste exercitationem. Cum, necessitatibus. Possimus a sunt
          eveniet adipisci, dolor totam nihil inventore autem quam asperiores
          pariatur in beatae, ab aperiam! Autem.
        </h3>
      </div>
    </div>
  );
}
