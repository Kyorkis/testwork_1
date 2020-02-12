import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './app.css'

import GalleryComponent from '../galleryComponent'
import GridComponent from '../GridComponent'
import FormComponent from '../formComponent'

class App extends React.Component{
    state={
        galleryComponentData:'',
        gridComponentData:'',
        formData:''
    }
    
    urlForGettingData = "https://api.myjson.com/bins/zdbms"
    getData=async(url)=>{
        const res = await fetch(url)
        const data = await res.json()
        let dataForForm = data.form
        let dataForGallery = data.components.find(item=>item.type==="GalleryComponent")
        let dataForGrid = data.components.find(item=>item.type==="GridComponent")
        return this.setState({
            galleryComponentData:dataForGallery,
            gridComponentData:dataForGrid,
            formData:dataForForm
        })
    }
    
    componentDidMount(){
        this.getData(this.urlForGettingData)
    } 
    render(){
        return(
            <div >
                <div className="d-flex justify-content-left myheader">
                    <div className="d-flex align-items-center headerText">
                        Тестовое задание
                    </div>
                </div >
                <div className="myapp">
                    <GalleryComponent data={this.state.galleryComponentData}/>
                    <GridComponent data={this.state.gridComponentData}/>
                    <FormComponent data={this.state.formData}/>
                </div>
                <div style={{height:"200px",backgroundColor:"#323232"}}></div>
            </div>
        )
    }
}

export default App