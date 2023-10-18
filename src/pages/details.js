import { Table } from "react-bootstrap";
import '../App.css';
import table_sch from '../assets/table_sch.png'

function Details() {
    return (
        <div>
            <h2 className="marginer">Programme and information</h2>
            <p style={{fontSize: "18px"}}></p>
              <img style={{ width: 1000, height: null}} src={table_sch}/>
            <p style={{fontSize: "20px" }}>
                    <em>Registration is not necessary for invited participants to the TEA workshop.</em>
                
            </p>

            <h3>Overview of the TEA workshop</h3>
            <p className="marginer" style={{fontSize: "18px"}}>
                The Workshop “TEA” (Crash TEsting machine learning force fields: Applicability, best practices, limitations) will be held at the University of Luxembourg (UL) on October 23 – 25, 2023. This event is aimed to bring together experts in machine learning (ML) force fields (FF) to define the state of the art in this area, establish best-practice applications for different MLFF architectures, draft existing challenges, and discuss ways to resolve them. We aim to combine experienced and young developers of the ML models to ensure intensive and fruitful discussions between all participants with an excellent opportunity to reinforce existing and establish new collaborations. In what follows, we also provide you with a more detailed description of the planned Workshop. 
            </p>
            <p className="marginer" style={{fontSize: "18px"}}>
                Applying machine learning to accelerate atomistic simulations by orders of magnitude while preserving ab initio accuracy has revolutionized the field of computational chemistry. Currently, state-of-the-art ML simulations start to account for finite temperature effects, long-range interactions, and quantum nuclear effects. Before the ML era, such applications were computationally very demanding and limited to relatively simple and small systems. Novel ML architectures allow nanosecond-long dynamics for large periodic structures with hundreds of atoms in a unit cell or for biologically relevant molecules. Also, the average errors of the ML predictions on training and test data are often better than the presumed accuracy of the reference data.  However, the vast number of existing and competing ML architectures tuned for different applications creates a challenge for practitioners in selecting the optimal ML model for their purposes. 
            </p>
            <p className="marginer" style={{fontSize: "18px"}}>
                This workshop aims to test novel MLFFs on equal footing for various applications of practical interest. This includes:
            </p>
            <Table className="table_big">
            <tbody>
              <tr className='table_hide_border'>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>1. </td>
                <td className='table_hide_border'>Computing properties of flexible biomolecules, molecules of pharmaceutical interest, periodic systems with large and complex unit cells, molecules adsorbed on surfaces, and reconstructing the FF of an ensemble of molecules of different size and chemical composition when only a limited number of structures are given for each molecule.</td>
              </tr>
              <tr className='table_big'>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>2. </td>
                <td className='table_hide_border'>All the participants will be provided (through a dedicated TEA website four months before the workshop) training, validation, and test datasets of different sizes to challenge the accuracy and data efficiency of their choice ML architectures. The particular setting for the molecular dynamics runs and the structural and thermodynamical properties to compute will also be specified to provide a fair comparison between the results.</td>
              </tr>
              <tr className='table_big'>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>3. </td>
                <td className='table_hide_border'>During the workshop, the participants will compare the performance of their ML models to figure out optimal application cases and best practice scenarios, as well as the limitations a practitioner can encounter when applying those models for similar calculations.</td>
              </tr>
              <tr className='table_big'>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>         </td>
                <td className='table_hide_border'>4. </td>
                <td className='table_hide_border'>A detailed analysis of all ML models' performance (beyond mean errors) will be presented based on the pre-trained models provided by the participants (one month before the workshop using the TEA website).</td>
              </tr>
              <tr className='table_big'>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>        </td>
                <td className='table_hide_border'>5. </td>
                <td className='table_hide_border'>Finally, a detailed overview of the workshop results will be published in a peer-reviewed journal as a guide for the potential and active users of the tested ML models. When successful, such a workshop can become a regular practice highlighting the most recent developments in the field of MLFFs.</td>
              </tr>
            </tbody>
        </Table>
        </div>
    )
}

export default Details;