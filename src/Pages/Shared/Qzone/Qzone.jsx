import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

import bg from '../../../assets/bg.png'
const Qzone = () => {
    return (
        <div className="text-center bg-gray my-4 py-4">
            <h4>Q-Zone</h4>
            <div>
               <img src={qZone1}/>
               <img src={qZone2}/>
               <img src={qZone3}/>
            </div>
            <div  style={{alignContent:'center',paddingTop:'250px', color:'white',height:'500px',backgroundImage: `url(${bg})` }}>
               
            <p>All news is important today </p>
            </div>
        </div>
    );
};

export default Qzone;