import './card.css'
import data from '../../assets/data.js'

function Card() {
    console.log(data);
    
    
  return (
    <div className='box container'>
       
      <div className="btns">
        <h2>Products</h2>
        <button id='btn'>Move All Tobag</button>
      </div>
      <div className="card-ota">
        {data.map((e,i)=>{
          return <div className="card">
            <img src={e.img} alt="" />
                <button id='card-btn'>Add To Cart</button>
            <div className="card-box">
                <h4>{e.name}</h4>
                <p>{e.price} <span>{e.aksiya}</span></p>
                <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <p>(65)</p>
                </div>
            </div>
        </div>
        })}
           
      
        
      </div>
    </div>
  )
}

export default Card
