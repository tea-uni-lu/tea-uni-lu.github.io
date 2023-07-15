import emailjs from '@emailjs/browser';
import Table from 'react-bootstrap/Table';
import Igor from '../assets/igor.jpeg'
import Mirela from '../assets/mirela.jpeg'
import KH from '../assets/KH.jpeg'
import AlexT from '../assets/AlexT.png'

function Contacts() {
    return (
        <div>
            <h2>Contact Us</h2>
            <p style={{fontSize: "18px"}}>
            You can contact us via email at <a href={"mailto:tea2023@uni.lu"}>tea2023@uni.lu</a>.
            </p>
            
            <p style={{fontSize: "18px"}}>
                Campus address:
                162a Av. de la Faiencerie, 1511 Limpertsberg 
            </p>
            <hr
            style={{
              background: 'blue',
              color: 'blue',
              borderColor: 'pink',
              height: '3px',
            }}
          />
            <h3>Our Team</h3>
          <Table className={"table"}>
            <thead>
              <tr className='table_details'>
              <th className='table_details'>
                <img style={{ width: 150, height: 150}} src={Igor}/>
                </th>
                <th className='table_details'>
                <img style={{ width: 150, height: 150}} src={Mirela}/>
                </th>
                <th className='table_details'>
                <img style={{ width: 150, height: 150}} src={KH}/>
                </th>
                <th className='table_details'>
                  <img style={{ width: 150, height: 150}} src={AlexT}/>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='table_details'>
                <td className='table_details'>Workshop organiser</td>
                <td className='table_details'>Organisational support </td>
                <td className='table_details'>Technical support</td>
                <td className='table_details'>Workshop organiser</td>
              </tr>
              <tr className='table_details'>
                <td className='table_details'>Igor Poltavskyi</td>
                <td className='table_details'>Mirela Puleva</td>
                <td className='table_details'>Kyunghoon Han</td>
                <td className='table_details'>Alexandre Tkatchenko</td>
              </tr>
            </tbody>
          </Table>


          <hr
            style={{
              background: 'blue',
              color: 'blue',
              borderColor: 'pink',
              height: '3px',
            }}
          />

        </div>
    )
}

export default Contacts;