import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Nav} from 'react-bootstrap';

function Details(props) {

    let [num, setNum]     = useState('');
    let [fade2, setFade2] = useState('');
    let [alert, setAlert] = useState(true);
    let [tab, setTab]     = useState(0);

    useEffect(() => {
        let time_count = 2000;
        let a = setTimeout(() => {setAlert(!alert)}, time_count)
        setFade2('end')

        return () => {
            console.log(1);
            clearTimeout(a);
            setFade2('')
        }
    }, [])

    let { id } = useParams();
    let image_num = Number(id) + 1;
    let 찾은상품 = props.shoes.find((x) => { return x.id == id });
    let src_url = "https://codingapple1.github.io/shop/shoes" + image_num + ".jpg";

    return (
        <div className={"container start" + fade2}>
            {
                alert === true
                    ?
                <Box>
                    <Button bg="orange">2초 후에는</Button>
                    <Button bg="blue">깐깐하지 말기</Button>
                </Box>
                    : null
            }
            <div>
                <input onChange={(e)=>{setNum(e.target.value)}} />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={src_url} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>Button 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>Button 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>Button 2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}/>
        </div>
    )
}

function TabContent(props){

    let [fade, setFade] = useState('');

    useEffect(()=>{
        // change the char fade to end
        let a = setTimeout(()=>{setFade('end')}, 100)
        return ()=>{
            clearTimeout(a)
            setFade('')
        }
    }, [props])

    return (<div className={"start" + fade}>
        {
            [<div>내용 0</div>,
             <div>내용 1</div>,
             <div>내용 2</div>][props.tab]
        }
    </div>)
}

export default Details;