import *as React from 'react'
import {render} from 'react-dom'

import {useState,useEffect} from 'react'
import {postier} from './Postier'

function Sql() {

    const [id, setid] = useState<Number>(0)
    const [request, setrequest] = useState("")
    const [result, setresult] = useState<string>(null)

    useEffect(()=>{
        const url:string=window.location.href.split('//')[1].split('/')[2]
        setid(parseInt(url))
    },[])

    const submit = (e)=>{
        e.preventDefault()
        postier.sendRequest(request,id,setresult)
    }

    return <div>
        <form method="post" onSubmit={submit}>
            <textarea cols={50} rows={20} name="request" value={request} onChange={e=>{setrequest(e.target.value)}} />
            <button>send</button>
        </form>
        <div className="line">
            <h1>Response</h1>
                <div className="result">{result}</div>
        </div>
    </div>
}

render(<Sql/>,document.getElementById("app"))