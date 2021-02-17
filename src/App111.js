import React from "react";
import {SpreadSheets, Worksheet, Column} from '@grapecity/spread-sheets-react';
import excelIO from '@grapecity/spread-excelio';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css';
class App extends React.Component{
  constructor(props){

    super(props);
    this.state={
        dataSource :[
              { ID:0, Name:'A', Info1:'Info0' },
              { ID:1, Name:'B', Info1:'Info1' },
              { ID:2, Name:'C', Info1:'Info2' },
            ]
    }
    
    this.hostStyle =
    
    {
    
    left: "20px",
    
    right: "20px",
    
    position: "absolute",
    
    textAlign: "left",
    height:"100%"
    
    };
    
    var self = this;
    
    
    this.workbookInitialized = function(spread){
    // var sheet = spread.getSheet(0);
    this.spread = spread;
    // sheet.options.calcOnDemand = true;
    // sheet.setDataSource=dataSource;
    // console.log(workbook.getSheetCount());
    importFile=()=>{
      let excelUrl="./1.xlsx";
      let oReq=new XMLHttpRequest();
      oReq.open("get",excelUrl,true);
      oReq.responseType="blob";
      oReq.onload=function(){
        let blob=oReq.response;
        excelIO.open(blob,this.LoadSpread,function(message){
          console.log(message)
        })
      };
      oReq.send(null);
    }
    }
    importFile();
    }
    
    LoadSpread=(json)=>{
        jsonData=json;
        workbook.fromJSON(json);
        workbook.setActiveSheet("Revenues(Sales)")
    }
    componentDidMount(){
      // this.importFile()
    }
  render(){
    
    return <div style={this.hostStyle}>

      <SpreadSheets workbookInitialized={spread=>this.workbookInitialized(spread)} >
       <Worksheet dataSource={this.state.dataSource}>
          <Column dataField="ID"></Column>
          <Column dataField="Name"></Column>
          <Column dataField="Info1"></Column>
       </Worksheet>
      </SpreadSheets>
    
    </div>
  }
}

export default App;
