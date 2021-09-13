import React,{Component} from 'react'
import axios from 'axios'
import { Row , Col } from 'react-bootstrap';
import swal from 'sweetalert'
class PostForm extends Component
{
    
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname : '',
            floor: '',
            room: '',
            bednumber : '',
            status: '',
            temperature: '',
            upperpressure : '',
            lowerpressure: '',
            pulse: '',
            bloodoxygen: '',
        }
    }
    
    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    submitHandler = e =>
    {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://hotpital-pakpoon.herokuapp.com/auth/member/', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }


    render() {
        const {firstname ,lastname, floor,room ,bednumber,status,temperature,upperpressure,lowerpressure,pulse,bloodoxygen} = this.state
      const mostrarAlerta=()=>{
          swal({
              title: 'บันทึกข้อมูล',
              text: 'ต้องการบันทึกข้อมูลหรือไม่?',
              icon: "warning",
              buttons: ['No', 'Si'],
        }).then(respuesta=>{
            if(respuesta){
                swal({ text: "บันทึกข้อมูลสำเร็จ",
                icon: 'success' , timer: '2000'})
            }
        })
      }
        return (
            <Row xs={24}>
                <Col xs={12} style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                <h1>แบบฟอร์มข้อมูลรายวัน</h1>
                </Col>
                <Col xs={12}>
                    <div className="form-container" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                <form onSubmit = {this.submitHandler}>
                    <div className="form-group">
                        <input
                             className="form-input"
                            placeholder="ชื่อจริง"
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            placeholder="นามสกุล"
                            type="text"
                            name="lastname"
                            value={lastname}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            placeholder="ชั้น"
                            type="number"
                            name="floor"
                            value={floor}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            placeholder="ห้อง"
                            type="number"
                            name="room"
                            value={room}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            placeholder="เลขเตียง"
                            type="number"
                            name="bednumber"
                            value={bednumber}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            className="form-input"
                            placeholder="สถานะการรักษา"
                            type="text"
                            name="status"
                            value={status}
                                    onChange={this.changeHandler}
                                    defaultValue="Select สถานะ"
                                >
                                <option defaultValue>เลือกสถานะ</option>
                                <option value="รักษาอยู่">รักษาอยู่</option>
                                <option value="รักษาหายแล้ว">รักษาหายแล้ว</option>

                                </select>
                              
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            placeholder="ค่าอุณหภูมิ"
                            type="number"
                            name="temperature"
                            value={temperature}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            placeholder="ค่าความดันตัวบน"
                            type="number"
                            name="upperpressure"
                            value={upperpressure}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            placeholder="ค่าความดันตัวล่าง"
                            type="number"
                            name="lowerpressure"
                            value={lowerpressure}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            placeholder="ค่าชีพจร"
                            type="number"
                            name="pulse"
                            value={pulse}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-input"
                            placeholder="ค่าออกซิเจนปลายนิ้ว"
                            type="number"
                            name="bloodoxygen"
                            value={bloodoxygen}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit" 
                    onClick={() => mostrarAlerta()}
                    >
                        บันทึก
                    </button>
                </form>
            </div>
                </Col>

            </Row>
            
        )
    }
}

export default PostForm


// import React, {useState} from 'react'
// import Axios from 'axios'

// function PostForm() {
//     const url = "https://hotpital-pakpoon.herokuapp.com/auth/member/"
//     const [data, setData] = useState({
//         firstname: '',
//         lastname: '',
//         bednumber: '',
//         status: '',
//     })

//     function submit(e)
//     {
//         e.prevenDefault();
//         Axios.post(url, {
//             firstname: data.firstname,
//             lastname: data.lastname,
//             bednumber: data.bednumber,
//             status: data.status,
        
//         })
//         .then(res => {
//             console.log(res.data)
//         })
//     }
        
//     function handle(e){
//         const newdata = { ...data }
//         newdata[e.target.id] = e.target.value
//         setData(newdata)
//         console.log(newdata)
//     }

//     return (
//         <div>
//             <form onSubmit={(e)=> submit(e)}>
//                 <input onChange={(e)=>handle(e)} id="firstname" value={data.firstname} placeholder="firstname" type="text"></input>
//                 <input onChange={(e)=>handle(e)} id="lastname" value={data.lastname} placeholder="lastname" type="text"></input>
//                 <input onChange={(e)=>handle(e)} id="bednumber" value={data.bednumber} placeholder="bednumber" type="text"></input>
//                 <input onChange={(e) => handle(e)} id="status" value={data.status} placeholder="status" type="text"></input>
//                 <button>บันทึก</button>
//             </form>
//         </div>
//     )
// }

// export default PostForm
