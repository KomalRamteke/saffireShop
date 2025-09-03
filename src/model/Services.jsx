import cardsData from "../img/products/productimgs.json";

export default function Services() {
  return (
    <div className="services" id="service" style={{ backgroundColor: "#f4fbfd"}}>
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'blue',
          textAlign: 'center', 
          marginBottom: '1rem', 
        
        }}
      >
       Services
      </h1>
      <div className="services-list">
        {cardsData.map((item, index) => (
          <div key={index} className="service-card">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
