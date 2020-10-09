import axios from 'axios'
import 'regenerator-runtime/runtime'

class Postier{
    async sendRequest(request:string,id:Number,setResult:React.Dispatch<string>){

        const post:string="/sql/request/"+id

        console.log("posting..."+post)


        const res = await axios.post(post,{request})

        setResult(JSON.stringify(res.data[0]))


    }
}

export const postier = new Postier()