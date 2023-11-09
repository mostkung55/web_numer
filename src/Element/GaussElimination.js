import {React, Component} from "react";
import Form from "react-bootstrap/Form";
//import './itrytodecsohard.css'

class GaussElimination extends Component{
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    createInputMatrix(){
      

        //var
        var N = document.getElementById("matrixSize").value;
        var MatString = ''//"<Form><Form.Group >";
        var n = parseInt(N)

        if (N !== ''){
            MatString += "<div><Form.Label class = 'forMatrix' style={{margin:'1% auto'}}>Input your number to matrix</Form.Label></div>"
        
            for (var i = 0; i < n; i++){
                for (var j = 0; j < n; j++){
                    MatString+="<input id='inputA"+i+j+"' type='number'  placeholder='a"+i+j+"' style='width:13%; margin:1% auto;'/>"
                }
                MatString+="<span> | </span>"
                MatString+="<input id='inputA"+i+n+"' type='number'  placeholder='b"+i+"' style='width:13%; margin:1% auto;'/>"
                MatString+="<br>"
            }
        }

        //sent out
        document.getElementById("generateMatrix").innerHTML = MatString;
    }
    
    getVariable(){
        //lib
        // const math = require("mathjs")

        //f
        function cloneArray(A) {
            return A.map((a)=> a.slice());
        }

        //var def
        var N = document.getElementById("matrixSize").value;
        var n = parseInt(N)
        

        //create array A
        var A = new Array(n)

        for (let index = 0; index < A.length; index++) {
            A[index] = new Array(n);
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n+1; j++) {
                var NUM = document.getElementById("inputA"+i+j+"").value;
                var num = parseInt(NUM)
                A[i][j] = num
            }
        }
        // console.log(math.sum(A))    // test

        //calculate
        var ans = ''
        var calM = cloneArray(A)
        for (let c = 0; c < n-1; c++) {

            for (let i = c+1; i < n; i++) { //ทำกับแถวถัดไป
                var toMul = calM[i][c]
                if (calM[i][c] !== 0 /*&& i !== c*/)   //ถ้าคอลัม c แถว i ไม่เท่ากับ c และมันยังไม่เป็น 0
                {
                    for (var j = 0; j < n+1; j++) { //ลบๆ{
                        calM[i][j] = Number((calM[i][j] - (calM[c][j] / calM[c][c] * toMul)).toFixed(5))
                    }
                }
            }
            // console.table(calM)
            //จบ 1 ตัว
        }
        
        //slove สมการ
        var x = new Array(n)
        x[n-1] = calM[n-1][n] / calM[n-1][n-1];
        for(let i = n-2; i >= 0; i--){
            
            var sum = 0
            for(let j = n-1; j >= i+1; j--){  //j = 2
                sum += calM[i][j] * x[j];
            }
            x[i] = (calM[i][n] - sum) / calM[i][i];
        }
        for (let i = 0; i < n;i++) {
            console.log(x[i])
        }

        for (let i = 0; i < n; i++) {
            ans += 'X' + (i+1) + ' = ' + x[i] + '<br>'
        }
        
        //sent out
        document.getElementById("showAns").innerHTML = ans; //"X1 = 0 <br> X2 = 2"
    }
    render(){
        return(
                <div className="text-center">
                    <h3>Gauss Elimination</h3>
                    <Form>
                        <Form.Group class="mb-3 text-center">
                            <Form.Label class = "text-center" >
                                Input your matrix size
                            </Form.Label>
                            {/* f(x) */}
                            <Form.Control id="matrixSize" type="number" step="1" placeholder="Enter matrix size" style={{width:"35%", margin:"1% auto"}} onChange={this.createInputMatrix}></Form.Control>
                            
                            {}
                            
                            <div class = 'secoundHead' id = "generateMatrix"></div>

                            <button type="button" class="btn btn-dark" style={{margin:"1% auto"}} onClick={this.getVariable}>Calculate</button>
                        </Form.Group>
                    </Form>

                    {/* <h3>Root answer here lah:</h3> */}
                    <div class = 'secoundHead text-center' id = "showAns"></div>

                </div>
        );
    }
}
export default GaussElimination;